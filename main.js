function audioVolume(){
    document.getElementById("audio");
    document.getElementById("song");
     
    (song.paused) ? song.play() : song.pause();

    (song.paused) ? audio.style.backgroundImage = "url('images/mute.png')": 
        audio.style.backgroundImage = "url('images/speaker.png')";
}

const gitRead = () => {
    window.open("https://github.com/Jaime-Sanz/RockPaperScissors/tree/main")
}

const userChoice = (selection) => {
    let playerCard = document.getElementById("playerQ");
    let playerScore = document.getElementById("playerScore").innerHTML;
    let enemyScore = document.getElementById("enemyScore").innerHTML;
    let result = document.getElementById("resultsText");

    if(enemyScore == 5){
        result.innerText = "YOU LOST THE GAME!";
    } else if (playerScore == 5){
        result.innerText = "YOU WON THE GAME!"; 
    }

    if(enemyScore < 5 && playerScore < 5){
    switch(selection){
        case 1:
            playerCard.src = "images/Rock.png";
            break;
        case 2:
            playerCard.src = "images/Paper.png";
            break;
        case 3:
            playerCard.src = "images/Scissors.png";
            break; 
        }
        gameSelection(selection)
    }
}

function gameSelection(playerValue){
    let computerSelection = Math.floor(Math.random() * 10);
    let enemyCard = document.getElementById("enemyQ");
    let playerScore = document.getElementById("playerScore").innerHTML;
    let enemyScore = document.getElementById("enemyScore").innerHTML;
    let result = document.getElementById("resultsText");
    let enemyValue;

    switch(computerSelection){
        case 0:
        case 1:
        case 2:
            enemyCard.src = "images/Rock.png"
            enemyValue = 1;
            break;
        case 3:
        case 4:
        case 5:
            enemyCard.src = "images/Paper.png";
            enemyValue = 2;
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            enemyCard.src = "images/Scissors.png"
            enemyValue = 3;
            break;
    }

    if ((enemyValue == 1 && playerValue == 1) || 
        (enemyValue == 2 && playerValue == 2) || 
        (enemyValue == 3 && playerValue == 3)){
        result.innerText = "Round Was A Tie!";
    } else if ((enemyValue == 1 && playerValue == 2) ||
               (enemyValue == 2 && playerValue == 3) || 
               (enemyValue == 3 && playerValue == 1)){
                result.innerText = "Player Wins Round!";
                document.getElementById("playerScore").innerHTML = ++playerScore;
    } else if ((enemyValue == 2 && playerValue == 1) || 
               (enemyValue == 3 && playerValue == 2) ||
               (enemyValue == 1 && playerValue == 3)){
                result.innerText = "Enemy Wins Round!";
                document.getElementById("enemyScore").innerHTML = ++enemyScore;
    }
}
