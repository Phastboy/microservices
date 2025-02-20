FROM node:lts-alpine

# Install build tools and python (required for some node modules)
RUN apk update && apk add --no-cache \
    openssl \
    libressl \
    build-base \
    python3

WORKDIR /app
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm ci --include=dev

COPY . .
RUN npm run build

# Remove development dependencies for production
RUN npm prune --production

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
