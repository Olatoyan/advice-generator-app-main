"use strict";

const adviceNum = document.querySelector(".advice__number");
const adviceText = document.querySelector(".advice__text");
const rollDice = document.querySelector(".img__box");

const getAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  adviceNum.textContent = data.slip.id;
  adviceText.textContent = data.slip.advice;
};

rollDice.addEventListener("click", getAdvice);
