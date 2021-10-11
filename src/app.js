let myStyle = document.querySelector("div");
let Body = document.querySelector("body");
Body.style.background = "green";
myStyle.style.background = "white";
myStyle.style.margin = "80px";
myStyle.style.marginLeft = "500px";
myStyle.style.marginRight = "550px";
myStyle.style.marginTop = "100px";
myStyle.style.marginBottom = "200px";
myStyle.style.height = "400px";

function cardDisplay() {
  setInterval(function() {
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

    let result =
      randomLetters[Math.floor(Math.random() * randomLetters.length)];
    document.querySelector("#cardOne").innerHTML = result;
  }, 3000);
}
cardDisplay();

//document.querySelector(#change").addEventListener("click", cardDisplay);
