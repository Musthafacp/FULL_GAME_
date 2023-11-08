let enterButton = document.getElementById("enter-button")
let usernamePopupPage = document.querySelector(".username-page")

var Name = document.getElementById("name")
var userName = document.getElementById("username")

enterButton.addEventListener('click',()=>{
    usernamePopupPage.style.display = "none";
    console.log("Name :- ",Name.value)
    console.log("username :- ",userName.value)
})

///////

const bouncingImage = document.querySelector(".dino-image");
let isBouncing = false;

document.addEventListener("click", function() {
  if (!isBouncing) {
    bouncingImage.style.animation = "jumb 1s ";
  } else {
    bouncingImage.style.animation = "none";
  }
  isBouncing = !isBouncing;
});

document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // Spacebar key
      if (!isBouncing) {
        bouncingImage.style.animation = "jumb 1s";
      } else {
        bouncingImage.style.animation = "none";
      }
      isBouncing = !isBouncing;
    }
  });
  