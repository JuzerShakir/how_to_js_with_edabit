const input = document.querySelector(".input");
const ans = document.querySelector(".answer");

const numberSplit = (num) => {
  const numHalves = [];

  const first_half = Math.round(num / 2);
  const second_half = num - first_half;

  numHalves.push(second_half, first_half);

  ans.textContent = numHalves;
};

input.addEventListener("click", function () {
  const input = Number(prompt("Enter any integer"));
  numberSplit(input);
});
