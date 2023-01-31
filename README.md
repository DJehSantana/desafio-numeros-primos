# Desafio dos números primos em PI

**DESAFIO**: Encontrar ao menos um número de 5, 10 e 21 dígitos sequenciais entre as casas decimais de PI.

**ALGORITMO**
- PASSO 1 - pegar a parte decimal do número PI e atribuir a uma constante como String.
- PASSO 2 - transformar a String em um array de vários números com a quantidade de dígitos especificada.
- PASSO 3 - verificar a primalidade dos números do array utilizando uma lib como a big-integer.    
- PASSO 4 - adicionar os números cujo resultado for true a uma nova lista de numeros primos.

**Como fazer para verificar a primalidade?**
1. Importa a biblioteca e atribui a uma constante (`bigInt`)
     
1. isPrime() - Método para verificar a primalidade - Retorna true se o número for primo, false caso contrário.        
      
_Exemplo:_ <br>
<code>bigInt(5).isPrime() //output:true
 bigInt(6).isPrime() //output:false
</code>

**Para ver a resolução do desafio:**  
1. Realize um clone do repositório.
1. Instale as dependências através do `npm`.
1. Rode o comando `npm start`.
1. Veja o resultado no terminal.
