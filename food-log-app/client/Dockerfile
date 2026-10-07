# build
FROM node:26-slim AS builder

WORKDIR /app

COPY client/package*.json ./

RUN npm ci

COPY client/ ./

RUN npm run build

# WEB_SERVER
FROM nginx:stable-alpine AS production

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

COPY client/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
