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
/*
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
  console.log(arr);
  return arr;
};
*/
sortbtn.addEventListener("click", () => {
  let bubbleSortLog = document.querySelector(".bubbleSortLog");
  let olCard = document.querySelector(".sortedCard");

  if (olCard == null) {
    console.log("dosn't exist");
  } else {
    let child = bubbleSortLog.lastChild;
    while (child) {
      bubbleSortLog.removeChild(child);
      child = bubbleSortLog.lastChild;
    }
  }

  for (let a = 0; a < sortCardObj.length; a++) {
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
    console.log(sortCardObj[a].value);
  }

  let wall = sortCardObj.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (
        parseInt(sortCardObj[index].value) >
        parseInt(sortCardObj[index + 1].value)
      ) {
        let aux = sortCardObj[index];
        sortCardObj[index] = sortCardObj[index + 1];
        sortCardObj[index + 1] = aux;

        for (let c = 0; c < sortCardObj.length; c++) {
          if (sortCardObj[c].value == "1") {
            sortCardObj[c].value = "A";
          }
          if (sortCardObj[c].value == "11") {
            sortCardObj[c].value = "J";
          }
          if (sortCardObj[c].value == "12") {
            sortCardObj[c].value = "Q";
          }
          if (sortCardObj[c].value == "13") {
            sortCardObj[c].value = "K";
          }
        }

        let finaldiv = document.createElement("div");
        finaldiv.classList.add("bubbleSortLogDiv");
        for (let b = 0; b < sortCardObj.length; b++) {
          let bubbleSortLog = document.querySelector(".bubbleSortLog");
          let finalCard = document.createElement("div");
          finalCard.classList.add("sortedCard");
          finalCard.classList.add(
            `${sortCardObj[b].class[0]}`,
            `${sortCardObj[b].class[1]}`
          );
          finalCard.innerHTML = `${sortCardObj[b].value}`;

          finaldiv.appendChild(finalCard);
          bubbleSortLog.appendChild(finaldiv);
        }
      }
      index++;
    }
    wall--;
  }
});
