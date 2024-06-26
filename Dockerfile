FROM node:18-bullseye-slim as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .
COPY yarn.lock .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn install

COPY . .
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:stable-bullseye as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 8080
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
