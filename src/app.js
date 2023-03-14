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

let cardObj = []; // array where cards value  are pushed

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

  console.log(cardObj);
});
// draw funtion end

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].value > arr[j + 1].value) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}
function switchToNumber(arr) {
  switch (arr.value) {
    case "A":
      arr.value = 1;
    case "j":
      arr.value = 11;
    case "Q":
      arr.value = 12;
    case "K":
      arr.values = 13;
  }
}

let sortCardObj = [];

sortbtn.addEventListener("click", () => {
  sortCardObj.length = 0;
  for (let i = 0; i < cardObj.length; i++) {
    sortCardObj.push(cardObj[i]);
  }

  let objIndexA = sortCardObj.findIndex(obj => obj.value == "A");
  let objIndexJ = sortCardObj.findIndex(obj => obj.value == "J");
  let objIndexQ = sortCardObj.findIndex(obj => obj.value == "Q");
  let objIndexK = sortCardObj.findIndex(obj => obj.value == "K");
  console.log(sortCardObj[objIndexA]);
  console.log(sortCardObj[objIndexJ]);
  console.log(sortCardObj[objIndexQ]);
  console.log(sortCardObj[objIndexK]);

  for (let j = 0; j < 1; j++) {
    if (sortCardObj[objIndexA]) {
      sortCardObj[objIndexA] = "1";
      console.log("changed A value to 1");
    }
    if (sortCardObj[objIndexJ]) {
      sortCardObj[objIndexJ] = "11";
      console.log("changed J value to 11");
    }
    if (sortCardObj[objIndexQ]) {
      sortCardObj[objIndexQ] = "12";
      console.log("changed Q value to 12");
    }
    if (sortCardObj[objIndexK]) {
      sortCardObj[objIndexK] = "13";
      console.log("changed K value to 13");
    }
  }
  console.log(sortCardObj);
  //bubbleSort(cardObj);
});
//let ox = document.createElement("div");
//ox.classList.add("card", "club");
//ox.innerHTML = "6";
//sortCards.appendChild(ox);
