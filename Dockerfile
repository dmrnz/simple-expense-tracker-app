FROM node:12.22.10-alpine AS build

WORKDIR /app

COPY . ./

RUN npm ci --silent

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
