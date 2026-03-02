const nome = 'valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

// Mesclando strings com variável usando concatenação
const msg1 = 'Meu nome é ' + nome + ' + idade +
' anos e moro em ' + cidade + ' . '
console.log(msg1)

/* 
Mesclando strings e variáveis usando templante string
Templante strings soa  OBRIGATÓRIAMENTE  delimitadas pos ' ' 
(backticks  /  acentos graves / "crases")
*/
const msg2 = 'Meu nome é ${nome},  tenho ${idade} anos e moro em ${cidade}.'
console.log(msg2)

// Dentro de uma template string, nãp estamos limitados a usar
// apenas variáveis dentro do símbolo %{}. Qualquer código JS
// válido pode ser empregado ali
console.log('EM ${2026 + 7 },  ${nome.toUpperCase()} TERÁ  ${idade 6 7} ANOS')
