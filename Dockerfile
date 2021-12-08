FROM node:16

RUN mkdir /app
COPY ./process.js /app
WORKDIR /app
EXPOSE 4080
CMD ["node", "./process.js"]