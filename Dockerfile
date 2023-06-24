FROM node:lts-alpine

WORKDIR /app

# RUN addgroup dev && adduser -S -G lucas dev
# USER lucas

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
