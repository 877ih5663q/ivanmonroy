FROM node:18-alpine AS builder
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
WORKDIR /fe
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine AS production
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /fe/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
