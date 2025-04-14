# 🛒 E-commerce CI/CD Monitoring Project

A **simple E-commerce web application** built using **Python Flask** and HTML/CSS, with real-time monitoring via **Prometheus + Grafana**, and deployed automatically to **GitHub Pages** using **GitHub Actions CI/CD pipeline**.

> 🚀 Impress your DevOps interviewer with clean CI/CD, metrics exposure, and modern DevOps stack (even without cloud hosting).

---

## 🌐 Live Demo

🔗 [Click here to view the live site](https://madhankumar-2131.github.io/ecommerce-ci-cd-monitoring/)

---

## 📌 Features

- ⚙️ Flask-based Python backend exposing custom `/metrics`
- ✅ GitHub Actions for CI/CD: Build → Deploy to GitHub Pages
- 📈 Real-time monitoring with Prometheus + Grafana dashboards
- 🧪 Local testing with metrics tracking
- 📁 Clean folder structure and beginner-friendly setup
- 💡 Ideal for showcasing DevOps knowledge (CI/CD + Monitoring)

---


### 🔍 What is Prometheus?

Prometheus is an **open-source monitoring system** used to collect and store time-series data by scraping metrics from applications.

#### ✅ Key Features:
- **Pull-based model** – Prometheus pulls data from the `/metrics` endpoint of your Flask app
- **Lightweight format** – Metrics are exposed in plain text (easy to debug and extend)
- **Time-series database** – Stores historical data with timestamps for analysis

#### 📌 In this project:
- Your Flask app exposes a `/metrics` route
- Prometheus is configured to **scrape** that endpoint periodically
- You can track custom metrics like:
  ```text
  http_requests_total{method="GET", endpoint="/"} 15



### 📈 What is Grafana?

Grafana is an analytics and visualization tool used to create interactive dashboards.

✅ Connects to Prometheus as a data source  
✅ Visualizes data using charts, graphs, alerts  
✅ Great for project dashboards, especially for `/metrics` data  

🧠 In this project, only **project-specific metrics** are monitored — like HTTP request count, not system-level metrics (like CPU or memory).

---

## 🧪 Run Locally (Flask Monitoring)

```bash
git clone https://github.com/madhankumar-2131/ecommerce-ci-cd-monitoring.git
cd ecommerce-ci-cd-monitoring
pip install -r requirements.txt
python app/app.py


## 🖥️ Tech Stack

| Layer             | Technology                   |
|------------------|------------------------------|
| Frontend         | HTML/CSS (Static Pages)      |
| Backend          | Python Flask                 |
| Monitoring       | Prometheus + Grafana         |
| CI/CD Pipeline   | GitHub Actions               |
| Deployment       | GitHub Pages                 |

---

## 🚦 Architecture

```text
User --> Static HTML (GitHub Pages)
        ↓
      Code changes --> GitHub Actions CI/CD
                    --> Auto Deploy to GitHub Pages

Optional:
Flask App (locally run) --> /metrics endpoint
                        ↓
                 Prometheus scrapes metrics
                        ↓
                 Grafana visualizes metrics
