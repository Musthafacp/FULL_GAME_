let enterButton = document.getElementById("enter-button1")
console.log(enterButton)
var usernamePopupPage = document.querySelector(".username-page")
var gamepage = document.querySelector(".game")
var velocity = 30;

var score = document.getElementById("scorenumber")
const bgm = new Audio("Assets/Horserun.mp3")


const randomNumber = Math.floor(Math.random() * (530 - 460 + 1)) + 460;
console.log(randomNumber);


// SCORE

var Name = sessionStorage.getItem("name");
if (Name != null) {
    usernamePopupPage.style.display = "none";
    gamepage.style.display = "block"
}else{
    gamepage.style.display = "none"
    usernamePopupPage.style.display = "block"
}


var counter = 0;
setInterval(() => {
    score.innerText = counter;
    counter = counter + 1;
    sessionStorage.setItem("score", counter)
}, 200);


//USER NAME POPUP

enterButton.addEventListener('click', () => {
    var storedName = sessionStorage.getItem("name");
    if (storedName != null){
        usernamePopupPage.style.display = "none";
        gamepage.style.display = "block";
        bgm.play();
        bgm.loop = true;
    } else {
        location.reload();
        var nameInput = document.getElementById("name").value;
        var usernameInput = document.getElementById("username").value;

        if (nameInput != "" && usernameInput != "") {
            sessionStorage.setItem("name", nameInput);
            sessionStorage.setItem("username", usernameInput);

            usernamePopupPage.style.display = "none";
            gamepage.style.display = "block";
            bgm.play();
            bgm.loop = true;
        } else {
            if (usernameInput == "" && nameInput != "") {
                alert("Give your Username, Maahn");
            } else if (nameInput == "" && usernameInput != "") {
                alert("Give your Name, Maahn");
            } else {
                alert("Fill in both fields, Maahn");
            }
        }
    }
});



const dino = document.querySelector('.dino-image');
const obstacles = document.querySelectorAll('.obstacles');

let gameInterval;

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        jump();
    }
});

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 900);
    }
}


function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();

    obstacles.forEach((obstacle) => {
        const obstacleRect = obstacle.getBoundingClientRect();
        if (
            dinoRect.right > obstacleRect.left &&
            dinoRect.left < obstacleRect.right &&
            dinoRect.bottom > obstacleRect.top &&
            dinoRect.top < obstacleRect.bottom
        ) {
            gameOver();
        }
    });
    
}


if(score%10 == 0){
    velocity += 10;
}

function moveObstacles() {
    obstacles.forEach((obstacle) => {
        obstacle.style.position = "absolute";

        const randomBottom = Math.floor(Math.random() * (530 - 465 + 1)) + 465;
        obstacle.style.bottom = randomBottom + 'px';

        const currentRight = parseInt(obstacle.style.right) || 0;
        obstacle.style.right = currentRight + velocity + 'px';

        if (currentRight > window.innerWidth) {
            obstacle.style.right = '0px';
        }
    });
}




function gameOver() {
    clearInterval(gameInterval);
    window.location.href = "score.html";
}

gameInterval = setInterval(function () {
    moveObstacles();
    checkCollision();
}, 50);
