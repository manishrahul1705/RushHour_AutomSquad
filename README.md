# MetalliSense
### AI-Powered Real-Time Alloy Optimization for Sustainable Manufacturing

> Real-time spectrometer monitoring + ML anomaly detection + closed-loop RL alloy correction — with a human always in the loop.

---

## Team — AUTOM SQUAD
Sri Eshwar College of Engineering, Coimbatore

| Member | Role |
|---|---|
| Manish Raghul S J | Team Lead • Business Strategy |
| Nethra V D | AI/ML Engineer • Full Stack |
| Sathish M | Backend • System Integration |
| Deepika K | Frontend • UI/UX |
| Nicksan Raj | Research & Documentation |

---

## Problem
Alloy composition drifts during manufacturing. Corrections today rely on operator experience and static tables — no system learns from what actually worked. Off-spec batches mean wasted material, energy, and cost.

## Solution
MetalliSense reads live spectrometer data (OPC UA), detects anomalies, recommends alloy corrections, explains them in plain language, and — its key differentiator — **learns continuously from operator decisions and real outcomes** via a closed-loop RL engine. Every recommendation still requires human approval.

---

## Features
- Real-time OPC UA spectrometer integration
- ML anomaly detection + alloy correction recommendations
- **Closed-loop RL engine** — improves from every operator decision, online
- Explainable AI copilot (chat + voice)
- Human-in-the-loop approval on every action
- Manufacturing safety constraints, full audit trail
- Firebase Auth, interactive dashboard

---

## Tech Stack

| Layer | Stack |
|---|---|
| Frontend | React, Vite, Tailwind, Axios, Recharts, Firebase Auth |
| Backend | Node.js, Express, MongoDB, Firebase Admin, OPC UA |
| AI Service | Python, FastAPI, Scikit-learn (anomaly + alloy models) |
| Agent/Copilot | Python, FastAPI, Groq LLM, ElevenLabs, **SGDRegressor (RL)** |

---

## Architecture
<img width="1027" height="577" alt="System Architecture" src="https://github.com/user-attachments/assets/4d11ee70-72d3-41b4-8fe8-120485b0d6cb"/>

---

## Workflow
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

## Folder Structure
```
MetalliSense/
├── MetalliSense_Frontend/   React app (pages, services, context)
├── MetalliSense_Backend/    Express API (routes, controllers, models)
├── MetalliSense_AI/         FastAPI — anomaly + alloy models
└── MetalliSense_Agent/      FastAPI — copilot + closed-loop RL engine
```

---

## Setup

```bash
git clone https://github.com/manishrahul1705/MetalliSense.git

# AI Service
cd MetalliSense_AI && pip install -r requirements.txt
python app/training/train_anomaly.py && python app/training/train_alloy_agent.py
uvicorn app.main:app --port 8000

# Agent Service
cd MetalliSense_Agent && pip install -r requirements.txt
python app/training/train_anomaly.py && python app/training/train_alloy_agent.py
python app/training/train_rl.py
uvicorn app.main:app --port 8001

# Backend — add .env (DATABASE, JWT_SECRET, FIREBASE_*)
cd MetalliSense_Backend && npm install && node server.js

# Frontend — add .env (VITE_API_BASE_URL, VITE_FIREBASE_*)
cd MetalliSense_Frontend && npm install && npm run dev
```

---

## Key API Endpoints

| Endpoint | Description |
|---|---|
| `POST /anomaly/predict` | Anomaly score for a composition |
| `POST /alloy/recommend` | Base correction recommendation |
| `POST /rl/optimize` | 3 ranked RL correction strategies |
| `POST /rl/feedback` | Submit decision — **updates policy live** |
| `GET /rl/policy/status` | Policy learning progress |
| `POST /copilot/explain` | Natural-language explanation |

---

## AI/ML Workflow
```
Historical data (200k rows) → feature engineering →
  Anomaly model (Isolation Forest-style)
  Alloy model (Gradient Boosting, multi-output)
→ serialized (.pkl) → FastAPI inference → real-time prediction
```

## Closed-Loop RL Engine (core differentiator)
A contextual-bandit policy (`SGDRegressor`, online `partial_fit`) — not deep RL, since alloy correction is a single-shot decision, not a sequential control problem.

1. **Propose** — 3 candidates (conservative/balanced/aggressive), safety-clipped, ranked by predicted reward. Always `requires_human_approval: true`.
2. **Learn** — operator feedback + measured outcomes update the Q-function immediately, no retraining pipeline.
3. **Audit** — every decision logged for traceability.

**Verified:** 60,000-update offline bootstrap from historical data; live feedback test moved average reward 0.3819 → 0.3933 in real time.

---

## Security
- Firebase Auth (no custom password storage)
- JWT verification on every protected route
- Secrets in `.env`, never committed
- Human approval required before any alloy change — AI never auto-executes
- Server-side safety constraints, independent of frontend
- Full audit logging

## Testing & Performance
- Anomaly + alloy models: trained and validated on 200k-row dataset, live-tested via API
- RL engine: 60k-update bootstrap + live online update confirmed
- Frontend: clean production build, zero errors
- All services expose `/health` with per-subsystem status

## Challenges Faced
- Isolated subsystem init so one missing API key doesn't silently break unrelated features
- Fixed misleading auth errors (server misconfig vs. real invalid token)
- Chose a lightweight contextual bandit over deep RL — same closed-loop learning, far less infrastructure

## Future Scope
- Deep learning models as more labeled data accumulates
- Digital twin integration, predictive maintenance
- Multi-plant RL policies, edge deployment
- Real (non-simulated) outcome pipeline for RL training

---

## Demo
- Video: _[[demo video link Click Here ](https://drive.google.com/file/d/1MyXXWNe0MHYiYzeLW-OMMofrn2otPtRv/view?usp=sharing)]_
- Screenshots: <img width="1916" height="906" alt="Screenshot 2026-03-17 230849" src="https://github.com/user-attachments/assets/51634afc-0d27-4f5e-83bb-becebbe7761b" />
- Documentation: _[[documentation link Click Here](https://drive.google.com/file/d/1fFIEvOiaSyYC7mO_7a9Chs_Q3ohoELFf/view?usp=sharing)]_

## References

1. [Real-Time Melt Chemistry Monitoring — Tecnar Alulibs](https://moltenmetalanalyzer.tecnar.com/aluminum/chemistry-monitoring/)
2. [AI to Cut Scrap and Energy in Casting — Valve World Americas](https://valve-world-americas.com/using-artificial-intelligence-ai-to-reduce-scrap-and-energy-usage-in-the-casting-process/)
3. [AI Transforming Casting Quality — TVARIT & SAG (Foundry Planet)](https://www.foundry-planet.com/d/reducing-scrap-raising-standards-how-ai-is-transforming-casting/)
4. [AI-Enabled Optimization in Foundries — India Case (LinkedIn)](https://www.linkedin.com/pulse/reigniting-growth-indias-foundries-harnessing-ai-tackle-challenges-rwbpc)
5. [AI and Computational Methods for Metallic Alloys — Frontiers in Materials](https://www.frontiersin.org/journals/materials/articles/10.3389/fmats.2025.1645227/full)
6. [OPC UA-Based Real-Time Integration for Industrial Devices — MachineMetrics](https://www.machinemetrics.com/connectivity/protocols/opc-ua)
7. [Complete Project Documentation](https://drive.google.com/uc?export=download&id=1t5t6FkgSQS77V5sxvMuya3mn057dNp2B)

**Technical References**

[FastAPI](https://fastapi.tiangolo.com/) · [Scikit-learn](https://scikit-learn.org/) · [OPC UA Foundation](https://opcfoundation.org/about/opc-technologies/opc-ua/) · [Firebase Auth](https://firebase.google.com/docs/auth) · [Groq API](https://console.groq.com/docs)

---

**Team AUTOM SQUAD**
