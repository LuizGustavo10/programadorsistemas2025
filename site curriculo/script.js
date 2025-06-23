//alert("Olá mundo!");

//Uma variável guarda algum valor temporariamente
//Entrada dos dados
var nome = "José";
var idade = 45;
var senha = "777";

//registrando alteração
//enviando alteração pro github com o visual studio
//ALTERADO NO GIT 22222
//feito alteração

//estrutura de condiçãosssssss
if(idade > 17){
   // alert("Pode votar! "+ nome); 
} else{
   // alert("Vai embora daqui! "+ nome);
}
//teste
if(nome == "Valdecir" && senha =="123"){
   // alert("Login concedido! ");
}else{
   //alert("Tente Novamente! seu intruso!");
}

//laço de repetição
contador = 0;
while(contador < 1000){
    contador = contador + 1;
    console.log(contador);
}


var celular = document.querySelector('.celular');     //icone de menu
var listaMenu = document.querySelector('.menu ul');   //itens do menu

celular.addEventListener('click', function(){ 
    listaMenu.classList.toggle('mostrarMenu');
 });