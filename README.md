# Desafio Porto Seguro

Este projeto é um desafio front-end proposto a partir de um layout pronto com o objetivo de validar meu conhecimento em HTML/CSS/JS e React.

O desafio é criar a landing page da Porto Seguro Saúde utilizando as seguintes seções:

1. Menu de navegação
2. Header (Banner)
3. Card de CTA (Call to action)
4. Hospitais em destaque
5. Benefícios do plano
6. Outros serviços especiais
7. Quer saber mais?
8. Footer

O layout e recursos da página se encontram no Adobe XD na versão [Mobile](https://xd.adobe.com/view/8689962a-4147-4b41-a1c4-9034efe38733-d3da/specs/) e [Desktop](https://xd.adobe.com/view/7f2f54c9-182a-4144-8da1-8d4d92d65596-2a7c/specs/)


## Principais Tecnologias

- React com NextJs
- Typescript
- Styled Components
- Framer motion

## Estrutura

Pensando em padronizar os componentes de UI e buscando aplicar conceitos de Design Atômico, decidi estruturar o projeto da seguinte maneira:

- Átomos (Tema)

Elementos indivisíveis como cores foram reunidos e compartilhados para toda a aplicação. Desta forma a manipulação de cores se torna mais flexível.
- Componentes

Conjuntos de formas, cores e tipografia mais simples que foram utilizados em toda a aplicação, sendo estes Botões, Inputs, Títulos e Modal.
- Templates

Essas são as seções da página principal, listadas acima.
- Config

Nas configurações encontram-se informações base para a lógica do restante da aplicação como contextos, métodos de viewport e estilos globais.

## Responsividade

O projeto está cobrindo dispositivos com largura de tela de 375px até 2520px.

Os componentes se adaptam ao formato da tela utilizando CSS Media Queries e o estado `device` que observa a largura do viewport e compartilha seu valor globalmente.

## Build

- A minificação dos arquivos é feita através do NextJs
- O consumo da API é feito em tempo de build pela função `getStaticProps`. Esse método fornece ao cliente o código fonte HTML já com as informações da API e ajuda no SEO.
- O Deploy do projeto foi feito pela Vercel e é possível conferir através do link https://desafio-porto-seguro.vercel.app

## Setup

Execute `yarn` baixar as dependências do projeto e `yarn dev` para subir o servidor em ambiente de desenvolvimento

## Melhorias

- O método que manipula o estado `device` só é possível ser executado após a renderização do DOM. Isso gera um reload dos componentes que utilizam esse estado podendo gerar uma perda de performance.

- O Next possui um delay no carregamento dos estilos utilizando styled components. Minha solução foi colocar uma tela de loading no primeiro carregamento com o tempo necessário para carregar os estilos.