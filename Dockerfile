FROM node:14.17.3-alpine as node
WORKDIR /app
COPY ../.. .
RUN npm install
RUN npm run build --prod
#on copie le projet (image sans node module ) et on run npm install pour avoir un conteneur fih projet fini
# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/* /usr/share/nginx/html
EXPOSE 80
