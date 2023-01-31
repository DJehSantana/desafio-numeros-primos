//encontre um número de 5 dígitos que seja primo dentro do número pi
//encontre um número de 10 dígitos que seja primo dentro do número pi
//encontre um número de 21 dígitos que seja primo dentro do número pi

/** Encontrando um número primo de 5 digitos
 * PASSO 1 - pegar a parte decimal do número PI e atribuir a uma constante como String
 * PASSO 2 - transformar a String em um array de vários números de 5 dígitos
 * PASSO 3 - verificar a primalidade dos números utilizando uma lib como a bigInteger.js
 *      Como fazer para verificar a primalidade?
 *      Importa a biblioteca e atribui a constante bigInt
 *      
 *      isPrime(strict?) - Método para verificar a primalidade
        Retorna true se o número for primo, false caso contrário. 
        Defina o booleano "strict" como verdadeiro para forçar o limite inferior suportado pelo GRH de 2*log(N)^2. (???)
        Exemplo:
        bigInt(5).isPrime()=>true
        bigInt(6).isPrime()=>false

    PASSO 4 - Adicionar o primeiro número que der resultado true a um constante e imprimir a constante
 */

const math = require('mathjs');
const biginteger = require('big-integer');

//Gerando pi com 100 casas decimais
const pi = math.pi.toFixed(49);


/** Percorre as casas decimais do PI, que está em formato de string,
 * formando numeros inteiros sequenciais 
 * de acordo a quantidade de digitos especificada.
 * O método slice() recebe o indice inicial mais a quantidade 
 * para formar a sequencia de numeros.
 * */

function construirLista(lista, quantidade) {
    for (let i = 2; i < pi.length - quantidade; i++) {
        lista.push(pi.slice(i, i + quantidade));
    }
}

/**
 * Percorre a listaOriginal e retorna uma lista com os numeros primos 
 * existentes na lista original
 */
function encontrarPrimos(listaOriginal, quantidade) {
    //método isPrime realiza a verificação se o numero é primo, caso seja retorna true
    //neste caso, quando o retorno é true o método filter adiciona o número ao novo array
    const listaPrimos = listaOriginal.filter(numero => biginteger(numero).isPrime())

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


