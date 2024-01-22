# This docker will simply run the front-end code

FROM node:latest
WORKDIR /
COPY . .

# Update npm
RUN npm install -g npm@latest

# Install dependencies
RUN npm install

EXPOSE 3031

CMD ["npm", "run", "start"]
