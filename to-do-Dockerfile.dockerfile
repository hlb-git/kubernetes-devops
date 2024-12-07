FROM node:18-alpine

WORKDIR /app

RUN apk update && npm install express

COPY to-do-server.js /app

CMD ["node", "to-do-server.js"]
