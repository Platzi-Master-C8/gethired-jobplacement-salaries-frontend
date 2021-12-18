FROM node:16.13-alpine

RUN apk update && apk upgrade 
RUN apk add git
RUN mkdir -p /app
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package*.json ./
RUN npm install --ignore-scripts
COPY . . 
RUN npm run build
RUN ls /app/

FROM nginx:1.17.4-alpine
COPY /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
