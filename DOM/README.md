#### DOM

- O que é o DOM?
  O DOM significa `Document Object Model` (Modelo de Objeto de Documento), que é um modelo do documento que retrata a interface na qual os navegadores utilizam para a representação das páginas web.
- Como funciona o DOM?
  O DOM oferece um modelo que nos permite interagir com o documento HTML, isso possibilita que através de uma linguagem de programação como Javascript, por exemplo, possamos interagir com elementos HTML na página web através do código.
  O DOM cria uma estrutura lógica dos documentos no formato de árvore que permite o navegador reconhecer a representação do elemento na página web e assim, permitir a interação com os elementos HTML.
  <br /><br /> [Imagem exemplo árvore DOM](../images/dom.jpeg)

#### Seletores

- O que é um seletor?
  Seletores são utilizados para informar ao DOM qual elemento querer encontrar dentro do documento, podemos informar um elemento HTML, uma class ou um id para os métodos que fazem essa busca.
- Principais métodos seletores
  - querySelector - É utilizado para buscar apenas uma referência, seja por class ou id.
  - querySelector - É utilizado para buscar várias referências, seja por class ou id.
  - getElementById - É utilizado para buscar apenas uma referência por id.
  - getElementsByClassName - É utilizado para buscar apenas uma referência por class.
  - getElementsByName - É utilizado para buscar apenas uma referência por name, geralmente utilizado para inputs que possuem a propriedade name.
  - getElementsByTagName - É utilizado para buscar apenas uma referência pela tag HTML em si.
    <br /><br /> [Exemplo seletores](./selectors.js)

#### Manipulação de elementos

Agora que já conhecemos sobre seletores, podemos manipular elementos CSS utilizando os selector, para isso, basta pegarmos a referencia do elemento através do selector e acessar a propriedade style do elemento e modificar o atributo que quisermos.
<br /><br /> [Exemplo manipulação de elementos](./manipulacao-elementos.js)

#### Eventos
