# notificacao-cliente
Instruções de Entrega do Projeto

**OBS: Para entrar como administrador você deve colocar usuário: admin e senha qwe123**

1. Concepção e Implementação

O sistema deve permitir que o cliente aceite o termo de notificação e o administrador veja o usuário que aceitou o termo

# Instalação e Configuração

Para instalar e rodar o projeto localmente, siga os passos:

Clone o repositório:

git clone https://github.com/seu-repositorio.git

- Acesse o diretório do projeto: cd nome-do-projeto
- Instale as dependências: npm install
- Configure as variáveis de ambiente no arquivo .env.local conforme o modelo .env.example.
- Inicie o projeto: npm run dev

# Estrutura e Arquitetura

O projeto segue uma estrutura modular, utilizando:

- Next.js 15 para renderização e navegação.
- React Hooks para gerenciamento de estado.
- ShadCN e Tailwind CSS para estilização.
- LocalStorage para persistência do aceite dos termos.
- API Routes para armazenamento de aceitações no backend.
