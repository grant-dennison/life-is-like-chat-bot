FROM node:18-alpine

RUN apk add --no-cache tini

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY index.js /app/index.js

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "index.js"]
