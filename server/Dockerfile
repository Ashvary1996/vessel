# FROM ubuntu
# # Set working directory
# # WORKDIR /server

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_25.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs

# COPY package*.json ./

# RUN npm install

# # Copy rest of files (node_modules ignored via .dockerignore)
# COPY . .

# ENTRYPOINT ["node", "index.js"]




# ---------------Light weiight

# Lightweight base image
FROM node:20-alpine

# Set working directory
WORKDIR /server-app
 
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 8000
CMD ["node", "index.js"]

