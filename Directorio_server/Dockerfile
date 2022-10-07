FROM node:16.14.0

WORKDIR /index

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

# docker build  -t ws-directorio .
# docker images
# winpty docker run --name ws-directorio-server  -it -p 8081:8081 ws-directorio