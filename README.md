# Laav Clean

Site responsivo em português, com página inicial e galeria independente em `dist/galeria.html`.

## Visualizar localmente

Extraia todos os arquivos do ZIP e abra `dist/index.html` no navegador. Mantenha `styles.css`, os arquivos JavaScript e a pasta `assets` junto ao HTML. No ZIP de distribuição, `index.html` já está na pasta principal.

Os caminhos são relativos, por isso o site funciona ao abrir os arquivos diretamente, em uma subpasta ou por um servidor web. Os filtros e a ampliação das fotos também funcionam localmente. As fontes do Google precisam de internet; sem conexão, são usadas fontes do sistema.

Para usar uma prévia por HTTP, execute `node preview.mjs` nesta pasta e abra http://127.0.0.1:4173. Não é necessário instalar dependências ou compilar.

## Publicar na Vercel

Importe o repositório `matmkttech-maker/laavclean` e use a raiz do repositório como **Root Directory** (campo vazio). O arquivo `vercel.json` já configura:

- **Framework Preset:** Other.
- **Build Command:** vazio; não há etapa de compilação.
- **Install Command:** vazio; não há dependências.
- **Output Directory:** `dist`.
- A galeria pode ser acessada por `/galeria` ou pelo link `galeria.html`.

Se o projeto já existe, confira o Root Directory e faça um novo deploy da branch `main`. Não use `dist` simultaneamente como Root Directory e Output Directory, pois isso procuraria uma pasta `dist/dist`.

Para hospedar apenas o conteúdo do ZIP de distribuição, use a pasta que contém `index.html` como raiz e deixe Output Directory vazio. A configuração da raiz do repositório é destinada ao envio pelo GitHub.

Referência: https://vercel.com/docs/builds/configure-a-build

## Conteúdo

- Fotos e dados comerciais extraídos exclusivamente dos materiais fornecidos pelo cliente.
- WhatsApp: +55 71 99730-5863. As mensagens por serviço estão no início de `dist/app.js`.
- Nota 5,0 e 21 avaliações são um retrato do material fornecido, sem sincronização automática com o Google.
- A foto duplicada de cadeiras foi omitida. Há oito comparações únicas.
- A galeria mantém as imagens completas, inclusive suas marcas originais. Na página inicial, CSS enquadra trechos das mesmas imagens para apresentar os serviços.
- Sem formulário, rastreadores ou armazenamento de dados de visitantes. Links externos abrem Google Maps ou WhatsApp.
- Fontes do Google Fonts, com fontes locais de sistema como alternativa.

## Referências de estrutura

https://rchigienizacaodeestofados.com/home/
https://limpmaissc.com.br/#nossostrabalhos

A referência https://www.estoflabpro.com.br/ não respondeu à consulta automatizada. Textos, preços, garantias e serviços dos concorrentes não foram copiados.
