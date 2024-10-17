/* seecione paragráfo e o botão usando o getElementById */

const meuParagrafo = document.getElementById('texto'); /// no documento html, pegue o elemento que tem o id "textp"

constMeuBotao = document.getElementById('meuBotao'); /// no documentp html pegue o elemento que tem o id meuBotao

///defina a função que alterna o contéudo do paragráfo
function alternarTexto(){
    /// text content altera o conteudo e texto de algum elemento html
    meuParagrafo.textContent = 'o texto foi alternado!';

}

// adicione um event listener ao botao para o escutar clique
meuBotao.addEventListener('dblclick', alternarTexto)

const meuBotao = document.getElementById('meuBotao'); // no documento html, pegue o elemento que tem o ID 'Meubotao'

const Botao = document.getElementById('Botao'); 

const Botao2 = document.getElementById('Botao2'); 

// Defina a função que alterna o conterna o contéudo do parágrafo
function alterarTexto(){

    //textoContent altera o conteudo de texto de algum elemento html
    meuParagrafo.textContent = 'o texto foi alterado!';


function magao(){
    
    meuParagrafo.style.color = 'red' ;
}


function maguinho(){
    
    Botao2.style.backgroundColor = 'red' ;
}



meuBotao.addEventListener('click',alterarTexto);
Botao.addEventListener('click',magao);
Botao2.addEventListener('click',maguinho);

 }