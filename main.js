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

const gameSelection = () => {
    var rock = document.getElementById("button1").addEventListener("click", function() {
        playerCard.src = "images/Rock.png";
    });
    var paper = document.getElementById("button2");
    var scissor = document.getElementById("button3");
    var playerCard = document.getElementById("playerQ");


    
}
