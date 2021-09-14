let player1H1=document.querySelector('#player1Score');
let player2H1=document.querySelector('#player2Score');

let player1Score = 0;
let player2Score = 0;

let player1Btn = document.querySelector('#player1Add');
let player2Btn = document.querySelector('#player2Add');
let reset = document.querySelector('#btnReset')
let scoreLimitOption= document.querySelector('#selectValue');

let scoreLimit=12;

scoreLimitOption.addEventListener('change' , () => {
    scoreLimit=parseInt(scoreLimitOption.value);
    console.log(scoreLimit);
})


player1Btn.addEventListener('click', () => {
        player1Score++;
        console.log(player1Score)
        player1H1.innerText=player1Score;
        
        if(player1Score===scoreLimit){
            player1Btn.disabled=true;
            player2Btn.disabled=true;
            player1H1.classList.add('playerScoreFin');
            player2H1.classList.add('playerScoreFin');
            player2H1.style.backgroundColor='red';
            player1H1.style.backgroundColor='green';
            
        }
})

player2Btn.addEventListener('click', () => {
    player2Score++;
    console.log(player2Score)
    player2H1.innerText=player2Score;
    
    if(player2Score===scoreLimit){
        player1Btn.disabled=true;
        player2Btn.disabled=true;
        player1H1.classList.add('playerScoreFin');
        player2H1.classList.add('playerScoreFin');
        player1H1.style.backgroundColor='red';
        
        player2H1.style.backgroundColor='green';
        
    }
})

reset.addEventListener('click', () => {
    player1H1.innerText=0;
    player2H1.innerText=0;
    player1Score=0;
    player2Score=0;
    player2H1.style.backgroundColor='transparent';
    player1H1.style.backgroundColor='transparent';
    player1Btn.disabled=false;
    player2Btn.disabled=false;
})

