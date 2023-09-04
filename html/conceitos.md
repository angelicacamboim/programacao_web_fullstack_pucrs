# Semântica HTML
A semântica HTML refere-se à prática de utilizar elementos HTML de forma significativa e estruturada para transmitir o significado e a estrutura do conteúdo de uma página da web.

	1. Cabeçalhos: Use os elementos <h1> a <h6> para indicar a hierarquia de títulos na página. O <h1> representa o título principal, enquanto os níveis subsequentes indicam subseções.
	2. Parágrafos: Use <p> para envolver parágrafos de texto. Isso ajuda a separar e estruturar o conteúdo textual.
	3. Listas Ordenadas e Não Ordenadas: Use <ul> para listas não ordenadas (bulleted lists) e <ol> para listas ordenadas (numbered lists). Cada item da lista é marcado com <li>.
	4. Links e Âncoras: Use <a> para criar links e âncoras para outras páginas ou recursos.
	5. Seções de Conteúdo: Use <section> para definir seções de conteúdo distintas na página. Isso ajuda a organizar o conteúdo e a criar uma estrutura clara.
	6. Artigos: Use <article> para delimitar um conteúdo independente e autocontido, como uma postagem de blog ou um artigo de notícias.
	7. Navegação: Use <nav> para agrupar links de navegação, como menus ou links para outras páginas do site.
	8. Cabeçalho e Rodapé: Use <header> para o cabeçalho da página e <footer> para o rodapé. Esses elementos podem conter informações relevantes, como logotipos, informações de contato e links úteis.
	9. Citações: Use <blockquote> para citações longas e <q> para citações curtas. Você também pode usar <cite> para indicar a fonte da citação.
	10. Destaque e Ênfase: Use <em> para enfatizar o texto e <strong> para indicar forte ênfase.
	11. Imagens e Multimídia: Use <img> para imagens e elementos como <audio> e <video> para incorporar conteúdo de mídia.
	12. Tabelas: Use <table> para criar tabelas de dados. Use <thead>, <tbody> e <tfoot> para estruturar o cabeçalho, corpo e rodapé da tabela, respectivamente.

# Favicon 
```
   <link rel="icon" href="favicon.ico" type="image/png">
```
# Metas
```
Meta SEO
<!--Meta SEO-->
    <meta name="author" content="Angelica">
    <meta name="description" content="Um website para iniciantes em programação">
    <meta name="robots" content="index, follow">
    <title>Images</title>
```
Essas meta tags são inseridas no cabeçalho de uma página da web para fornecer informações adicionais aos mecanismos de busca sobre o conteúdo da página. O objetivo dessas meta tags é melhorar a visibilidade da página nos resultados de pesquisa e aumentar sua relevância para os mecanismos de busca.

Aqui estão algumas das principais meta tags relacionadas ao SEO:

	1. <title>: Define o título da página, que é exibido nos resultados de pesquisa como um link clicável.
	2. <meta name="description">: Fornece uma breve descrição do conteúdo da página, também exibida nos resultados de pesquisa.
	3. <meta name="keywords">: Embora não seja mais tão relevante para os mecanismos de busca modernos, essa tag costumava ser usada para listar palavras-chave relacionadas à página.
	4. <meta name="robots">: Controla como os mecanismos de busca rastreiam e indexam a página. Por exemplo, você pode indicar se deseja que a página seja indexada ou não.
	5. <link rel="canonical">: Usado para especificar a URL canônica (original) de uma página, prevenindo problemas de conteúdo duplicado.
	6. Meta tags Open Graph e Twitter Cards: Embora sejam mais voltadas para compartilhamento em redes sociais, também podem afetar a visibilidade nos resultados de pesquisa.
```
Meta social
  <!--Meta social-->
    <!-- Open Graph: facebook -->
    <meta property="og:image" content="https://cdn-images-1.medium.com/max/92/1*TkXVfLTwsHdwpUEjGzdi9w@2x.jpeg">
    <meta property="og:description" content="Aqui vem um texto para ser mostrado ao compartilhar no facebook">
    <meta property="og:title" content="Um site da Rocketseat">
    <!-- twitter -->
    <meta name="twitter:title" content="Rocketseat">
```
# Open graph
O Open Graph é um conjunto de metadados (tags HTML) que permite que os criadores de conteúdo controlem como os links compartilhados em redes sociais, como o Facebook, são exibidos. Ele foi introduzido pelo Facebook para permitir que os sites forneçam informações detalhadas sobre o conteúdo que está sendo compartilhado, como páginas da web, artigos, imagens, vídeos e outros tipos de mídia.

O Open Graph funciona através da adição de meta tags especiais ao cabeçalho (seção `<head>`) das páginas da web. Essas tags fornecem informações como título, descrição, imagem em destaque e outros detalhes relacionados ao conteúdo, permitindo que as redes sociais compreendam e exibam adequadamente o conteúdo compartilhado.

As meta tags Open Graph mais comuns incluem:

- `og:title`: O título do conteúdo.
- `og:description`: Uma breve descrição do conteúdo.
- `og:image`: Uma imagem representativa do conteúdo.
- `og:url`: A URL da página.
- `og:type`: O tipo de conteúdo, como "website", "article", "video", etc.
- `og:site_name`: O nome do site.

Ao adicionar essas meta tags Open Graph ao seu site, você tem mais controle sobre como as informações do seu conteúdo são exibidas quando alguém compartilha seu link em plataformas como o Facebook. Isso melhora a aparência e a usabilidade das postagens compartilhadas e ajuda a direcionar o engajamento.

Outras plataformas de redes sociais, como o Twitter, também têm suas próprias metatags semelhantes ao Open Graph, mas o Open Graph é especialmente popular e amplamente utilizado devido à sua associação com o Facebook e a capacidade de personalização do compartilhamento.

# Estruturas HTML

Cabeçalho <header> :

O cabeçalho do nosso site, o local onde geralmente fica a logo e o menu.
O header também vai ocupar toda a linha na qual for aplicado
---

Navegação <nav> :

A navegação do site vai oferecer links para seções do site, o nosso menu. costuma ficar dentro da header, porém pode ficar em outros lugares, como em uma parte lateral, ou na parte de baixo.
---

Conteúdo principal <main> :

A parte do site aonde vai o conteúdo principal, no caso de um blog, teremos vários artigos, vários posts.

A tag main é para um conteúdo único da sua página, portanto, você vai utilizá-la apenas uma vez por página, e vai ser colocada direto do body, e não é legal deixar em qualquer outro lugar além de logo depois do body, entendemos a tag main como o foco central da página, o conteúdo principal da aplicação, então geralmente dentro dessa tag, não vamos deixar o nosso menu.
---

Conteúdo relacionado <aside>:

O conteúdo relacionado é algo que seja relacionado levemente ao nosso conteúdo principal, porém não tanto para ficar lá.

A tag aside é para conteúdos levemente relacionados ao conteúdo principal, como explicações do conteúdo, glossários, links extras, biografia do autor, informações de perfil e etc.

É uma tag fácil de se entender, porém fácil de se confundir, então evite atribuir a tag aside ao lado da página conforme você for aprendendo mais sobre HTML, CSS.

---

Section

A tag section serve para colocarmos seções na nossa página HTML, e uma dica de ouro: Geralmente se coloca um título e conteúdo na tag section. Antigamente usava-se uma div para fazer essas divisões e seções de conteúdos, mas semanticamente é mais apropriado usar uma tag section
---

Rodapé <footer>

Onde ficam as informações da parte de baixo da página.
---

# Genéricos

Em ambas as situações nós usaremos atributos globais como id e class para entregar um maior significado.

O span é usado quando não se acha um elemento de texto semântico, já o div, quando não se acha um elemento de bloco semântico.

Um exemplo de uso do span é caso queira dar um destaque no texto, mas não queira usar a tag strong, algo parecido com:

```
<h1>Título <span class="destaque">destacado</span></h1>
```

---
Um exemplo do uso de div semântico:

```
<div class="cart">


    <h2>Carrinho de compras</h2>


</div>
```