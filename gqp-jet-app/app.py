import numpy as np
import keras
from PIL import Image
import gradio as gr

MODEL_PATH = "small32cnn_mlbt_mmat.keras"
STATS_PATH = "jet_image_scale_and_stats.npz"

model = keras.models.load_model(MODEL_PATH, compile=False)

stats = np.load(STATS_PATH)
SCALE = float(stats["SCALE"])
MEAN  = float(stats["MEAN"])
STD   = float(stats["STD"])
print("Loaded SCALE/MEAN/STD:", SCALE, MEAN, STD, flush=True)

CLASS_NAMES = ["MMAT", "MLBT"]



# ---- Preprocessing: Image -> (1, 32, 32, 1) normalized ----
def preprocess(img: np.ndarray) -> np.ndarray:
    if img.ndim == 3 and img.shape[2] == 3:
        img_gray = np.dot(img[..., :3], [0.2989, 0.5870, 0.1140])
    elif img.ndim == 3 and img.shape[2] == 1:
        img_gray = img[..., 0]
    elif img.ndim == 2:
        img_gray = img
    else:
        img_gray = img[..., 0]

    pil_img = Image.fromarray(img_gray.astype("uint8"))
    pil_img = pil_img.resize((32, 32), Image.BILINEAR)
    arr = np.array(pil_img).astype("float32")

    # Invert the global scaling to approximate original X
    arr_unscaled = arr / SCALE

    # Now apply the same normalization as during training
    arr_norm = (arr_unscaled - MEAN) / (STD + 1e-8)

    arr_norm = arr_norm[None, ..., None]
    return arr_norm



# ---- Prediction function for Gradio ----
def predict(img: np.ndarray):
    x = preprocess(img)
    raw = float(model.predict(x, verbose=0)[0, 0])
    print("Raw model output:", raw, flush=True)

    # raw ≈ P(MLBT) as in training
    prob_mlbt = raw
    prob_mmat = 1.0 - prob_mlbt

    return {"MLBT": prob_mlbt, "MMAT": prob_mmat}





# ---- Gradio interface ----
input_component = gr.Image(
    type="numpy",
    label="Jet image (grayscale or RGB, any size ≥ 32x32)"
)

output_component = gr.Label(
    num_top_classes=2,
    label="Predicted probabilities"
)

examples = []  # you can drop some example jet PNGs here later

demo = gr.Interface(
    fn=predict,
    inputs=input_component,
    outputs=output_component,
    title="MLBT vs MMAT Jet Classifier (Small 32×32 CNN)",
    description=(
        "Upload a jet image (32×32 heatmap or larger) and this model "
        "predicts whether it came from the MLBT or MMAT energy-loss module."
    ),
    examples=examples
)

if __name__ == "__main__":
    demo.launch()
