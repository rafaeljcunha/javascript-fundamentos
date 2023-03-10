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
  - `querySelector` - É utilizado para buscar apenas uma referência, seja por class ou id.
  - `querySelector` - É utilizado para buscar várias referências, seja por class ou id.
  - `getElementById` - É utilizado para buscar apenas uma referência por id.
  - `getElementsByClassName` - É utilizado para buscar apenas uma referência por class.
  - `getElementsByName` - É utilizado para buscar apenas uma referência por name, geralmente utilizado para inputs que possuem a propriedade name.
  - `getElementsByTagName` - É utilizado para buscar apenas uma referência pela tag HTML em si.
    <br /><br /> [Exemplo seletores](./selectors.js)

#### Manipulação de elementos

Agora que já conhecemos sobre seletores, podemos manipular elementos CSS, textos e etc; utilizando os seletores para isso, basta pegarmos a referencia do elemento através do seletor e acessar a propriedade que desejar do elemento e modificar.
<br /><br /> [Exemplo manipulação de elementos](./manipulacao-elementos.js)

#### Eventos

Eventos nos permitem interagir com o usuário e com a página web em si. Os eventos são importantes para capturar um click, uma alteração, a posição do ponteiro do mouse e etc; e isso torna mais divertido interagir com o DOM.

Podemos utilizar os eventos apenas acessando seu atributo no DOM e atribuindo uma função ao atributo:
<br />
elemento.onfocus = executarAoFocar

Ou podemos usar um método que ficará escutando os eventos em um elemento:
<br />
elemento.addEventListener("focus", executarAoFocar)

- Principais eventos:
  - `onclick ou click` - Este evento é disparado quando o usuário clica sobre um elemento HTML, como o botão, por exemplo.
  - `onkeyup ou keyup` - Este evento é disparado quando um tecla é deixa de ser pressionada.
  - `onchange ou change` - Este evento é disparado para cada alteração que ocorrer em um elemento
  - `onfocus ou focus` - Este evento é disparado quando um elemento é focado.
