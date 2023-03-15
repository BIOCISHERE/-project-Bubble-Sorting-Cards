/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function randomNumber() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
}
function randomSuit() {
  let suit = ["spade", "club", "heart", "diamond"];
  let indesSuit = Math.floor(Math.random() * suit.length);
  return suit[indesSuit];
}

var cardObj = []; // array where the values and class of the cards are being pushed
var sortCardObj = []; // array where the values of A, J, Q, K are going to be changed to numbers to be sorted correctly
var finalCardObj = [];

let drawbtn = document.querySelector(".drawButton");
let sortbtn = document.querySelector(".sortButton");
let amountCard = document.querySelector(".amountCard");
let randomCards = document.querySelector(".randomCards");
let sortCards = document.querySelector(".bubbleSortLog");

//<-- draw button function start -->
drawbtn.addEventListener("click", () => {
  let randomCards = document.querySelector(".randomCards");
  let numberOfCards = `${amountCard.value}`;
  let olCard = document.querySelector(".card");

  cardObj.length = 0;
  sortCardObj.length = 0;

  if (olCard == null) {
    console.log("dosn't exist");
  } else {
    let child = randomCards.lastChild;
    while (child) {
      randomCards.removeChild(child);
      child = randomCards.lastChild;
    }
  }

  for (let i = 0; i < numberOfCards; i++) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add(randomSuit());
    div.innerHTML = randomNumber();

    randomCards.appendChild(div);
    cardObj.push({ value: div.innerHTML, class: div.className.split(" ") });
  }
  for (let j = 0; j < cardObj.length; j++) {
    sortCardObj.push(cardObj[j]);
  }

  console.log(cardObj);
});
// <-- draw funtion end -->

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (parseInt(arr[index].value) > parseInt(arr[index + 1].value)) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      finalCardObj.push(sortCardObj);
      index++;
    }
    wall--;
  }
  return arr;
};

sortbtn.addEventListener("click", () => {
  let bubbleSortLog = document.querySelector(".bubbleSortLog");
  let olCard = document.querySelector(".sortedCard");
  console.log("aqui empieza");

  if (olCard == null) {
    console.log("dosn't exist");
  } else {
    let child = bubbleSortLog.lastChild;
    while (child) {
      bubbleSortLog.removeChild(child);
      child = bubbleSortLog.lastChild;
    }
  }

  for (var a in sortCardObj) {
    if (sortCardObj[a].value == "A") {
      sortCardObj[a].value = "1";
    }
    if (sortCardObj[a].value == "J") {
      sortCardObj[a].value = "11";
    }
    if (sortCardObj[a].value == "Q") {
      sortCardObj[a].value = "12";
    }
    if (sortCardObj[a].value == "K") {
      sortCardObj[a].value = "13";
    }
  }

  bubbleSort(sortCardObj);

  for (var j in sortCardObj) {
    if (sortCardObj[j].value == "1") {
      sortCardObj[j].value = "A";
    }
    if (sortCardObj[j].value == "11") {
      sortCardObj[j].value = "J";
    }
    if (sortCardObj[j].value == "12") {
      sortCardObj[j].value = "Q";
    }
    if (sortCardObj[j].value == "13") {
      sortCardObj[j].value = "K";
    }
  }

  for (let b = 0; b < sortCardObj.length; b++) {
    let bubbleSortLog = document.querySelector(".bubbleSortLog");
    let finalCard = document.createElement("div");
    finalCard.classList.add("sortedCard");
    finalCard.classList.add(
      `${sortCardObj[b].class[0]}`,
      `${sortCardObj[b].class[1]}`
    );
    finalCard.innerHTML = `${sortCardObj[b].value}`;

    bubbleSortLog.appendChild(finalCard);
  }

  //console.log(sortCardObj[0].class[0]);
  //console.log(sortCardObj);
  console.log(finalCardObj);
});
