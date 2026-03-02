let media = 7.6, situação

if(media >= 6) {
  situação = 'APROVADO'
}
else {
  situação = 'REPROVADO'
}

console.log('Situação do aluno com média', media, 'é', situação, ' . ')

/*
Decidindo a situação do aluno usando o operador ternário
*/
media = 5.1

situação =  média >= 6? 'APROVADO' : 'REPROVADO'

console.log('situação do aluno com média', media,'é', situação, ' . ')

//------------------------------------------------------------------------------

let user = 'guest', msg

/*
decidindo se o usuário pode entrar ou não usando if.. else

  quando há apenas uma linha de código após um if, while, etc. ,
  podemos omitir as chaves
  */
 if(user === 'admin') msg = 'BEm Vindo!'
 else msg = 'Acesso negado.'

 console.log(user, msg)

 // Tomando a mesma decisão, mas usando o operador ternário
 msg = user === 'Admin' ? 'Bem vindo!'  : 'Acesso negado.'
 console.log(user, msg)