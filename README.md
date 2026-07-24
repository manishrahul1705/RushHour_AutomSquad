# MetalliSense
## AI-Powered Real-Time Alloy Optimization for Sustainable Manufacturing

> **An Industry 4.0 solution that leverages Artificial Intelligence, Industrial IoT, and Explainable AI to optimize alloy composition, improve manufacturing quality, reduce production costs, and accelerate sustainable manufacturing.**

---

# Team Details

| **Team Name** | **AUTOM SQUAD** |
|---------------|-----------------|
| **Project Title** | **MetalliSense – AI-Powered Real-Time Alloy Optimization for Sustainable Manufacturing** |
| **Institution** | Sri Eshwar College of Engineering, Coimbatore |
| **Domain** | Artificial Intelligence • Industry 4.0 • Industrial IoT • Sustainable Manufacturing |

## Team Members

| **Member** | **Role** |
|------------|----------|
| **Manish Raghul S J** | Team Lead • Business Strategy |
| **Nethra V D** | AI/ML Engineer • Full Stack Developer |
| **Sathish M** | Backend Developer • System Integration |
| **Deepika K** | Frontend Developer • UI/UX Designer |
| **Nicksan Raj** | Research & Documentation |

---

# Project Description

MetalliSense is an AI-powered real-time alloy optimization platform designed to modernize conventional metal manufacturing through Artificial Intelligence and Industry 4.0 technologies.

The platform continuously collects live alloy composition data from industrial spectrometers through OPC UA communication, analyzes the data using Machine Learning models, detects abnormal compositions, and generates intelligent alloy correction recommendations before defects occur.

To improve operator decision-making, MetalliSense also features an Explainable AI Copilot that provides AI-generated explanations, chat assistance, and voice-enabled support while maintaining a Human-in-the-Loop workflow where operators review and approve AI recommendations.

By optimizing alloy composition before casting, the platform minimizes material waste, reduces energy consumption, lowers production costs, improves alloy quality, and supports sustainable manufacturing.

---

# Key Features

- Real-Time Alloy Composition Monitoring
- Live Spectrometer Data Integration
- OPC UA Industrial Connectivity
- AI-Based Alloy Optimization
- Isolation Forest Anomaly Detection
- Random Forest Alloy Recommendation
- Predictive Quality Analysis
- Explainable AI Copilot
- AI Chat Assistance
- Voice-Enabled AI Support
- Human-in-the-Loop Decision Support
- Smart Interactive Dashboard
- Complete Traceability & Audit Logging
- Energy Optimization
- Cost Optimization
- Carbon Emission Reduction
- Industry 4.0 Ready Architecture
- Enterprise-Scale Deployment

---

# System Architecture

<img width="1027" height="577" alt="System Architecture" src="https://github.com/user-attachments/assets/4d11ee70-72d3-41b4-8fe8-120485b0d6cb"/>

---

# Workflow

```text
Industrial Spectrometer
          │
          ▼
      OPC UA Server
          │
          ▼
   Node.js Backend API
          │
          ▼
      FastAPI AI Engine
          │
          ▼
 Isolation Forest Model
          │
          ▼
 Random Forest Model
          │
          ▼
 Recommendation Engine
          │
          ▼
 React Dashboard
          │
          ▼
 Operator Approval
```

---

# AI Models

MetalliSense uses Machine Learning models trained on historical alloy composition datasets to provide intelligent real-time recommendations for alloy correction and process optimization.

## AI Pipeline

```text
Historical Alloy Dataset
          │
          ▼
Data Cleaning & Preprocessing
          │
          ▼
Feature Engineering
          │
          ▼
Model Training
          │
          ▼
Model Evaluation
          │
          ▼
Model Serialization
          │
          ▼
FastAPI Inference API
          │
          ▼
Real-Time Alloy Prediction
```

## Trained Models

| Model | Purpose |
|--------|---------|
| Isolation Forest | Detects abnormal alloy compositions and identifies deviations from target specifications. |
| Random Forest Regressor | Predicts the optimal alloy element additions required to achieve the desired alloy grade. |

## AI Capabilities

- Real-Time Alloy Composition Analysis
- Alloy Anomaly Detection
- Alloy Correction Prediction
- Intelligent Recommendation Generation
- Explainable AI
- Confidence-Based Recommendations
- Human-in-the-Loop Validation
- Voice-Enabled AI Copilot

---

# Technology Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- OPC UA
- MongoDB
- Mongoose

## Artificial Intelligence

- Python
- FastAPI
- Scikit-Learn
- Pandas
- NumPy
- Isolation Forest
- Random Forest Regressor
- Google Gemini AI

## Database

- MongoDB

---

# Repository Structure

```text
MetalliSense
│
├── Frontend/
│
├── Backend/
│
├── AI/
│   ├── datasets/
│   ├── models/
│   │   ├── isolation_forest.pkl
│   │   ├── random_forest.pkl
│   │   ├── scaler.pkl
│   │   └── encoder.pkl
│   │
│   ├── train.py
│   ├── predict.py
│   ├── app.py
│   ├── requirements.txt
│   └── utils.py
│
├── Documentation/
│
├── README.md
│
└── LICENSE
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/manishrahul1705/MetalliSense.git
```

## Frontend

```bash
cd Frontend
npm install
npm run dev
```

## Backend

```bash
cd Backend
npm install
npm start
```

## AI Service

```bash
cd AI
pip install -r requirements.txt
python app.py
```

---

# Target Industries

- Steel Manufacturing
- Metal Foundries
- Casting Industries
- Metallurgical Plants
- Industrial Manufacturing
- Process Engineering
- Smart Manufacturing

---

# Benefits

- Improves Alloy Quality
- Reduces Material Waste
- Prevents Alloy Downgrades
- Optimizes Alloy Composition
- Lowers Energy Consumption
- Reduces Production Cost
- Enhances Process Efficiency
- Supports Sustainable Manufacturing
- Enables Data-Driven Decision Making
- Increases Operational Reliability

---

# Sustainability Impact

MetalliSense contributes towards:

- Sustainable Manufacturing
- Circular Economy
- Energy Optimization
- Resource Efficiency
- Waste Reduction
- Carbon Emission Reduction
- Climate Tech
- Industry 4.0 Transformation
- Net-Zero Manufacturing

---

# Future Scope

- Deep Learning-Based Alloy Prediction
- Digital Twin Integration
- Predictive Maintenance
- Multi-Plant Deployment
- Automated Furnace Control
- Edge AI Deployment
- Cloud Analytics Dashboard
- ERP & MES Integration

---

# Vision

**To empower manufacturing industries with intelligent AI-driven decision support that improves alloy quality, enhances operational efficiency, minimizes environmental impact, and accelerates the transition toward sustainable Industry 4.0 manufacturing.**

