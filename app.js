var startGame = document.getElementById("start-game")
var usernamePopupPage = document.querySelector(".username-page")
var gamepage = document.querySelector(".game")

startGame.addEventListener('click',() => {
    console.log("clicked")
    window.location.href = "main.html";
})


window.addEventListener("click", () => {
    const bgm = new Audio("Assets/BGM.mp3");
    bgm.play();
    bgm.loop = true;
})

