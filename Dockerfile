FROM node:17-alpine

WORKDIR /app

COPY . .

RUN apk add --update \
  git \
  openssh \
  python3 \
  python3-dev \
  py3-pip \
  build-base \
  && rm -rf /var/cache/apk/*

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start"]

