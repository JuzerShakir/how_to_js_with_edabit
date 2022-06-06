"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const sayHelloBye = (name, greetCode) => {
  const nameCapitalize = name[0].toUpperCase() + name.slice(1);

  ans.textContent = `${greetCode === 0 ? "Bye" : "Hello"} ${nameCapitalize}`;
};

inputBtn.addEventListener("click", function () {
  const [name, greetCode] = prompt(
    "Enter your name and greet code separated by a comma and space."
  ).split(",");

  sayHelloBye(name, Number(greetCode));
});
