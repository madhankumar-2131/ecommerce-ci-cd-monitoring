# 🛒 E-commerce CI/CD Monitoring Project

A **simple E-commerce web application** built using **Python Flask** and HTML/CSS, with real-time monitoring via **Prometheus + Grafana**, and deployed automatically to **GitHub Pages** using **GitHub Actions CI/CD pipeline**.

> 🚀

---

## 🌐 Live Demo

🔗 [Click here to view the live site](https://madhankumar-2131.github.io/ecommerce-ci-cd-monitoring/)

---

## 📁 Clean folder structure and beginner-friendly setup
![file](https://github.com/user-attachments/assets/4a873026-64ea-4c06-bfbf-044fa734c16e)

## 📌 Features

- ⚙️ Flask-based Python backend exposing custom `/metrics`
- ✅ GitHub Actions for CI/CD: Build → Deploy to GitHub Pages
- 📈 Real-time monitoring with Prometheus + Grafana dashboards
- 🧪 Local testing with metrics tracking
- 📁 Clean folder structure and beginner-friendly setup
- 💡 Ideal for showcasing DevOps knowledge (CI/CD + Monitoring)

---


### 🔍 Prometheus

Prometheus is an **open-source monitoring system** used to collect and store time-series data by scraping metrics from applications.

#### ✅ Key Features:
- **Pull-based model** – Prometheus pulls data from the `/metrics` endpoint of your Flask app
- **Lightweight format** – Metrics are exposed in plain text (easy to debug and extend)
- **Time-series database** – Stores historical data with timestamps for analysis

#### 📌 In this project:
![promothes](https://github.com/user-attachments/assets/1c7e3da0-15f3-43b8-9fef-64e83e2be154)

- Your Flask app exposes a `/metrics` route
- Prometheus is configured to **scrape** that endpoint periodically
- You can track custom metrics like:
  ```text
  http_requests_total{method="GET", endpoint="/"} 15



### 📈Grafana

Grafana is an analytics and visualization tool used to create interactive dashboards.

✅ Connects to Prometheus as a data source  
✅ Visualizes data using charts, graphs, alerts  
✅ Great for project dashboards, especially for `/metrics` data  


🧠 In this project, only **project-specific metrics** are monitored — like HTTP request count, not system-level metrics (like CPU or memory).
![grafana1](https://github.com/user-attachments/assets/3e850205-1de9-4837-81b5-754d5fe4cee7)

---![Screenshot (136)](https://github.com/user-attachments/assets/d3a966cf-4194-4a70-bde5-2d49e6b5d16b)
![Screenshot (135)](https://github.com/user-attachments/assets/a58bbeb9-9302-4f04-a4f9-01a76a4a3235)


![Screenshot (134)](https://github.com/user-attachments/assets/2d1847c2-4066-4738-bb77-aed0c12f1f8a)



## 🧪 Run Locally (Flask Monitoring)

![img](https://github.com/user-attachments/assets/5babe622-b1c4-45fc-be06-309171a1b554)

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
