FROM node:8.10

RUN mkdir -p /usr/src/guide
WORKDIR /usr/src/guide

COPY package*.json ./
RUN npm install

RUN npm install -g serverless knex

COPY . .
