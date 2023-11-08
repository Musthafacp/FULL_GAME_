var startGame = document.getElementById("start-game")
var usernamepopupPage = document.querySelector(".username-page")

startGame.addEventListener('click',() => {
    usernamepopupPage.style.display = "block";
    window.location.href = "main.html";
})

