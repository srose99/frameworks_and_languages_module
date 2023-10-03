  FROM golang:latest
  WORKDIR /server/api-go
  COPY . .
  RUN go build -o main main.go
  CMD ["./main"]