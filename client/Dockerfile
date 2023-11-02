FROM node

WORKDIR /client/

RUN npm install express

EXPOSE 8001

COPY . .

CMD ["node", "server.js"]
