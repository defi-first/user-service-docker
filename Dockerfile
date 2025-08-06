FROM node:alpile
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js