<<<<<<< HEAD
<<<<<<< HEAD
FROM public.ecr.aws/docker/library/node:21-slim
RUN npm install -g npm@latest --loglevel=error

#Instalando o curl
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

=======
FROM node:21-slim

RUN npm install -g npm@latest --loglevel=error
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
=======
FROM node:21-slim

RUN npm install -g npm@latest --loglevel=error
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --loglevel=error

COPY . .

<<<<<<< HEAD
<<<<<<< HEAD
RUN NODE_OPTIONS=--openssl-legacy-provider REACT_APP_API_URL=http://localhost:3001 SKIP_PREFLIGHT_CHECK=true npm run build --prefix client
=======
RUN REACT_APP_API_URL=http://localhost:3001 SKIP_PREFLIGHT_CHECK=true npm run build --prefix client
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
=======
RUN REACT_APP_API_URL=http://localhost:3001 SKIP_PREFLIGHT_CHECK=true npm run build --prefix client
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4

RUN mv client/build build

RUN rm  -rf client/*

RUN mv build client/

EXPOSE 8080

CMD [ "npm", "start" ]
