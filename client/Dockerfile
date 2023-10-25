FROM python:alpine

WORKDIR /app/

EXPOSE 8001

COPY client.html .

CMD ["python3", "-m", "http.server", "8001"]
