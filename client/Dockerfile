FROM node:lts-alpine

WORKDIR /app

COPY package.json .
RUN npm install

EXPOSE 8001

COPY . .

CMD ["node", "server.js"]
