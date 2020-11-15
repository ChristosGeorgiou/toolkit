
FROM node:14-alpine as builder

ENV NODE_ENV build

WORKDIR /app

COPY . /app

RUN npm ci \
    && npm run build

FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/dist/ /app/dist/

RUN npm ci

CMD ["node", "dist/main.js"]
