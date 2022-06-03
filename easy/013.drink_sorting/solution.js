"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const sortDrinkByPrice = () => {
  const drinks = [
    {
      name: "lemonade",
      price: 50,
    },
    {
      name: "lime",
      price: 10,
    },
  ];

  const sorted = drinks
    .slice()
    .sort((currEle, nextEle) => currEle.price - nextEle.price);

  sorted.forEach((e) => {
    ans.textContent += `${e.name}:${e.price} `;
  });
};

inputBtn.addEventListener("click", function () {
  sortDrinkByPrice();
});
