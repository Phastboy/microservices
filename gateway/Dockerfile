FROM node:lts-alpine

# Set environment variable
ENV NODE_ENV=production

# Install OpenSSL (libressl) and required dependencies
RUN apk update && apk add --no-cache \
  openssl \
  libressl \
  && rm -rf /var/cache/apk/*

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
