# Frontend Dockerfile
FROM nginx:alpine

# Remove default index.html
RUN rm -rf /usr/share/nginx/html/*

# Copy the frontend files to nginx server
COPY ./ /usr/share/nginx/html

# Expose port 80 to access the frontend
EXPOSE 80
