# 🧪 Primeiros Passos - Real World App (RWA)
Este guia é um registro de todos os passos que segui para configurar o projeto [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app).
Nele contém o passo a passo de como clonar o projeto e manter uma estrutura de pastas e arquivos destinados a estudos **dentro de um repositório GitHub já existente** e que já possui arquivos, que foi o meu caso.

## 🧱 Estrutura ao final dos passos
testes-front-end-cypress/<br/>
├── guia-cypress.md<br/>
├── README.md<br/>
├── real-world-app-estudos/<br/>
│ ├── projeto/ ← (código clonado do RWA)<br/>
│ ├── documentos/<br/>
│ └── primeiros-passos-rwa.md<br/>

>⚠️ Importante lembrar: se criar arquivos no GitHub e depois for trabalhar localmente, **sempre faça um `git pull` antes**, para garantir que está com a versão mais recente.

## 🚀 Passo a Passo

### 1. Clonar repositório existente do GitHub
Eu quero criar uma pasta para cada projeto que usarei para estudos no repositório `testes-front-end-cypress`.
Como o repositório já existe e já possui um histórico próprio, é necessário trabalhar a partir dele para evitar conflitos de histórico mais adiante.

O código a seguir clona o repositório `testes-front-end-cypress` para a máquina.
```
git clone https://github.com/deboralili/testes-front-end-cypress.git
```
O  comando `cd` entra na pasta indicada para que os próximos passos sejam realizados dentro dela.
```
cd testes-front-end-cypress
```
📌 Observação:
Não é necessário rodar `git init` neste caso, pois como o repositório já existia no GitHub, ele já está inicializado com histórico e remoto configurado.

### 2. (Opcional) Instalação do Yarn
Primeiro, verifique se o Node.js e o npm estão instalados, o Yarn depende do **Node.js** e do **npm** para funcionar.

Utilize o seguinte código para verificar se o Node.js está instalado e a mesma coisa para o npm.
```
node -v
```
```
npm -v
```
Se aparecer a versão de cada um, o Node.js e o npm já está instalado. 
Se ocorrer um erro, será necessário instalar através do site oficial.

Recomenda-se a versão LTS (Long Term Support) para maior estabilidade.

Agora é só seguir para a instalação do Yarn.

O projeto Cypress Real World App usa Yarn como gerenciador de pacotes para instalar dependências. 
É necessária uma única instalação, depois é possível usar em todos os projetos.

Por isso, primeiro verifique se a sua máquina já possui o Yarn instalado com o seguinte comando:
```
yarn -v
```
Se aparecer a versão, o Yarn já está instalado. Porém, se ocorrer um erro, é necessária a instalação.

Com o comando a seguir, a versão mais recente do Yarn será instalada globalmente.
```
npm install yarn@latest -g
```
### 3. Criação da estrutura de pastas para o projeto
O comando `mkdir`cria a pasta onde todo o projeto (código + documentos) ficará armazenado.
```
mkdir real-world-app-estudos
```
Entra na pasta indicada para o próximo passo.
```
cd real-world-app-estudos
```
Criação da pasta `documentos` destinada a guardar arquivos como planos de teste, casos de teste etc.
```
mkdir documentos
```
O comando `touch` criará o arquivo `primeiros-passos-rwa.md`.
```
touch primeiros-passos-rwa.md
```
Volta para a raiz das pastas `testes-front-end-cypress`.
```
cd ..
```
### 4. Clonar o projeto Real World App na pasta `projeto`
Este código clona o repositório oficial do projeto RWA dentro da subpasta `projeto`. Assim, o código fica separado dos arquivos de documentação.
```
git clone https://github.com/cypress-io/cypress-realworld-app real-world-app-estudos/projeto
```
### 5. Remover o `.git` do projeto clonado
O projeto clonado já vem com seu próprio repositório Git.
Como eu quero versionar tudo junto no repositório principal, eu preciso remover esse `.git` interno para evitar conflitos.
```
rm -rf real-world-app-estudos/projeto/.git
```
### 6. Instalar as dependências com Yarn
Entra na pasta projeto.
```
cd real-world-app-estudos/projeto
```
Instala todas as dependências listadas no `package.json.`
```
yarn
```
Volta para a raiz do repositório.
```
cd ../..
```
### 7. Adicionar tudo ao repositório
Adiciona todas as novas pastas e arquivos ao Git.
```
git add .
```
Registra as mudanças com uma mensagem explicativa.
```
git commit -m "Adiciona estrutura de pastas + projeto real-world-app "
```
### 8. Enviar para o GitHub
Envia as mudanças para o repositório remoto no GitHub.
```
git push origin main
```
