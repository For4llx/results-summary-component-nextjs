FROM node:latest

WORKDIR /app

COPY . .

RUN npm install --production
COPY --from=dependencies /app/node_modules ./node_modules

RUN npm run build

CMD ["npm", "start"]
