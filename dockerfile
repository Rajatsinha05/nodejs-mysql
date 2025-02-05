FROM node:20-alpine3.18

# Set working directory
WORKDIR /app

# Install PNPM globally
RUN npm install -g pnpm

# Copy package.json and lock file first (better caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install 

# Copy the rest of the application files
COPY . .

# Expose port
EXPOSE 8090

# Start the application
CMD ["node", "index.js"]
