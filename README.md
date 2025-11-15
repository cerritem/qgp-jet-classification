QGP Jet Classification Project
Team Members: Micki Rodenbush, Luke Baden, Esly Cerritos
Course: CSSE / Deep Learning Project – Fall 2025
 
Overview
 
This project performs binary classification of QGP jet images, distinguishing between MMAT and MLBT jets using machine learning.
The repository contains:
 
A Jupyter Notebook for model training and evaluation
 
A React frontend for visualization
 
A literature review
 
A complete training pipeline including baseline models and a transfer learning model (VGG16)
 
Our final model achieves approximately 81 percent test accuracy.
 
Repository Structure
 
project-root/
│
├── notebooks/
│ └── qgp_classification.ipynb
│
├── datasets/
│ └── jet_ml_benchmark_config_01_to_09_alpha_0.2_0.3_0.4_q0_1.5_2.0_2.5_MMAT_MLBT_size_1000_shuffled.pkl
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md
 
Python Dependencies (Jupyter Notebook)
 
Install these packages:
 
pip install numpy
pip install tensorflow==2.20.0
pip install scikit-learn
pip install matplotlib
pip install pickle5 (only if needed)
 
GPU support is optional. The notebook will automatically enable XLA and mixed precision if a GPU is available.
 
Node Dependencies (React Frontend)
 
To run the React app:
 
cd frontend
npm install
npm run dev
 
To build:
 
npm run build
 
Build output goes into frontend/dist.
 
Dataset Information
 
We use a subset of the ML-JET dataset released at WACV 2025.
 
Dataset file:
jet_ml_benchmark_config_01_to_09_alpha_0.2_0.3_0.4_q0_1.5_2.0_2.5_MMAT_MLBT_size_1000_shuffled.pkl
 
Place this file inside:
 
project-root/datasets/
 
This file contains:
 
X: N x 32 x 32 grayscale jet images
 
y: metadata columns (module, alpha_s, Q0)
 
No additional downloads are required.
 
How To Run the Jupyter Notebook
 
Open notebooks/qgp_classification.ipynb
 
Confirm the dataset file exists in the datasets folder
 
Run the notebook top to bottom
 
All configuration options (model choice, normalization, fine-tuning, etc.) are defined at the top of the notebook and fully commented
 
The notebook trains:
 
A logistic regression baseline
 
A VGG16 transfer learning model
 
Optional fine-tuning of VGG16
 
How To Run the React Frontend
 
Go to the frontend folder
 
Install dependencies: npm install
 
Start development server: npm run dev
 
Access locally in the browser at: http://localhost:5173
has context menu


has context menu
Press Enter to explore message content, then use Escape to shift focus back to the message.
npm run dev
