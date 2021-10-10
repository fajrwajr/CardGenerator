let icons = ["♦", "♥", "♠", "♣"];

let iconMaker = icons[Math.floor(Math.random() * icons.length)];
document.querySelector("#cardTwo").innerHTML = iconMaker;

let randomLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "K", "Q", "J", "A"];

function cardDisplay() {
  let result = randomLetters[Math.floor(Math.random() * randomLetters.length)];
  document.querySelector("#cardOne").innerHTML = result;
}

let myStyle = document.querySelector("div");
myStyle.style.background = "white";
cardDisplay();
