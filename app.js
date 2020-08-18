console.log('connected');

//Selecting all the required variables
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let head = document.querySelector('h1')

//For the 1st dice
let n1 = Math.random()*6;
n1 = Math.floor(n1)+1;
count = `images/dice${n1}.png`;

img1.setAttribute('src', count);


//For the 2nd dice
let n2 = Math.random()*6;
n2 = Math.floor(n2)+1;
count2 = "images/"+"dice"+n2+".png";

img2.setAttribute('src', count2);

//telling who wins with the higher dice number
n1>n2 ? head.innerHTML = "Player 1 Wins 🚩":
n2>n1 ? head.innerHTML = "Player 2 Wins 🚩":
head.innerHTML = "Draw";
