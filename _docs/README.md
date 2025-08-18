# Aula 1

## Instalação tailwindcss seguindo documentação

```
npm install tailwindcss @tailwindcss/vite
```

configurar arquivo `vite.config.js`, conforme documentação

## Plugin para organizar ordem dos códigos tailwindcss

```
npm install -D prettier prettier-plugin-tailwindcss
```

### Obs: necessário configurar um arquivo prettier separado, ou dentro do package.json configurar o prettier

![alt text](image.png)

## Biblioteca de ícones heroicons

```
npm install @heroicons/react
```

# Aula 2

## Versionamento de código - github

### Repositório `hashtag-airbnb-mern`

![alt text](image-1.png)

Inicializar um repositório git no projeto do vscode a pasta raiz do projeto

```
git init
```

Criar arquivo .gitignore

```
git add .
git commit -m "mensagem"
```

Após o commit, os arquivos no repositório do github `hashtag-airbnb-mern` ainda não estão atualizados, pois o repositório local não está conectado com o repositório remoto. Para conectar local com remoto, seguir comandos abaixo:

Obs: na primeira tentativa de executar os comandos abaixo, necessário um passo anterior -> configuração do usuário

```
git config --global user.name "Gabriel Zemuner"
git config --global user.email "gabrielzemuner@live.com"
```

Após configuração do usuário, executar comandos abaixo:

```
git remote add origin https://github.com/gabrielzemuner/hashtag-airbnb-mern.git
git branch -M main
git push -u origin main // depois podemos usar apenas o comando git push
```

### Tratamento de responsividade dos componentes

### Instalação react-router

```
npm i react-router
```

#### Configuração react-router

![alt text](image-2.png)