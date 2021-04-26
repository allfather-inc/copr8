# Use an official node runtime as a parent image
FROM node:latest

WORKDIR /app/

COPY package.json yarn.lock /app
RUN cd /app \
    && yarn install --pure-lockfile

# Add rest of the client code
COPY . /app/

EXPOSE 3000

CMD yarn start
