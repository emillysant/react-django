# React-Django

# Desafio Clarke Energia

SPA de escolha de fornecedor. Os usuários poderão informar o seu consumo de energia e escolher o melhor fornecedor de acordo com as suas necessidades.

# Dos Requisitos de Produto:

* O usuário deverá informar a sua consumo mensal de energia, exemplo: 30000 kWh (um número fictício > 0)

* Ao informar o consumo, o sistema deverá mostrar quais fornecedores poderiam atender a necessidade do cliente

* Cada fornecedor deve ter as seguintes informações: nome, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes

* Um fornecedor só pode atender um cliente caso o consumo mensal de energia deste seja maior do que o lmite mínimo de kWh do fornecedor

# Entrega Final

Você deverá enviar um email para `victor@clarke.com.br` com o seguinte título: `Desafio Clarke Energia | <Seu Nome>`. No email, você deve fornecer 2 links, são eles:

- Link para o repositório principal do projeto (você pode compartilhar a visibilidade do projeto com o usuário victor@clarke.com.br no Github) (v) - repositório publico
- Link para o projeto disponível online. Aqui recomendamos usar serivços como Netlify/Vercel para hospedar o seu frontend e backend. Sinta-se livre para usar outras plataformas que tenham o mesmo serviço. (x)

# Diferenciais

*Os itens a seguir não são obrigatórios. Lembre-se que o principal diferencial é o desafio ser entregue.* Os candidatos terão uma avaliação melhor se:

* O frontend for feito em React (v)

* O backend for feito em Python (v)

* A aplicação for integrada com Graphql(x) - obs: Usei a framework do Django

* O frontend tiver testes automatizados com Jest ou Cypress(v)

* O backend tiver testes automatizados(v)

* Os arquivos para que a aplicação funcione no Docker estiverem configurados (v)

## Backend

Foi pensado em trazer uma solução com django para o backend onde o usuário pode cadastrar novos fornecedores usando o rest_framework
![image](https://github.com/emillysant/react-django/assets/70452464/afc8dbb0-b123-4df2-ad82-64401720884a)

### Executando o Backend localmente
1 - Ativando a venv no linux
```
.\venv\Scripts\Activate
```
2 - Entrando na pasta do projeto
```
cd backend
```
3 - Instalando as dependencias
```
pip install requirements.txt
```
4 - Rodando as migrações
```
python manage.py makemigrations
```
5 - Aplicando as migrações
```
python manage.py migrate
```
6 - Rodando o serviço API
```
python manage.py runserver
```
7 - Rodando testes 
```
python manage.py test
```
### Executando o Backend localmente com dockefile
1 - Baixando a imagem
``` 
docker build -t backend_django .
```
2 - Buildando a imagem
```
docker run -p 8000:8000 backend_django
```
3 - No navegador acesse a porta: http://127.0.0.1:8000/api/

## Frontend

O frontend foi desenvolvido em React e  utilizado o axios para requisições http do backend
![image](https://github.com/emillysant/react-django/assets/70452464/640f93ae-7fde-43c6-93d9-a29137430cf9)

### Executando o frontend localmente

Obs: Lembre de primeiro rodar o backend
```
cd frontend
```
```
npm install
```
```
npm run dev
```
```
npm run test
```

### Executando o frontend localmente com Dockerfile
1 - Baixando a imagem
```
docker build -t frontend_react .
```
2 - Buildando a imagem
```
docker run --network=host -d frontend_react
```
3 - No navegador acesse a porta: http://localhost:5173/