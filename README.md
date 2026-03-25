# 🎬 Cine API

Aplicação web desenvolvida em React para consumo da API do The Movie Database (TMDb), com foco na listagem, filtragem e visualização de detalhes de filmes.

---

## 🔗 Acesse o Projeto

👉 [https://raffaew.github.io/api-filmes/](https://raffaew.github.io/api-flmes/)

---

## 🚀 Visão Geral

O projeto consiste em uma interface responsiva que permite ao usuário:

- visualizar filmes por categorias
- acessar detalhes individuais
- consultar avaliações e informações relevantes
- navegar entre diferentes listas (popular, top rated, etc.)

A aplicação consome dados em tempo real da API do TMDb, garantindo conteúdo dinâmico e atualizado.

---

## 🧱 Arquitetura

A aplicação segue uma estrutura baseada em componentes com separação de responsabilidades:

```
src/
  components/
  pages/
  hooks/
  services/
  context/
  types/
```

### Principais camadas:

- **services** → comunicação com API (axios/fetch)
- **hooks** → lógica reutilizável
- **context** → gerenciamento de estado global
- **components** → UI desacoplada
- **pages** → composição das views

---

## 🔌 Integração com API

A comunicação com a API do TMDb é feita via requisições HTTP.

### Exemplo de chamada:

```ts
export const getPopularMovies = async (category: string, page: number) => {
  const { data } = await api.get(category, {
    params: { page }
  });
  return data;
};
```

### Autenticação:

A API utiliza Bearer Token no header:

```ts
Authorization: Bearer <TOKEN>
```

---

## 📦 Gerenciamento de Estado

Foi utilizado **Context API** para controle global da categoria selecionada:

- evita prop drilling
- centraliza o estado da aplicação
- facilita escalabilidade

---

## 🎯 Funcionalidades

- Listagem de filmes por categoria:
  - Em cartaz
  - Populares
  - Mais bem avaliados
  - Próximas estreias
- Exibição de detalhes do filme
- Renderização de avaliações (vote average)
- Navegação entre páginas
- Interface responsiva (mobile-first)

---

## 🖼️ Manipulação de Imagens

A API retorna apenas o `poster_path`, sendo necessário montar a URL:

```ts
const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
```

---

## 🌐 Deploy

A aplicação foi publicada utilizando o GitHub Pages.

### Configuração relevante (Vite):

```ts
export default defineConfig({
  base: '/api-filmes/',
});
```

---

## ⚠️ Pontos de Atenção

- Necessidade de configurar corretamente o `base` para deploy
- Uso de `HashRouter` para evitar problemas de roteamento
- Controle de overflow no mobile para evitar scroll horizontal

---

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Sass (SCSS)
- Vite
- Context API
- Axios
- TMDb API

---

## 📈 Melhorias Futuras

- Implementação de paginação avançada
- Sistema de busca por título
- Favoritos com persistência (localStorage)
