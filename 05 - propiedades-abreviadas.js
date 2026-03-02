// Alguns dados de um usuário
const fullname  = 'Jonicleisson Junqueira Júnior'
const username = 'junin'
const group = 'alunos'

// CRIANDO UM OBJETO A PARTIR DAS VARIÁVEIS ACIMA
const user = {
    fulname: fullname,
    username: username,
    group: group 
}
console.log(user1)

/*
    Quando o nome da propriedade de um objeto é idêntico 
    à da variavel  que lhe dará o valor, é possível usar
    a sintaxe chamada PROPRIEDADE ABREVIADA, Ela permite
    não repetir os nomes das variàveis à frente dos nomes
    das propriedades
    */
const user2 = {
    fullname,
    username,
    group
}
console.log(user2)

// Um objeto pode mesclar propriedades abreviadas e
//  não abreviadas
const user3 = {
    fullname,
    username,
    password: 'SoberanoTricolor',
    group,
    lastLogin: '2026-03-02 11:27:35'
}
console.log(user3)

/* USANDO PROPRIEDADES ABREAVIADAS PARA DEPURAÇÃO (DEBUG) */

const X = 10, Y = 'Batata'

/*
  Exibindo o valor das duas variáveis com console.log().
  observe que os valores são mostrados, mas a saída não
  informa quais as variáveis de onde provêm os valores.
  */
 console.log(X,y)

 /*
   saída melhorada: passando um objeto formado pelas variáveis
   como propriedades abreviadas para o conole.log(), conseguimos
   identificar de onde v|êm os valores
   */
  console.log({x,y})
  