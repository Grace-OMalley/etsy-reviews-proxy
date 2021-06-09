FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 1337
CMD ["yarn", "start"]