function audioVolume(){
    document.getElementById("audio");
    document.getElementById("song");
     
    (song.paused) ? song.play() : song.pause();

    (song.paused) ? audio.style.backgroundImage = "url('images/mute.png')": 
        audio.style.backgroundImage = "url('images/speaker.png')";
}