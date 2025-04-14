from flask import Flask, send_from_directory
from prometheus_client import Counter, generate_latest, CONTENT_TYPE_LATEST
import os

app = Flask(__name__, static_folder='../static-site')

REQUEST_COUNT = Counter("ecommerce_requests_total", "Total requests to e-commerce pages", ['endpoint'])

@app.route('/')
def serve_home():
    REQUEST_COUNT.labels(endpoint="/").inc()
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

@app.route("/metrics")
def metrics():
    return generate_latest(), 200, {'Content-Type': CONTENT_TYPE_LATEST}

if __name__ == "__main__":
    app.run(host="localhost", port=5000)
