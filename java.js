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
    let pares = [];
    let p = 0;
    for(let i = 0; i<cartas; i<pares.length){
        pares.push(parrots[j]);
        pares.push(parrots[j]);
       j++;
}
    }

//Fator aleatorizante

function rng(){
    Math.random() - 0.5;
}

pares.sort(rng)
        

//Criar cartas
function cardCreate(ativos){
 document.querySelector("fundo").innerHTML = "";
   for (let k = 0; k < ativos; k++){
    document.querySelector(".game").innerHTML += `
            <div class="${ativos[k]}" onclick="selectCard(this);" data-identifier="card">
                <div class="back" data-identifier="back-face">
                    <img src="images/back.png">
                </div>
                <div class="front" data-identifier="front-face">
                    <img src="images/${ativos[k]}.gif">
                </div>
            </div>        
        `;
    }
}