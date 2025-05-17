# Builder Stage 
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production Stage
FROM node:16-slim AS production

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

# copy only artifacts
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]
