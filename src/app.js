function cardMaker() {
  let result = Math.floor(Math.random() * 4) + 1;
  document.querySelector("#card").innerHTML = result;
}

let myStyle = document.querySelector("body");
myStyle.style.background = "green";
cardMaker();
