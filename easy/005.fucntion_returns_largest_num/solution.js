const input = document.querySelector(".input");
const ans = document.querySelector(".answer");

const whichIsLarger = (f, g) => {
  //   console.log(f, g);
  if (f > g) ans.textContent = "f";
  else if (g > f) ans.textContent = "g";
  else ans.textContent = "neither";
};

const user_input = (function_name) =>
  Number(prompt(`Enter a number for the ${function_name} function`));

input.addEventListener("click", function () {
  const f = user_input.bind(null, "f");
  const g = user_input.bind(null, "g");
  whichIsLarger(f(), g());
});
