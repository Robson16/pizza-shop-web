# 🍕 Pizza Shop Web

Dashboard de gerenciamento para pizzarias, desenvolvido com React e tecnologias modernas.

## 📋 Descrição

Uma aplicação web completa para gerenciar pedidos e entregas de uma pizzaria. Este projeto foi desenvolvido para praticar conceitos avançados de React, integração com APIs, e boas práticas de desenvolvimento frontend.

## 🎯 Objetivo

Criar um dashboard de administrador que permita:

- Gerenciar pedidos e entregas
- Acompanhar o status dos pedidos
- Autenticação segura de usuários
- Comunicação eficiente com APIs via requisições HTTP
- Interface responsiva e intuitiva

## 🛠️ Tecnologias

- **[Vite](https://vitejs.dev/)** - Build tool rápido e moderno
- **[React 19](https://react.dev/)** - Library para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[React Router DOM](https://reactrouter.com/)** - Roteamento de páginas
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes acessíveis e reutilizáveis
- **[ESLint](https://eslint.org/)** - Linter para manter qualidade de código
- **[Prettier](https://prettier.io/)** - Formatador de código

## 🚀 Como Começar

### Pré-requisitos

- Node.js >= 22.0.0
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Robson16/pizza-shop-web.git

# Entre no diretório
cd pizza-shop-web

# Instale as dependências
npm install
```

### Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Constrói a aplicação para produção
npm run build

# Visualiza a versão de produção
npm run preview

# Executa o linter
npm run lint

# Corrige problemas de linting automaticamente
npm run lint:fix

# Formata o código
npm run format

# Verifica se o código está formatado corretamente
npm run format:check
```

## 📁 Estrutura do Projeto

```
src/
├── App.tsx            # Componente raiz
├── global.css         # Estilos globais
├── main.tsx           # Ponto de entrada
├── routes.tsx         # Definição de rotas
├── assets/            # Recursos estáticos
├── components/        # Componentes reutilizáveis
│   ├── theme/         # Gerenciamento de tema
│   └── ui/            # Componentes de UI
├── lib/               # Funções utilitárias
├── pages/             # Páginas da aplicação
│   ├── _layouts/      # Layouts principais
│   ├── app/           # Páginas autenticadas
│   │   ├── dashboard/ # Módulo de dashboard
│   │   └── orders/    # Módulo de pedidos
│   └── auth/          # Páginas de autenticação
```

## 🔐 Autenticação

O projeto implementa um sistema de autenticação com layouts separados:

- **AuthLayout** - Para páginas de login
- **AppLayout** - Para páginas do dashboard (autenticadas)

## 🖥️ Backend

O backend da aplicação está disponível em um repositório separado, desenvolvido com Bun, Elysia, Drizzle ORM, TypeScript e outras tecnologias modernas. Ele oferece autenticação, gerenciamento de pedidos, clientes e integração com banco de dados PostgreSQL.

- Repositório: [rocketseat-education/pizzashop-api](https://github.com/rocketseat-education/pizzashop-api)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

<p align="center">
  Feito com 💜 por <a href="https://github.com/Robson16/">Robson H. Rodrigues</a>
</p>