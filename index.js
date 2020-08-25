// para la imagen 1
var randomNumber1 = Math.random() * 6; // numero aleatorio entre 0 y 5
randomNumber1 = Math.floor(randomNumber1) + 1; //numero aleatorio redondeado de 1 a 6

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

//para la imagen 2

var randomNumber2 = Math.random() * 6; // numero aleatorio entre 0 y 5
randomNumber2 = Math.floor(randomNumber2) + 1; //numero aleatorio redondeado de 1 a 6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//declaracion de ganador

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Jugador 1 gana";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Jugador 2 gana";
} else {
  document.querySelector("h1").innerHTML = "Empate";
}
