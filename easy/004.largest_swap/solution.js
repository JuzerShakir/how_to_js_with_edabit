"use strict";

const input = document.querySelector(".input");
const ans = document.querySelector(".answer");

const swap = (str_num) =>
  largestSwap(Number(`${str_num[1]}${str_num[0]}`), str_num);

const largestSwap = (swap_num, str_num) => {
  console.log(swap_num);
  ans.textContent = `${str_num >= swap_num ? true : false}`;
};

input.addEventListener("click", function () {
  const str_num = prompt("Enter any 2 digit number");
  swap(str_num);
});
