
FROM node:18-alpine as build
WORKDIR /app-base
COPY package.json .
RUN  yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=build /app-base/dist /usr/share/nginx/html
EXPOSE 80