//Game state
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
let scores = [];

//Player Name
let playerName = prompt("Enter your name:");
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();


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
    document.getElementById("guess").value ="";
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    document.getElementById("playBtn").disabled = true;

    let levelRadios = document.getElementsByName("level");
    for (let i = 0; i < levelRadios.length; i++) {
    levelRadios[i].disabled = true;
}

});


//tells user result (too high, etc)
document.getElementById("guessBtn").addEventListener("click", function() {
let guess = parseInt(document.getElementById("guess").value);
  guessCount++;
    if (guess<answer){
    document.getElementById("msg").textContent = playerName + " , you are too low and cold!"
        if (guess >= (answer - 2)) {
            document.getElementById("msg").textContent = playerName + " , you are too low, but you are hot!"
        }
        else if (guess >= (answer - 5)) {
            document.getElementById("msg").textContent = playerName + " , you are too low, but you are warm!"
        }
}
    else if (guess>answer) {
    document.getElementById("msg").textContent = playerName + " , you are too high and cold!"
        if (guess <= (answer + 2)) {
            document.getElementById("msg").textContent = playerName + " , you are too high, but you are hot!"
        }
        else if (guess <= (answer + 5)) {
            document.getElementById("msg").textContent = playerName + " , you are too high, but you are warm!"
        }
}
    else if (guess===answer) {
    document.getElementById("msg").textContent = playerName + " , you are correct!"
    document.getElementById("guessBtn").disabled = true;
    totalWins++;
    totalGuesses += guessCount;
    document.getElementById("wins").textContent = "Total Wins: " + totalWins;
    
    let avg = totalGuesses / totalWins;
    document.getElementById("avgScore").textContent = "Average Score: " + avg.toFixed(1);
      
    scores.push(guessCount);
    updateLeaderboard();
}
    
})