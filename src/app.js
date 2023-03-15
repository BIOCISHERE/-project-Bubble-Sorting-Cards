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

let drawbtn = document.querySelector(".drawButton");
let sortbtn = document.querySelector(".sortButton");
let amountCard = document.querySelector(".amountCard");
let randomCards = document.querySelector(".randomCards");
let sortCards = document.querySelector(".bubbleSortLog");

// draw button function start
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
// draw funtion end

/*
function createSortCardDiv() {
  var bubbleSortLog = document.querySelector(".bubbleSortLog");
  var lastDiv = document.createElement("div");
  lastDiv.classList.add("sortCard");

  bubbleSortLog.appendChild(lastDiv);
}
*/
/*
function createSortCard() {
  let lasdiv = document.querySelector(".sortCard");
  let sortedCard = document.createElement("div");
  sortedCard.classList.add(
    `${sortCardObj[j].class[0]}`,
    `${sortCardObj[j].class[1]}`
  );
  sortedCard.innerHTML = `${sortCardObj[a].value}`;

  lasdiv.appendChild(sortedCard);
}
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (parseInt(arr[j].value) > parseInt(arr[j + 1].value)) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

sortbtn.addEventListener("click", () => {
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
    finalCard.classList.add(
      `${sortCardObj[b].class[0]}`,
      `${sortCardObj[b].class[1]}`
    );
    finalCard.innerHTML = `${sortCardObj[b].value}`;

    bubbleSortLog.appendChild(finalCard);
  }

  //console.log(sortCardObj[0].class[0]);
  console.log(sortCardObj);
});

/*
  let objIndexA = sortCardObj.findIndex(obj => obj.value == "A");
  let objIndexJ = sortCardObj.findIndex(obj => obj.value == "J");
  let objIndexQ = sortCardObj.findIndex(obj => obj.value == "Q");
  let objIndexK = sortCardObj.findIndex(obj => obj.value == "K"); */

/*
  console.log(sortCardObj[objIndexA]);
  console.log(sortCardObj[objIndexJ]);
  console.log(sortCardObj[objIndexQ]);
  console.log(sortCardObj[objIndexK]); 
  */
/*
  for (let a = 0; a < 1; a++) {
    if (sortCardObj[objIndexA]) {
      sortCardObj[objIndexA].value = "1";
      console.log("changed A value to 1");
    }
    if (sortCardObj[objIndexJ]) {
      sortCardObj[objIndexJ].value = "11";
      console.log("changed J value to 11");
    }
    if (sortCardObj[objIndexQ]) {
      sortCardObj[objIndexQ].value = "12";
      console.log("changed Q value to 12");
    }
    if (sortCardObj[objIndexK]) {
      sortCardObj[objIndexK].value = "13";
      console.log("changed K value to 13");
    }
  } */
