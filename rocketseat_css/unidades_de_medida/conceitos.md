# Tipos numéricos
- integer é um número inteiro como -10 ou 223 <br>
- number é um número decimal como -2.4, 64 ou 0.234<br>
- dimension é um number com uma unidade junto: 90deg, 2s, 8px <br>
- percentage é uma representa uma fração de outro número: 50%

# Unidades comuns
- length é um dos mais usados no CSS e representa um valor de distância: px, em, vw <br>
- angle representa um ângulo: deg, rad, turn <br>
- time representa um tempo: s, ms <br>
- resolution representa resoluções para dispositivos: dpi

# Distâncias absolutas <length>
São fixas e não alteram seu valor. <br>
- cm - Centímetros <br>
- in - Inches (polegadas) <br>
- px - Pixels


*o mais comum e mais utilizado é o px <br>
*não é recomendado usar cm

# Distâncias relativas
São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

- Benefício: Maior adaptação aos diferentes tipos de tela.

- em - tamanho da fonte do pai <br>
- rem - tamanho da fonte do elemento raiz (root/html) <br>
- vw - 1% da viewport width <br>
- vh - 1% da viewport height <br>

Normalmente o tamanho da font padrão do navegador é de 16px e para mudar esse valor temos que fazer a alteração no root ou no elemento html. <br>

O viewport é a parte da tela que está sendo exibida. No caso dos navegadores web, é o que é exibido na janela/tela do documento. Conteúdos que estão fora do viewport só serão exibidos quando feito um scroll da área de visualização.

# Porcentagens
- As porcentagens são valores bem flexíveis
- Em muitos casos é tratado da mesma maneira que as distâncias - length
- Sempre será relativo a algum valor

# Positions

- Representa um conjunto de coordenadas 2D: top, right, bottom, left e center
- Usado para alguns tipos de propriedades como o background-position
- Não confundir com a propriedade position

# Funções
Em programação, funções são reconhecidas por causar um reaproveitamento de código.<br>
Exemplos de funções do CSS:

- rgb()
- hsl()
- url()
- calc()

Dentro dos parêntesis são passados argumentos<br>

Link da documentação do MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions

# Strings: texto envolto em aspas

.box::after {
	content: "Isso é uma string"
}
<br>

Identificadores: podemos ter nomes de cores como red, black, gold