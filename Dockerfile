FROM node
RUN mkdir opt/koa-api-example
COPY package.json app.js opt/koa-api-example/
COPY middlewares /opt/koa-api-example/middlewares/
WORKDIR /opt/koa-api-example
RUN ls
RUN npm i
ENTRYPOINT npm run start