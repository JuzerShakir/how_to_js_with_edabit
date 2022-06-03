"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const error = (input) => {
  return (
    (input === 1 && "Check the fan: e1") ||
    (input === 2 && "Emergency stop: e2") ||
    (input === 3 && "Pump Error: e3") ||
    (input === 4 && "c: e4") ||
    (input === 5 && "Temperature Sensor Error: e5") ||
    "101"
  );
};

inputBtn.addEventListener("click", function () {
  const userInput = Number(prompt("Enter input error number from 1-5:"));
  ans.textContent = error(userInput);
});
