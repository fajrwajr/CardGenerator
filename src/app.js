let myStyle = document.querySelector("div");
myStyle.style.background = "white";

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
//document.querySelector("#change").addEventListener("click", cardDisplay);
