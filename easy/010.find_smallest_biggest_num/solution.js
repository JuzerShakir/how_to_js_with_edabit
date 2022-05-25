"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const minMax = (input) => {
  //   console.log(input);
  const arrDesc = input.slice().sort((currEle, nextEle) => nextEle - currEle);
  ans.textContent = [arrDesc.at(-1), arrDesc.at(0)];
};

inputBtn.addEventListener("click", function () {
  const inputArr = prompt("")
    .split(",")
    .map((ele) => Number(ele));
  minMax(inputArr);
});
