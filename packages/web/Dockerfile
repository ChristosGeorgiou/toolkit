FROM node:12.18.4 as builder

WORKDIR /app

ENV PATH=${PATH}:./node_modules/.bin
ENV NODE_PATH=/app/node_modules

COPY package.json package-lock.json ./
RUN npm ci
RUN ngcc

COPY src ./src
COPY angular.json tsconfig.app.json tsconfig.json tslint.json ./
RUN npm run build -- --prod

COPY extras ./extras

FROM nginx:alpine

EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/extras/nginx.conf /etc/nginx/conf.d/default.conf
