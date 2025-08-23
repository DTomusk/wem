# Use Node.js LTS as the base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json prisma ./
RUN npm ci
RUN npx prisma generate

# Copy the rest of the project
COPY . .

# Expose port (default for Next.js)
EXPOSE 3000

RUN npm run build
CMD ["npm", "run", "start"]