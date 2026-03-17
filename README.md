💸 Sistema de Reembolso 2.0


Aplicação web desenvolvida para gerenciamento de solicitações de reembolso, permitindo que usuários façam pedidos e administradores acompanhem e gerenciem essas solicitações.

O projeto foi criado como projeto de formação Fullstack, com foco em boas práticas de desenvolvimento com React, organização de rotas e construção de interfaces modernas utilizando TailwindCSS.

📸 Preview do Projeto

Interface moderna com tema escuro, painel de solicitações e separação entre área do cliente e área administrativa.

🚀 Funcionalidades

✔ Sistema de login de usuário
✔ Área exclusiva para clientes
✔ Painel administrativo (ADM)
✔ Listagem de solicitações de reembolso
✔ Navegação entre páginas utilizando React Router
✔ Interface moderna com TailwindCSS
✔ Layout responsivo

🧭 Estrutura de Rotas

O projeto possui 3 rotas principais:

Rota	Descrição
/login	Tela de autenticação
/cliente	Área do cliente para visualizar ou solicitar reembolso
/adm	Painel administrativo para gerenciamento das solicitações
🛠 Tecnologias Utilizadas

React.js

TailwindCSS

React Router DOM

JavaScript (ES6+)

Vite (ambiente de desenvolvimento)

📂 Estrutura do Projeto
src
 ├── components
 │   ├── Header
 │   ├── Sidebar
 │   └── CardRequest
 │
 ├── pages
 │   ├── Login
 │   ├── Cliente
 │   └── Admin
 │
 ├── routes
 │   └── Router.jsx
 │
 ├── styles
 │   └── global.css
 │
 ├── App.jsx
 └── main.jsx

Essa organização facilita:

manutenção do projeto

reutilização de componentes

escalabilidade da aplicação

▶️ Como Executar o Projeto
1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/sistema-reembolso.git
2️⃣ Entre na pasta do projeto
cd sistema-reembolso
3️⃣ Instale as dependências
npm install
4️⃣ Execute o projeto
npm run dev
5️⃣ Abra no navegador
http://localhost:5173
📚 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos importantes como:

Estruturação de aplicações com React

Criação de rotas com React Router

Construção de interfaces com TailwindCSS

Organização de componentes reutilizáveis

Separação de responsabilidades entre UI e lógica

Estruturação de layouts escaláveis

🚀 Melhorias Futuras

Implementar autenticação real com API

Integração com backend e banco de dados

Adicionar validação de formulários

Criar dashboard com estatísticas de reembolso

Implementar controle de permissões por usuário

Adicionar notificações e feedback visual
