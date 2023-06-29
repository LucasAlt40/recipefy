FROM node:lts-alpine

WORKDIR /app

# RUN addgroup dev && adduser -S -G lucas dev
# USER lucas

COPY package.json yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "dev"]


EXPOSE 5173