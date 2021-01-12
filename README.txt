Criando um site para encontrar restaurantes usando Google Maps que consulta API do Google


Sistema Web bem parecido com o Google Place onde buscamos restaurantes na web do proprio google
vamos utilizar a API deles para construir algo bem parecido, acharemos restaurantes baseado na localização do usuario (via brownser) 

1: Configurações do ambiente:
 - instalação das nossa primeira dependencia (Styled-Components).

 - criação de um arquivo chamado theme.js ( Esse arquivo é uma ferramenta do styled components, [Theme Provider] 
 onde passamos os objetos dentro desse arquivo theme e na raiz aplicação o theme provider emcapsula todo nosso app de forma global 
 e todo mundo que tiver embaixo desse theme provider pode consumir as variaveis como fontes, cores e centralização...)

 - criação da nossa página Home e exportação.

 - retornando nossa pagina Home em App.js.

 - criação do arquivo styles.js na pasta home.

- com a utilização de styled components vamos usar o styled-reset, pacote npm, basicamente ele reseta todas as configurações padrão dos navegadores, zeramos tudo e aplicamos de acordo com nosso estilo.

2: Desenvolvimento do conteudo lateral:
- Criamos dentro do styles.js o container styled.aside com as propriedades da barra lateral esquerda da nossa aplicação e tambem as propriedades de estilização do Search.

- Criação do buscador utilizando um componente de input de texto para buscas, yarn add @material/react-text-field
- setando a versão outlined no nosso imput como propriedade dentro do container

- usamos o comando yarn add @material/react-material-icon para instalar as dependencias do icone do nosso search e importamos o css dele.
 - Instalação de fonte Roboto Google Fonts por Link.

3: Desenvolvimento do Carousel:

- instalação da biblioteca/dependencias react slick ' yarn add react-slick ' e do slick carousel ' yarn add slick-carousel '
- importação do css da biblioteca do react-slick
- estilizando e finalizando o carousel

4: Desenvolvimento de componentes:

- criação do restaurant card e seu styles e propriedades
- criação do RestaurantInfo style.div 
- criação do Adreess styled.span e do Title styled.span

- instalação da biblioteca react-rating-stars-component com yarn

- criação da pasta modal > portal > arquivo index.jsx
- implementando a modal na Home

5: Criação do projeto no google e overview da API
REACT_APP_GOOGLE_API_KEY=AIzaSyA3-VEy0VnrVAXjlChxfqaZ89jCbeyMgts (tirar isso dps)

6: Inicio da implementação do mapa:
- implementndo busca de restaurantes proximos
- concluindo a busca de restaurantes e introduzindo Redux

7: implementação do marker dos restaurantes no mapa: 










2: Desenvolvimento dos componentes:

3: Integração da API do Google:

4: Deploy gratuito na nuvem do nosso serviço


 Requisitos Básicos para construção da aplicação:

- Conhecimentos em HTML, CSS, JavaScript

- Conhecimentos intermediário em React.Js

- Node.js (npm ou yarn) - NVM

- Git, Github

- Styled Components -
[ Styled-components é uma biblioteca para React e React Native que permite que você utilize estilos
ao nivel de componente na sua aplicação. Eles são escritos em uma mistura de JavaScript com CSS. ] 


Professor:
Patrick Narciso
Linkedin: 
https://www.linkedin.com/in/patricknarciso/
Github:
https://www.github.com/patrick-narciso