# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /client-app

# Copy package.json & lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend source
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /client-app

# Copy only production files from build stage
COPY --from=builder /client-app/package*.json ./
COPY --from=builder /client-app/.next ./.next
COPY --from=builder /client-app/public ./public
# COPY --from=builder /client-app/next.config.ts ./ || true

# Install only production dependencies
RUN npm install --production

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]