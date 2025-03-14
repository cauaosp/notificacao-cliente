# notificacao-cliente
Instruções de Entrega do Projeto

O projeto será disponibilizado em um repositório no GitHub, contendo um README detalhado com as seguintes informações:

1. Concepção e Implementação

O sistema de notificação foi desenvolvido para informar os usuários sobre mudanças na política de privacidade. A implementação inclui um modal de notificação para os clientes, um mecanismo de verificação de aceite e um painel administrativo para monitoramento.

2. Instalação e Configuração

Para instalar e rodar o projeto localmente, siga os passos:

Clone o repositório:

git clone https://github.com/seu-repositorio.git

Acesse o diretório do projeto:

cd nome-do-projeto

Instale as dependências:

npm install

Configure as variáveis de ambiente no arquivo .env.local conforme o modelo .env.example.

Inicie o projeto:

npm run dev

3. Testes e Validação

Foram implementados testes para verificar o correto funcionamento da funcionalidade de aceite dos termos. Para rodar os testes:

npm run test

Exemplo de teste:

Verificação do armazenamento do aceite dos termos no localStorage.

Teste de exibição do modal apenas para usuários que ainda não aceitaram os termos.

4. Estrutura e Arquitetura

O projeto segue uma estrutura modular, utilizando:

Next.js 15 para renderização e navegação.

React Hooks para gerenciamento de estado.

ShadCN e Tailwind CSS para estilização.

LocalStorage para persistência do aceite dos termos.

API Routes para armazenamento de aceitações no backend.
