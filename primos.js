
/*DESAFIO: Encontre pelo menos um número de 5, 10 e 21 dígitos 
que seja primo dentro do número pi
*/

//Importando bibliotecas
const math = require('mathjs');
const biginteger = require('big-integer');

//Gerando pi com 50 casas decimais
const pi = math.pi.toFixed(49);


/** Percorre as casas decimais do PI, que está em formato de string,
 * formando numeros inteiros sequenciais 
 * de acordo a quantidade de digitos especificada.
 * O método slice() recebe o indice inicial mais a quantidade 
 * para formar a sequencia de numeros.
 */
function construirLista(lista, quantidade) {
    for (let i = 2; i < pi.length - quantidade; i++) {
        lista.push(pi.slice(i, i + quantidade));
    }
}

/**Percorre a listaOriginal e retorna uma lista com os numeros primos 
 * existentes na lista original
 */
function encontrarPrimos(listaOriginal, quantidade) {
    //método isPrime realiza a verificação se o numero é primo, caso seja retorna true
    //neste caso, quando o retorno é true o método filter adiciona o número ao novo array
    const listaPrimos = listaOriginal.filter(numero => biginteger(numero).isPrime());

    if (!listaPrimos.length) {
        console.log(`Não existem números primos de ${quantidade} digitos sequenciais nas primeiras 50 casas decimais de PI`);
    }
    console.log(listaPrimos);
}

const numeros5 = [];
const numeros10 = [];
const numeros21 = [];

//Construção das listas de numeros a partir das casas decimais de PI
construirLista(numeros5, 5);
construirLista(numeros10, 10);
construirLista(numeros21, 21);

console.log("***PRIMOS COM 5 DIGITOS NAS PRIMEIRAS 50 CASAS DECIMAIS DE PI***");
encontrarPrimos(numeros5, 5);

console.log("***PRIMOS COM 10 DIGITOS NAS PRIMEIRAS 50 CASAS DECIMAIS DE PI***");
encontrarPrimos(numeros10, 10);

console.log("***PRIMOS COM 21 DIGITOS NAS PRIMEIRAS 50 CASAS DECIMAIS DE PI***");
encontrarPrimos(numeros21, 21);


