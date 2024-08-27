// JavaScript Arrays

const lang1 = "HTML";
const lang2 = "CSS";
const lang3 = "JavaScript";

// const language2 = new Array("HTML", "CSS", "JavaScript", "PHP", true, 50);

const language = ["HTML", "CSS", "JavaScript", "PHP", true, 50];
language[4] = "Tailwind CSS";
language[5] = "react.js";
language[6] = "vue.js";
language[7] = "laravel";
language[10] = "Bootstrap";

// First Item
// console.log(language[0]);

// Last Item
console.log(language[language.length - 1]);

language.pop(); // Delete or Remove Last item

language.push("Angular.js"); // Add Last item

language.unshift("Basic Computing"); // Add First item

language.shift(); // Delete or Remove First item

console.log(language);
// console.log(language.at(5));
// console.log(language.toString());
// console.log(language.join(" * "));
// console.log(language.length);

const person = [];
person["fistName"] = "Hi ";
person["lastName"] = "ASIF";
person[2] = 23;

// console.log(person.length);
// console.log(person);
// console.log(person[2]);

// const num = [16];
const num = new Array(16);

console.log(num);

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const p = [2, 3, 4];
const z = [x.concat(y, p)];
// console.log(z);

const a = [
  [1, 2, 3, [3, 5, 7]],
  [4, 5, 6],
  [2, 4, 6],
];
// console.log(a);
// console.log(a.flat());

language.splice(2, 0, "info", "info2");
language.splice(0, 2);
console.log(language);
