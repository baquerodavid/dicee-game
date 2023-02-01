var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Number 1-6

var image1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", image1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", image2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}



/* SOLUTION CHALLENGE BY ANGELA

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png" // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

*/