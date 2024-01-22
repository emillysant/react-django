# Use a imagem oficial do Node.js
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos de configuração e dependências do projeto
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Construa a aplicação
RUN npm run build

# Exponha a porta que a aplicação será executada
EXPOSE 5173

# Comando para iniciar a aplicação quando o contêiner for executado
CMD ["npm", "run", "dev"]


# docker build -t frontend_react .
# docker run -p 5173:5173 -d frontend_react
