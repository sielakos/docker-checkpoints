FROM node:16

RUN mkdir /app
COPY ./process.js /app
WORKDIR /app
CMD ["node", "./process.js"]