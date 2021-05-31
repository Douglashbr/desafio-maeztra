
# Desafio Maeztra

Olá, abaixo eu cito passo a passo de cada questão resolvida, explicando a lógica que utilizei para criar as soluções.

***1 - Crie uma função que receba um valor INTEIRO positivo, e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE. Pode considerar dígitos iguais como sequenciais (Variação de um dígito para o outro deve ser 1 ou menor)***

1. Verifico se o parâmetro é um inteiro válido;
2. Converto o parâmetro em uma array chamada `arrayNum`;
3. Crio duas contantes chamadas `arrayOrdenadaDesc` e `arrayOrdenadaAsc`, que vão armazenar uma versão crescente e outra decrescente da array original;
4. Ordeno as duas arrays para a forma crescente e descrescente;
5. Faço a validação se os números da array `arrayNum` estão seguindo uma ordem crescente ou decrescente, para os dois casos retornamos `true`;
6. Faço a validação se existe uma diferença maior que 1 na sequência entre os números da array `arraynum` caso haja essa diferença a variação no valor, a variável `validations` recebera false;
7. Por fim eu valido se a array `arrayNum` passou em todas as validações anteriores para retornar o resultado final;




***2 - Crie uma função que receba um array de inteiros como parâmetro e verifique se neste array existem números duplicados, caso exista, retorne um novo array com os valores que se repetem.***

1. Utilizo o método `filter()` para fitrar apenas o items duplicados na array de números;
2. No método `filter()` eu verifico a primeira aparição do item atual na array com o método `indexOf()` e comparo com o index atual da iteração.
3. Se o item aparecer pela segunda vez o método `indexOf()` vai retornar o index da primeira aparição, fazendo com que ele passe no nosso filtro e nos retorne o número repetido; 


***3 - Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres*** `'[', '{', '(', ')', '}', ']'` ***e retorne se a sequência é uma sequência válida ou não. Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente***

1. Converto o a string recebida em uma array chamada `arrValue`;
2. Crio duas constantes chamdas `openers` e `closers` que armazenam arrays com os caracteres que abrem e fecham as chaves, parênteses e colchetes. Os index das duas contantes casam seus caracteres de abertura e fechamento, ex: `opener[0] == '(' e closer[0] == ')'`;
3. Crio uma variável chamada `count` para fazer a contagem de aberturas e fechamento dos caracteres;
4. Crio também uma variável chamada `invalid` para validar a ordem de fechamento dos caracteres;
5. Inicio um `for` para iterar a `arrValue` e fazer a contagem de cada abertura e fechamento dos caracteres;
6. Se o caractere atual da iteração for um `opener` a função adiciona 1 ao `count`, se for um `closer` subtrai 1;
7. Ainda dentro do `for`, quando o caractere for um `closer` a função armazena o index desse close na variável chamada `closerIndex`;
8. Logo em seguida a função verifica se o caractere anterior da iteração é um `opener`, caso sim, a função verifica se esse `opener` casa com o `closer` da iteração atual. Se o `opener` e o `closer` não derem match significa que a sequência é invalida, assim atruibuindo o valor `true` à variável `invalid`;
9. No fim é feita a validação se à variável `count` é igual a 0 e à variável `invalid` é igual a `false` e retorn o valor correspondente à compração.  


***4 - Considere um conjunto de pessoas aposentadas, onde cada pessoa começou a trabalhar em ano X e aposentou em ano Y. Crie uma função que receba uma matriz na seguinte estrutura*** `[[x1,y1],[x2,y2],...[xn,yn]]` ***e calcule em qual/quais ano/anos houve mais pessoas trabalhando.***

1. Primeiro declaro duas variáveis chamdas `start` e `end`, ambas com valor `0`;
2. Em seguida faço um `for` no vetor recebido;
3. A primeira verificação é para saber se os valores do vetor são válidos para a compração;
4. A segunda verificação é para saber se estamos na primeira iteração do `for`, caso sim a função armazena os valores de início e aposentadoria nas variáveis `start` e `end`;
5. As proximas validações são para verificar se o valor da iteração atual é maior do que o armazenado na respectiva variável, dessa forma a função seleciona o intervalo de anos onde tiveram mais pessoas trabalhando;

***5 - Um grupo de amigos será colocado lado a lado para tirar uma foto. De quantos modos distintos os amigos podem se organizar para tirar a foto? Desenvolva uma função que receba um número de pessoas (valor inteiro) e retorne quantas possibilidades de organização existem para que o fotografo saiba o número de modos distintos que esse grupo e outros grupos possam se organizar.***

1. Inicialmente a função declara uma array vazia chamada `arr`;
2. Logo em seguida é criada a função `reducer()` que vai ser o callback do método `reduce()`; 
3. Após isso é criado um `for` para criar uma array com a quantidade de items igual ao número passado passa pelo parâmentro;
4. No fim utilizamos o método `reduce()` para fazer a multiplicação dos items da array de forma que represente a quantidade de combinações possíveis dessa quantidade. Ex: se o valor passado for 5, o `reduce()` exexuta o cálculo `1 * 2 * 3 * 4 * 5`, retornando assim a quantidade de combinações possíveis;