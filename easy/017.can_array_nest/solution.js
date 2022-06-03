"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const canNest = (arr_1, arr_2) =>
  (ans.textContent =
    Math.min(...arr_1) > Math.min(...arr_2) &&
    Math.max(...arr_1) < Math.max(...arr_2));

const convToArr = (input) => input.split(",").map((e) => Number(e));

inputBtn.addEventListener("click", function () {
  const arr_1 = convToArr(prompt("Values of the first Array"));
  const arr_2 = convToArr(prompt("Values of the second Array"));
  canNest(arr_1, arr_2);
});
