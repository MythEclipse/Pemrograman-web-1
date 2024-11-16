#!/bin/bash

# Image and container names
IMAGE_NAME="pw1"
CONTAINER_NAME="mypw1"

# Function to handle errors
handle_error() {
    echo "Error: $1"
    exit 1
}
#docker stop mypw1
#docker rm mypw1
# Check if the container already exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing existing container..."
    # Stop the running container
    docker stop $CONTAINER_NAME || handle_error "Failed to stop the container."
    # Remove the container
    docker rm $CONTAINER_NAME || handle_error "Failed to remove the container."
else
    echo "No existing container found."
fi

# Check if the image already exists
if [ "$(docker images -q $IMAGE_NAME)" ]; then
    echo "Removing existing Docker image..."
    docker rmi $IMAGE_NAME || handle_error "Failed to remove Docker image."
else
    echo "No existing image found."
fi

# Build Docker image without cache
echo "Building Docker image with no cache..."
docker build --no-cache -t $IMAGE_NAME . || handle_error "Failed to build Docker image."

# Run a new container with port mapping
echo "Running new container..."
docker run -d -p 3092:3092 --name $CONTAINER_NAME --restart always $IMAGE_NAME || handle_error "Failed to run the new container."

echo "Deployment completed successfully!"