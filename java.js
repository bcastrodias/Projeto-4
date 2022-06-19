//Função para começar o jogo

function GameStart(){
    cartas = prompt("Selecione número par entre 4 e 14")
        if (cartas%2 != 0 || cartas < 4 || cartas > 14 || isNaN(cartas))
        GameStart();
}
GameStart();

//Array de Parrots

parrots = ['bobrossparrot',
'explodyparrot',
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot'
]

//Pareamento

function EvenCards(cartas){
    let pares = []
    for(let i = 0; i<cartas; i<pares.length){
        pares.push(parrots[i]);
        pares.push(parrots[i]);
        i++
}
    }

//Fator aleatorizante

function rng(){
    Math.random() - 0.5;
}

pares.sort(rng)
        

//Criar cartas
/*function cardCreate(cartas){
 document.querySelector("fundo").innerHTML = "";
   for (let p = 0; p < cards.length

   
    const newParrot = `
    <div class="card" onclick:> <img src="${p}.gif"/>
    
    </div>
    `

}