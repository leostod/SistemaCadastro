console.log ("Bem-vindo(a)! - Cadastro de Evento")

var CadastroEvento = ["Evento - Formatura"] // vetor ou array

// Data Evento
let date = new Date ("24/02/2022") 
if ( date >= new Date ("14/02/2022") ) {
    console.log ("Dados válidos, prossiga com o cadastro.")
} else { 
    console.log ("Dados inválidos!!!")
}
//Idade Participante
let idade = 16
if (idade >= 18) {
    console.log ("Idade cadastrada.")
} else {
    console.log ("Cadastro negado, idade inválida! Idade permitida: Maior de 18 anos ou 18 anos completos.")
}
// Quantidade de Participantes
let inscritos = 97
if  (inscritos <=100) {
    console.log ( "Cadastro realizado com sucesso!")
} else {
    console.log ("Cadastro invalido, excedido número de inscritos!")
}