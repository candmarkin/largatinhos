# Largatinhos 🐾

Acesse em: [https://largatinhos.vercel.app](https://largatinhos.vercel.app)

Este projeto é uma plataforma para adoção de gatos resgatados, desenvolvida com Next.js, NeonDB e Google Cloud Storage.

## Funcionalidades

- Listagem de gatos disponíveis para adoção
- Página individual para cada gato, com fotos e informações detalhadas
- API RESTful para consulta dos gatos (`/api/gatos`)
- Integração com banco de dados NeonDB
- Armazenamento e exibição de fotos via Google Cloud Storage

## Tecnologias Utilizadas

- [Next.js (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NeonDB](https://neon.tech/)
- [Google Cloud Storage](https://cloud.google.com/storage)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Como rodar localmente

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/largatinhos.git
   cd largatinhos
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env.local` na raiz do projeto com:
   ```
   DATABASE_URL=postgres://usuario:senha@host:porta/database
   GOOGLE_APPLICATION_CREDENTIALS=./path/para/credenciais.json
   ```

4. **Rode o projeto**
   ```sh
   npm run dev
   ```

5. **Acesse**
   ```
   http://localhost:3000
   ```

## Estrutura de Pastas

```
app/
  api/
    gatos/
      route.ts         # API para listar gatos
      gato/
        route.ts       # API para fotos de um gato específico
  gatos/
    [id]/
      page.tsx         # Página de detalhes do gato
    page.tsx           # Listagem de gatos
  components/
    divGato.tsx        # Componente de card do gato
    SwiperModel.tsx    # Componente de carrossel de fotos
```

## Observações

- O banco NeonDB deve conter a tabela `gatos` com a coluna `id`.
- As credenciais do Google Cloud devem permitir acesso ao bucket de imagens.
- O endpoint `/api/gatos` retorna um array de objetos `{ id: string }`.

## Licença

MIT

---
Feito com ❤️ para os largatinhos!
