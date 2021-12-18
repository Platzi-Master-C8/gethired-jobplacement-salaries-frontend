FROM node:16.13-alpine

RUN apk update && apk upgrade 
RUN apk add git
RUN mkdir -p /app
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . . 
CMD [ "npm", "start" ]
