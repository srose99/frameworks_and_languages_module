FROM node:lts-alpine

WORKDIR /app

RUN npm install express

EXPOSE 8001

COPY . .

CMD ["node", "server.js"]
