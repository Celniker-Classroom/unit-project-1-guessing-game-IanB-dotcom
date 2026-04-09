//Game state
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
let scores = [];

// Date and Time
function time() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("date").textContent = month + " " + day + Suffix(day) + ", " + year + " - " + hours + ":" + minutes + ":" + seconds;
}

let months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function Suffix(day){
    if (day === 11 || day === 12 || day === 13) return "th";
    if (day % 10 === 1) return "st";
    if (day % 10 === 2) return "nd";
    if (day % 10 === 3) return "rd";
    return "th";
}

let day = new Date().getDate();
let month = months[new Date().getMonth()];
let year = new Date().getFullYear();

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;

document.getElementById("date").textContent = month + " " + day + Suffix(day) + ", " + year + " - " + hours + ":" + minutes + ":" + seconds;
time();
setInterval(time, 1000);


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
    guessCount = 0;
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

// leaderboard

function updateLeaderboard(){
    let sorted = scores.slice().sort(function(a, b){ return a - b; });
    let items = document.getElementsByName("leaderboard");
    for (let i = 0; i < items.length; i++){
        if(sorted[i] !== undefined){
            items[i].textContent = sorted[i];
        } else {
            items[i].textContent = "--";
        }
    }
}

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
    else (guess===answer); {
    document.getElementById("msg").textContent = playerName + " , you are correct!"
    document.getElementById("guessBtn").disabled = true;
    totalWins++;
    totalGuesses += guessCount;
    document.getElementById("wins").textContent = "Total Wins: " + totalWins;
    updateButtons();
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("giveUpBtn").disabled = true;
    document.getElementById("giveUpBtn").disabled = false;

    let avg = totalGuesses / totalWins;
    document.getElementById("avgScore").textContent = "Average Score: " + avg.toFixed(1);
      
    scores.push(guessCount);
    updateLeaderboard();
}
    
})

document.getElementById("giveUpBtn").addEventListener("click", function() {
    
})