//Game state
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
let scores = 0;

//Player Name
let playerName = prompt("Enter your name:");

document.getElementById("playBtn").addEventListener("click", function(){
    let radios = document.getElementsByName("level");
    let range = 3
    for (let i=0; i < radios.length; i++){
        if(radios[i].checked){
            range = parseInt(radios[i].value);
        }
    }


answer = Math.floor(Math.random() * range) + 1;

document.getElementById("msg").textContent = playerName + ", guess a number between 1 and " + range;
document.getElemenetById("guess").value ="";
document.getElemenetById("guessBtn").disabled = false;
document.getElementById("giveUpBtn").disabled = false;
document.getElementById("PlayBtn").disabled = true;

let levelRadios = document.getElementsByName("level");
for (let i = 0; i < levelradios.length; i++) {
    levelRadios[i].disabled = true;
}


});