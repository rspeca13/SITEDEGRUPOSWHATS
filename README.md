# SITEDEGRUPOSWHATS

Página de vendas responsiva para divulgar produtos e serviços em grupos de WhatsApp, com identidade visual verde, preta e branca.

## Estrutura

- `index.html` — conteúdo e seções da página.
- `assets/css/style.css` — estilos, cores e layout responsivo.
- `assets/js/script.js` — menu para celular e links de contratação com mensagem pré-preenchida.
- `assets/img/whatsapp.svg` — ícone vetorial local.

## Planos incluídos

| Período | Valor |
| --- | ---: |
| 1 dia | R$ 15,00 |
| 3 dias | R$ 20,00 |
| 7 dias | R$ 35,00 |
| 15 dias | R$ 50,00 |
| 30 dias | R$ 100,00 |

## Configurar o WhatsApp

O número atual está definido em `assets/js/script.js` como `5519982497244` (formato internacional, sem espaços). Se precisar usar outro número, altere essa variável e o link inicial em `index.html`.

## Publicar com GitHub Pages

1. Abra **Settings** do repositório.
2. Entre em **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
5. Aguarde a publicação e abra o endereço exibido na tela Pages.

O site é estático e não processa pagamentos automaticamente; os botões encaminham o cliente para conversar pelo WhatsApp.
