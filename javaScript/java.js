// undefined - Variável que nunca teve um valor atribuido (padrão)
// null - 
// nós podemos declarar variáveis como: let x = undefined ou let x = null

// o método nada mais é do que uma função com um parâmetro escondido contendo a instância que o invocou.

// evento load != DOMContentLoaded
// O evento load só retorna true quando, não só o conteúdo interno da DOm, mas também os links e dependências externa já estiverem carregados.
// O DomContentLoad Só retorna true quando os documentos da página interna forem carregados

// console.log(`agora ${a} consigo contatenar ${b}`);

// o map/dictionay no js é o Object

let carro = {
    modelo: "",
    ano: 1230,
    "motor-hp": "", 
};

console.log(carro.ano);
console.log(carro["motor-hp"]);

/*
Objetos na árvore DOM

node: parentNode, nextSibling, childNodes

Element: nextElementSibling, children, getElementById, querySelector e etc...

HTMLInputElement: value, 

*/

// Função declarada de forma anônima - preferir esta forma
document.addEventListener('load', () => {

});