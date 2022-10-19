// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.


const playButton = document.getElementById("play-button")

playButton.onclick = play;

function play(){
    window.location.replace("http://127.0.0.1:5500/game.html")
}