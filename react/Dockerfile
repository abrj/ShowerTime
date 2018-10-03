FROM alpine

RUN apk update \
 && apk add --no-cache npm \
 && npm i npm@latest -g

# application folder
ENV APP_DIR /react-app
RUN mkdir ${APP_DIR}
WORKDIR ${APP_DIR}
COPY package.json ${APP_DIR}
RUN npm install
RUN npm install -g serve
COPY . ${APP_DIR}
#ENV API_HOST="localhost"
#ENV API_PORT="2000"
ENTRYPOINT ["serve"] 
