from prometheus_client import start_http_server, Gauge
import time
import requests

# Create a metric to track website availability
website_status = Gauge('website_up', '1 if website is up, 0 if website is down')

def check_website():
    url = 'https://madhankumar-2131.github.io/ecommerce-ci-cd-monitoring/'
    try:
        response = requests.get(url)
        if response.status_code == 200:
            website_status.set(1)  # Website is up
        else:
            website_status.set(0)  # Website is down
    except requests.exceptions.RequestException:
        website_status.set(0)  # Website is down

if __name__ == '__main__':
    # Start the HTTP server to expose the metrics
    start_http_server(8000)  # Exposes on http://localhost:8000
    while True:
        check_website()
        time.sleep(60)  # Check every minute
