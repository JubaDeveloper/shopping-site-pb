
FROM node:18-alpine as base
WORKDIR /app-base
COPY package.json .

FROM base as prod
RUN  yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=prod /app-base/dist /usr/share/nginx/html
EXPOSE 80