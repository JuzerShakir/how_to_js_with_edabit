"use strict";

const input = document.querySelector(".input");
const ans = document.querySelector(".answer");

const flip = (num) => {
  ans.textContent = Number(num === 0);
};

input.addEventListener("click", function () {
  const num = Number(prompt("Enter a boolean number"));
  flip(num);
});
