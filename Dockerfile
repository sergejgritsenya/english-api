FROM node:12.16.2

WORKDIR /usr/src/app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --production=false

COPY . ./

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]