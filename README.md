# 🚑 Plantão Fácil

O Plantão Fácil é uma aplicação web desenvolvida para facilitar a consulta e o gerenciamento de plantões de farmácias, drogarias e outros estabelecimentos de saúde.

Com uma interface simples e intuitiva, os usuários podem visualizar rapidamente quais estabelecimentos estão de plantão, consultar contatos e endereços, além de facilitar o acesso à informação para a população.

## ✨ Funcionalidades

- 📅 Visualização dos plantões organizados por data
- 🔍 Busca rápida por estabelecimento
- 📍 Consulta de endereço e telefone
- 📱 Layout responsivo para dispositivos móveis
- ⚡ Atualização dinâmica dos dados
- 🎨 Interface moderna e fácil de usar

## 📸 Preview

Adicione aqui screenshots do sistema.

```bash
/public/images/preview-home.png
```

---

## 🚀 Tecnologias Utilizadas

### Frontend

- React
- TypeScript
- SCSS
- Vite

### Integrações

- Google Sheets como fonte de dados
- API Google Visualization (GViz)

---

## 📂 Estrutura do Projeto

```bash
src/
├── components/
├── pages/
├── services/
├── hooks/
├── styles/
├── assets/
└── utils/
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/LeoGonzaga/plantao-facil.git
```

Acesse a pasta:

```bash
cd plantao-facil
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:5173
```

---

## 🔗 Fonte dos Dados

Os dados dos plantões são consumidos diretamente de uma planilha do Google Sheets.

Exemplo:

```ts
https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:json
```

Essa abordagem permite atualizar os plantões sem necessidade de publicar uma nova versão da aplicação.

---

## 🎯 Objetivo

O objetivo do Plantão Fácil é oferecer uma solução simples para que moradores encontrem rapidamente estabelecimentos de plantão em sua cidade, reduzindo o tempo gasto procurando informações em grupos de WhatsApp, redes sociais ou sites desatualizados.

---

## 🛠️ Melhorias Futuras

- [ ] Busca por bairro
- [ ] Filtro por categoria (farmácia, veterinária, hospital)
- [ ] Modo escuro
- [ ] Notificações de mudança de plantão
- [ ] PWA para instalação no celular
- [ ] Integração com Google Maps

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature

```bash
git checkout -b feature/minha-feature
```

3. Faça commit das alterações

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

4. Envie para o GitHub

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por **Leonardo Gonzaga**.

GitHub: :contentReference[oaicite:0]{index=0}
