const input = document.querySelector(".input");
const ans = document.querySelector(".answer");

const tuckIn = (arr_1, arr_2) => {
  //   console.log(arr_1);
  if (arr_1.length === 2) ans.textContent = [arr_1[0], ...arr_2, arr_1[1]];
  else alert("Only 2 elements are allowed in the first array.");
};

input.addEventListener("click", function () {
  const arr_1 = prompt("Enter the first array")
    .split(",")
    .flat()
    .map((v) => Number(v));

  const arr_2 = prompt("Enter the second array")
    .split(",")
    .map((v) => Number(v));
  tuckIn(arr_1, arr_2);
});
