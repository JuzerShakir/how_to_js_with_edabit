"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const calculateDifference = (stolenItem, limit) => {
  const stolenItemTotal = Object.values(stolenItem).reduce(
    (total, currentPrice) => total + currentPrice,
    0
  );
  ans.textContent = stolenItemTotal - limit;
};

const convObj = (unObj) => {
  const obj = {};
  unObj
    .slice(1)
    .split(",")
    .forEach((item) => {
      const [k, v] = item.trim().split(":");
      obj[`${k}`] = +v;
    });
  return obj;
};

inputBtn.addEventListener("click", function () {
  const input = prompt("Your Input:").split("},");
  const stolenItem = convObj(input.at(0));
  calculateDifference(stolenItem, +input.at(-1));
});
