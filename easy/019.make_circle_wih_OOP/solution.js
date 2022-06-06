"use strict";

const area = document.querySelector(".area");
const perimeter = document.querySelector(".perimeter");
const ans = document.querySelector(".answer");

let circy;

const Circle = function (radius) {
  this.radius = radius;
};

rad_sub.addEventListener("submit", function (e) {
  e.preventDefault();
  ans.textContent = "";
  const radius = Number(document.querySelector("#userInput").value);
  circy = new Circle(radius);
});

Circle.prototype.getArea = function () {
  return (Math.PI * this.radius ** 2).toFixed(2);
};

Circle.prototype.getPerimeter = function () {
  return 2 * (Math.PI * this.radius).toFixed(2);
};

area.addEventListener("click", function () {
  ans.textContent = circy.getArea();
});

perimeter.addEventListener("click", function () {
  ans.textContent = circy.getPerimeter();
});
