# Base image do Node.js
FROM public.ecr.aws/docker/library/node:21-slim

# Instalar o npm mais recente
RUN npm install -g npm@latest --loglevel=error

# Instalar o curl e remover arquivos temporários do apt
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Verificar conectividade com o npm registry
RUN curl -I https://registry.npmjs.org

# Configurar o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos de dependências para o container
COPY package*.json ./

# Instalar dependências do projeto
RUN npm install --loglevel=error

# Copiar o restante dos arquivos para o container
COPY . .

# Construir o projeto para produção
RUN NODE_OPTIONS=--openssl-legacy-provider REACT_APP_API_URL=http://localhost:3001 SKIP_PREFLIGHT_CHECK=true npm run build --prefix cliente

# Organizar o diretório build
RUN mv cliente/build build && rm -rf cliente/* && mv build cliente/

# Expor a porta da aplicação
EXPOSE 8080

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]
