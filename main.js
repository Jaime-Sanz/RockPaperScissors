
function audioVolume(){
    document.getElementById("audio");
    document.getElementById("song");
     
    song.muted = !song.muted;

    (song.muted) ? audio.style.backgroundImage = "url('images/mute.png')" : 
        audio.style.backgroundImage = "url('images/speaker.png')";
}