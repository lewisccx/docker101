  
FROM node:14.16.0-alpine3.10
# create or use existing /app folder
WORKDIR /app
# add package.json to /app folder
ADD package*.json ./
# install all dependencies from package.json
RUN npm install
# add everything from local directory to /app directory
ADD . .
# run the app
CMD node index.js
