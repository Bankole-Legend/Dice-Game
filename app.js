//On reload of the page both dice will change
//Selecting all the required elements and classes and assigning them to variables
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let head = document.querySelector('h1')

//For the 1st dice
let dice1 = Math.random()*6;
dice1 = Math.floor(dice1)+1;
count = `images/dice${dice1}.png`;

img1.setAttribute('src', count);



//For the 2nd dice
let dice2 = Math.random()*6;
dice2 = Math.floor(dice2)+1;
count2 = `images/dice${dice2}.png`;
img2.setAttribute('src', count2);



//telling who wins with the higher dice number using tenary operators
dice1>dice2 ? head.innerHTML = "Player 1 Wins 🚩":
dice2>dice1 ? head.innerHTML = "Player 2 Wins 🚩":
head.innerHTML = "Draw";
