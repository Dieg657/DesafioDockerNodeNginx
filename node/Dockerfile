FROM node:alpine

# Add curl package
RUN apk add --no-cache curl

# Set workdir
WORKDIR /usr/src/app

# Copy mandatory files for install
COPY package.json .
COPY package-lock.json .

# Run install dependencies
RUN npm install

# Run dev script routine defined on package.json
CMD ["run", "dev"]

# Define npm as entrypoint
ENTRYPOINT [ "npm" ]