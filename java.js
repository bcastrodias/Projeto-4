//Função para começar o jogo
let pares = []
let cartas

function GameStart(){
    cartas = prompt("Selecione número par entre 4 e 14")
        if (cartas%2 != 0 || cartas < 4 || cartas > 14 || isNaN(cartas))
        GameStart();
}
GameStart();

//Array de Parrots

const parrots = ['bobrossparrot',
'explodyparrot',
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot'
]

//Pareamento

function EvenCards(){
    
    
    for(let i = 0; i<cartas/2; i++){
        pares.push(parrots[i]);
        pares.push(parrots[i]);

}
    }
EvenCards()

//Fator aleatorizante



pares.sort(()=>{
const random=Math.random()

if(random > 0.5){
return 1
} else {
    return - 1
}

})
        

//Criar cartas
function cardCreate(){
   for (let p = 0; p < cartas; p++){
   document.querySelector(".fundo").innerHTML +=
    `<div class="card" id="${pares[p]}"> 
        <img src="./img/${pares[p]}.gif"/>
     </div> `;}
}
cardCreate()
