# Define the base image as node:20 and name it as base.
FROM node:20 AS base

# Set the working directory inside the container to /app.
WORKDIR /app

# Globally install the package manager pnpm.
RUN npm i -g pnpm

# Copy the package.json and pnpm-lock.yaml files to the working directory in the container.
COPY package.json pnpm-lock.yaml ./

# Install project dependencies using pnpm.
RUN pnpm install

# Copy all files from the context directory to the working directory in the container.
COPY . .

# Run the project build command using pnpm.
RUN pnpm build

# Define a second stage of the image based on node:20-alpine3.19 and name it as release.
FROM node:20-alpine3.19 as release

# Set the working directory inside the container to /app.
WORKDIR /app

# Globally install the package manager pnpm.
RUN npm i -g pnpm

# Copy the node_modules folder from the base stage.
COPY --from=base /app/node_modules ./node_modules

# Copy the package.json file from the base stage.
COPY --from=base /app/package.json ./package.json

# Copy the .next folder from the base stage.
COPY --from=base /app/.next ./.next

# Mount /public as a volume.
VOLUME /public

# Define the default command to be executed when the container is started.
CMD ["pnpm", "start"]
