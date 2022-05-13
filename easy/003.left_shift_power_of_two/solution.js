const input = document.querySelector(".input");
const ans = document.querySelector(".answer");

const shiftToLeft = (num, powerOf) => {
  ans.textContent = num * 2 ** powerOf;
};

input.addEventListener("click", function () {
  const num = Number(prompt("Enter the base number"));
  const powerOf = Number(prompt("What power you want to raise 2 to?"));
  if (powerOf >= 0) shiftToLeft(num, powerOf);
});
