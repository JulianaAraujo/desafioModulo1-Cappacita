const { retornaLista } = require("./funcao")
const listaDeClientes = [
//00
{
  nome: "Maurílio",
  sobrenome: "dos Anjos",
  idade: 29,
  genero: "Masculino",
  plano: "full",
  carencia: false,
  aquisicao: "15/02/2019"
  },

//01
  {
  nome: "Júlio",
  sobrenome: "D'Van",
  idade: 23,
  genero: "Masculino",
  plano: "full",
  carencia: false,
  aquisicao: "10/01/2019"
  },

//02
  {
  nome: "Rogério",
  sobrenome: "do Ingá",
  idade: 21,
  genero: "Masculino",
  plano: "full",
  carencia: false,
  aquisicao: "12/01/2019"
  },

//03
  {
  nome: "Renan",
  sobrenome: "da Silva",
  idade: 16,
  genero: "Masculino",
  plano: "full",
  carencia: false,
  aquisicao: "27/02/2019"
  },

//04
  {
  nome: "Ana",
  sobrenome: "Lima",
  idade: 17,
  genero: "Feminino",
  plano: "medium",
  carencia: false,
  aquisicao: "17/03/2019"
  },

//05
  {
  nome: "Adriana",
  sobrenome: "Menezes",
  idade: 27,
  genero: "Feminino",
  plano: "full",
  carencia: true,
  aquisicao: "14/09/2020"}]

  // ::::::::::::::::::: Fim da lista :::::::::::::::::

   // ::::::::::::::::::: Projeto v1.0 ::::::::::::::::::


console.log(retornaLista(listaDeClientes))