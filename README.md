[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Shopping site - ReactTS 

It's a site to test my skills and knowledge - Feel free to get and make updates

<h4 align="center"> 
    :construction:  Project in construction  :construction:
</h4>

# 🔨 Project functionalities

`Function 1` - Filter product by name functionalitie

<img width="585" alt="Captura de Tela 2023-07-07 às 17 10 55" src="https://github.com/JubaDeveloper/shopping-site-pb/assets/108185479/4d44bdcb-dea1-4177-87f0-4b8236a61ab1">

`Function 2` - List products in initial page showing the informations and price

<img width="585" alt="Captura de Tela 2023-07-07 às 17 12 29" src="https://github.com/JubaDeveloper/shopping-site-pb/assets/108185479/b2f7fbec-0068-4446-9bbf-4dfbf61e813d">

`Function 3` - Show the product fully information in the individual page to view more data

<img width="585" alt="Captura de Tela 2023-07-07 às 17 13 29" src="https://github.com/JubaDeveloper/shopping-site-pb/assets/108185479/77e38878-87df-4066-9f5b-11c0e479a342">

# ✅ The project technologies

- `Docker` - To image build and ci/cd concepts ✔️
- `TailwindCSS` - The library to make easily work with css ✔️
- `MirageJS` - The library to make tests using fake back-end (Pending to come 🕒)
- `Typescript` - The fully typed language to make more readable your project ✔️
- `Vite` - Server to set up the project ✔️
- `React` - The library to make the website ✔️
- `Git workflow` - Going ahead and automating the process of build, deploy, register... (ci/cd) ✔️

# 🛠️ Installation/Initialization process - Without Docker

- Clone this repository:
  ```bash
      git clone https://github.com/JubaDeveloper/shopping-site-pb/ [📁 and path/folder to install it]
  ```
- Install all necessary packages:
   - yarn:
     ```bash
      yarn install 
      ```
  - npm:
    ```bash
      npm install 
    ```
- Starting project Dev-Mode
  - yarn:
     ```bash
      yarn dev [--host to expose it to network]
      ```
  - npm:
    ```bash
      npm run dev [--host to expose it to network]
    ```
- Building project to distribuction (Run out of box with nginx for example)
  - yarn:
     ```bash
      yarn build 
      ```
  - npm:
    ```bash
      npm run build
    ```
# 🛠️ Installation/Initialization process - With Docker
- Running directly with docker compose:
  - Inside the project folder run it: 
      ```bash
          docker compose up -d [-d run in background]
      ```
- Without docker compose
  - Create your own image of application based in Dockerfile
    ```bash
        docker build . --tag my-own-local-image:latest
    ```
  - Go to run it:
    ```bash
        docker run -dp 3000:80 --platform linux/x86_64 --name my-container my-own-local-image:latest
    ```
