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

RUN mkdir /usr/database
COPY /home/abrj/databases/database.db /usr/database/database.db

EXPOSE 3000
ENV HOST http://andersj.io
ENV DB_CONNECTION /usr/database/database.db
CMD [ "npm", "run", "run" ]
