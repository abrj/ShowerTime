FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install

# Bundle app source
COPY . .
RUN mkdir /usr/src/database

EXPOSE 3000
ENV HOST http://andersj.io
ENV DB_PRODUCTION /usr/src/database/database.db
CMD [ "npm", "run", "run" ]
