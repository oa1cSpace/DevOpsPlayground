# --- build stage ---
FROM node:26-slim AS builder

WORKDIR /app

COPY server/package*.json ./

RUN npm ci

COPY server ./

RUN npm run build


# --- runtime stage ---
FROM node:26-slim AS runtime

WORKDIR /app

ENV NODE_ENV=production

COPY server/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 5000

CMD ["node", "dist/src/main.js"]
