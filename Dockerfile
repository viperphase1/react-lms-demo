FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install material-symbols@latest

COPY . .

EXPOSE 3000

CMD [ "npm","start"]