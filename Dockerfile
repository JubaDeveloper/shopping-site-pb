# syntax=docker/dockerfile:1
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json .

FROM base AS prod
RUN yarn install

FROM nginx
COPY --from=prod /app/dist /usr/share/nginx/html
EXPOSE 80
