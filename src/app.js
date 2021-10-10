let icons = ["♦", "♥", "♠", "♣"];

let iconMaker = icons[Math.floor(Math.random() * icons.length)];
document.querySelector("#cardTwo").innerHTML = iconMaker;

function cardMaker() {
  let result = Math.floor(Math.random() * 4) + 1;
  document.querySelector("#cardOne").innerHTML = result;
}

let myStyle = document.querySelector("div");
myStyle.style.background = "white";
cardMaker();
