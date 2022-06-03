"use strict";

const inputBtn = document.querySelector(".input");
const ans = document.querySelector(".answer");

const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(classInstance) {
    if (this.age > classInstance.age)
      ans.textContent += `${classInstance.name} is younger than me.`;
    else if (this.age < classInstance.age)
      ans.textContent += `${classInstance.name} is older than me.`;
    else ans.textContent += `${classInstance.name} is the same age of me.`;
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

const showAns = () => {
  p1.compareAge(p2);
  p2.compareAge(p1);
  p1.compareAge(p3);
};

inputBtn.addEventListener("click", showAns);
