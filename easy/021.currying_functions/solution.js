"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const multiple = (arr) => (num) => arr.map((ele) => ele * num);

inputBtn.addEventListener("click", function () {
  const arr = prompt("Enter the array of values, each separated by a comma.")
    .split(",")
    .map((ele) => Number(ele));

  const num = Number(prompt("Enter a multiple:"));

  const arrTimesNum = multiple(arr);
  ans.textContent = `[${arrTimesNum(num)}]`;
});
