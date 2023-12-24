FROM node:latest

RUN mkdir /code

ADD . /code

WORKDIR /code

RUN yarn install && yarn build

CMD yarn start
