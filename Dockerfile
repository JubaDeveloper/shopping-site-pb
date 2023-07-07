# syntax=docker/dockerfile:1
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json .
RUN yarn install

FROM base AS test
# Make one tests to ci/cd

FROM nginx
COPY --from=base /app/dist .
EXPOSE 80
