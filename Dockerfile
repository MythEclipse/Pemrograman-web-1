# Use the official Node.js image as the base image
FROM node:22-alpine

# Install pnpm
RUN npm install -g pnpm

# Create and change to the app directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3092

# Use a non-root user for security
RUN addgroup -S appgroup && adduser -S -G appgroup appuser
USER appuser

# Define the command to run the application
CMD ["pnpm", "run", "start"]