var playagainButton = document.getElementById("play-again-button")

playagainButton.addEventListener("click",()=>{
    window.location.href = "main.html"
})


const storedName = sessionStorage.getItem("name");
const storedUserName = sessionStorage.getItem("username");

userName = document.querySelector("#inputedusername")

function givingusername(){
    userName.innerText = "  "+storedUserName
}
givingusername()


// HIGH SCORE AND MY SCORE


playerScore = document.getElementById("yscore")
highScore = document.getElementById("hscore")

var playerScorenumber = sessionStorage.getItem("score") || 0;
var highScorenumber = localStorage.getItem("high") || 0;

if (playerScorenumber > highScorenumber) {
    highScorenumber = playerScorenumber;
    localStorage.setItem("high", highScorenumber);
}
playerScore.innerText = playerScorenumber
highScore.innerText = highScorenumber


//RANDOM PHRASES 

const arrayPhrases = ["DONT GIVE UP", "Persistence leads to success.","You are stronger than you think"]
let message = document.getElementById("messages")
const randomPhrase =arrayPhrases[Math.floor(Math.random() * arrayPhrases.length)];
message.innerText = randomPhrase











