"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const potatoes = (usrInput) => {
  const regexp = new RegExp("potato", "g");
  const match = Array.from(usrInput.matchAll(regexp), (m) => m[0]);
  //   const match = [...usrInput.matchAll(regexp)];
  ans.textContent = match.length;
};

inputBtn.addEventListener("click", function () {
  const usrInput = prompt("Enter a string:");
  potatoes(usrInput);
});
