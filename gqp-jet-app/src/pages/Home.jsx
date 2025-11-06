import datasetCover from "../assets/dataset-cover.png"; // adjust path if needed

export default function Home() {
      return (
        <main
          style={{
            padding: 24,
            fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
            background: "#f3f6ff",
            minHeight: "100vh",
          }}
        >
          <section style={{ maxWidth: 1000, margin: "0 auto" }}>
            <header style={{ textAlign: "center", marginBottom: 18 }}>
              <h1 style={{ fontSize: 32, margin: 0, color: "#5b21b6" }}>
                QGP Jet Classification
              </h1>
              
            </header>
    
            <div
              style={{
                background: "white",
                borderRadius: 12,
                padding: 16,
                boxShadow: "0 8px 24px rgba(16,24,40,0.06)",
              }}
            >
              <h2 style={{ marginTop: 0 }}>📊 ML-JET Dataset</h2>
              <p>
                The goal of our project is to classify the{" "}
                <a
                  href="https://www.kaggle.com/datasets/haydarmehryar/ml-jet?select=jet_ml_benchmark_config_01_to_09_alpha_0.2_0.3_0.4_q0_1.5_2.0_2.5_MMAT_MLBT_size_1000000_shuffled.pkl"
                  target="_blank"
                  rel="noreferrer"
                >
                  ML-JET dataset
                </a>
                , composed of <strong>32×32 pixel</strong> images representing particle jets from Pb-Pb collisions.
              </p>
              <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
                <img
                  src={datasetCover}
                  alt="ML-JET example"
                  style={{ width: 240, borderRadius: 8 }}
                />
              </div>
            </div>
          </section>
        </main>
      );
    }