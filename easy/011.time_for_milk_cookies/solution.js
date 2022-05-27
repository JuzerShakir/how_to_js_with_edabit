"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const timeForMilkAndCookies = (inputDate) => {
  ans.textContent =
    inputDate.getDate() === 24 && inputDate.getMonth() + 1 === 11;
};

inputBtn.addEventListener("click", function () {
  const input = new Date(prompt("Please Input a date"));
  timeForMilkAndCookies(input);
});
