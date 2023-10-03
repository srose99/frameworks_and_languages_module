  FROM golang:latest
  WORKDIR /server
  
  COPY go.mod .
  COPY go.sum .
  RUN go mod download

  COPY . .
  RUN go build -o main main.go
  EXPOSE 8000
  CMD ["./main"]