function delDoc(pessoa) {
  delete pessoa.documento
  return pessoa
}

const pessoa = {
  "nome": "Andre",
  "sobrenome": "Masiero",
  "idade": "26",
  "cargo": "analista de sistemas",
  "documento": "123.345.678-90"
}

const pessoaAtualizada = delDoc(pessoa)

console.log(pessoaAtualizada)