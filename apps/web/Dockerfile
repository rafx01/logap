FROM node:24-alpine

WORKDIR /app

RUN npm i -g npm@11.14.1

COPY package.json package-lock.json ./
COPY apps/web/package.json ./apps/web/
COPY packages/ui/package.json ./packages/ui/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/

RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--filter=web"]
