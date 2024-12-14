FROM node:18-alpine

WORKDIR /app

RUN apk update && npm install express

COPY to-do-server.js /app

COPY index.html /app

EXPOSE 5050

CMD ["node", "to-do-server.js"]
