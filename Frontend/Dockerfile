FROM node:21
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
RUN npm run client
CMD ["npm", "run", "server"]
