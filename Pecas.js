var listaDePecas = ["Volante", "Radiador", "escapamento"]

if(listaDePecas.length < 10) {
// É possivel cadastrar peças
console.log ("É possivel cadastrar mais peças")
} else {
    console.log("não tem mais espaço nessa lista, impossivel cadastrar")
}

let peso = 180;

if (peso < 100) {
  console.log("A peça deve pesar no mínimo 100g")  
} else {
  console.log("A peça possui peso adequado")  
}

let nomePeca = "Disco de Freio";

// = -> Atribuição de valor, ler como RECEBE
// == -> Verificação se os valores são iguais, ler como é IGUAL?
// === -> Verificação se o valor é igual e também o tipo do valor, verifica valor e tipo.

if (nomePeca.length > 3) {
    console.log("nome de peça está adequado para o cadastro! !")
} else if(nomePeca.length == 0) {
    console.log("O nome da peca não pode estar vazio.")
} else {
   console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.")
   break;

   case 1:
   case 2:
   case 3:
       console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.") 
    break;
   default:
       console.log("nome de peça está adequado para o cadastro! !")
       break;
}