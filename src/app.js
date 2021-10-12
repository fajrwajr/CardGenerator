let myStyle = document.querySelector("div");
let Body = document.querySelector("body");
let card = document.getElementsByClassName("blue")[0];
let cardTwo = document.getElementsByClassName("red1")[0];
let cardThree = document.getElementsByClassName("red")[0];

Body.style.background = "green";
myStyle.style.background = "white";
card.style.marginTop = "80px";
card.style.marginLeft = "130px";
card.style.fontSize = "80px";
card.style.marginBottom = "50px";
cardTwo.style.marginLeft = "250px";
cardTwo.style.fontSize = "80px";
cardThree.style.fontSize = "80px";
myStyle.style.background = "white";
myStyle.style.margin = "80px";
myStyle.style.marginLeft = "500px";
myStyle.style.marginRight = "550px";
myStyle.style.marginTop = "100px";
myStyle.style.marginBottom = "200px";
myStyle.style.height = "400px";

function cardDisplay() {
  setInterval(function() {
    makeManual();
  }, 4000);
}
cardDisplay();

function makeManual() {
  let icons = ["♦", "<i class='color'>♥</i>", "♠", "♣"];

  let iconMaker = icons[Math.floor(Math.random() * icons.length)];
  document.querySelector("#cardTwo").innerHTML = iconMaker;

  document.querySelector("#cardTw1").innerHTML = iconMaker;

  let randomLetters = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    "K",
    "Q",
    "J",
    "A"
  ];

  let result = randomLetters[Math.floor(Math.random() * randomLetters.length)];
  document.querySelector("#cardOne").innerHTML = result;
}

document.querySelector("#change").addEventListener("click", makeManual);
