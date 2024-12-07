FROM node:18-alpine

WORKDIR /app

RUN apk update && npm install uuid4

COPY logOutput.js /app

CMD ["node", "logOutput.js"] 
