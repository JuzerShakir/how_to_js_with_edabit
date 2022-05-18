"use strict";

const ans = document.querySelector(".answer");
// console.log(ans);

const output = (total) =>
  console.log(
    `${
      total
        ? (ans.textContent = total)
        : (ans.textContent = "Enter a valid number")
    }`
  );

const addUp = (input) => {
  let total = 0;
  for (i = 1; i <= input; i++) {
    total += i;
  }
  output(total);
};

document.querySelector(".input").addEventListener("click", function () {
  const input = Number(prompt("Input any number"));
  if (input >= 1 && input <= 1000) addUp(input);
});
