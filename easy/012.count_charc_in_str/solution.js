"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const charCount = (char, word) => {
  let counter = 0;

  word.split("").forEach((w) => {
    if (w === char) counter += 1;
  });

  ans.textContent = counter;
};

inputBtn.addEventListener("click", function () {
  const [char, word] = prompt("").split(",");
  charCount(char, word);
});
