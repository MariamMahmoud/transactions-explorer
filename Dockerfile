# Use an official Node.js runtime as a parent image
FROM node:14-alpine

RUN apk add --no-cache postgresql-client

# Copy the rest of the application code to /app
COPY . .

RUN ["chmod", "+x", "./script.sh"]
ENTRYPOINT ["/bin/sh", "/script.sh"]

#Expose app port
EXPOSE 3000

# Set the working directory to /app
WORKDIR /app
COPY . .

# Copy package.json and package-lock.json to /app
COPY package*.json ./


CMD ["/bin/sh", "-c", "./script.sh"]

