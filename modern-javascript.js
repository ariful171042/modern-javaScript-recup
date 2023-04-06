// Functions:
// 01. Destructuring Arrays
// 02. Destructuring Objects
// 03. The Spread Operator (...)
// 04. Rest Pattern and Parameters
// 05. Short Circuiting (&& and ||)
// 06. The Nullish Coalescing Operator (??)
// 07. Enhanced Object Literals
// 08. Optional Chaining (?.)
// 09. Looping Objects: Object Keys, Values, and Entries
// 10. Looping Arrays: The for-of Loop
// 11. Primitives vs. Objects (Primitive vs. Reference Types)
// 12. The this Keyword
// 13. Regular Functions vs. Arrow Functions
// 14. Default Parameters
// 15. First-Class and Higher-Order Functions
// 16. Functions Returning Functions
// 17. Immediately Invoked Function Expressions (IIFE)
// 18. The call and apply Methods
// 19. The bind Method
// 20. Sets
// 21. Maps: Fundamentals
// 22. Maps: Iteration

/* // 01. Destructuring Arrays
const arr = [22, 33, 44, 55, 11];

const lastEliment = arr.at(-1);

console.log(lastEliment);

const [fristEliment, secondEliment, , ...otherEliment] = arr;

console.log(fristEliment, secondEliment, otherEliment);\*/

/* 02. Destructuring Objects
const student = {
  firstNmae: "Arif",
  lastName: "full",
  birthYear: "2003",
};

const { firstNmae, lastName } = student;
console.log(firstNmae, lastName);*/

/* // 03. The Spread Operator (...)
const arr = [2, 4, 5, 34, 6];

const newArray = [...arr];
arr.pop();

console.log(arr);

console.log(newArray); */

/* const student = {
  firstName: "Rakib",
  lastName: "Rana",
  birthYear: "2003",
  job: "no Job",
};

const boy = { ...student };

console.log(boy);

const {  ...other } = student;

console.log(other); */

// 04. Rest Pattern and Parameters
/* const friends = ["sami", "maruf", "rafi", "mubarak"];

const [oldFriend, , ...otherFriends] = friends;

console.log(oldFriend, otherFriends); */
/* 
const user = {
  name: "arif",
  age: 22,
  income: 13333,
  skill: "js,ts",
};

const { name, skill, ...rest } = user;

console.log(name, skill, rest); */

// // 05. Short Circuiting (&& and ||)
// const money = 200;

// // money === 300 ? console.log("money is big") : console.log("money is  small");

// money >= 600 || money === 200 || console.log("false");

// // 06. The Nullish Coalescing Operator (??)

// let money = null;

// money ?? (money = 10);

// console.log(money);

/* // 07. Enhanced Object Literals
const burgerPrice = 300;
const restaurant = {
  name: "tangail burger shop",
  burgerPrice,
};

console.log(restaurant);  */

/* // 08. Optional Chaining (?.)
const obj = {
  title: "js",
  frameworks: [
    {
      dist: "angular",
      meta: "unknow",
      year: 2023,
    },
    {
      dist: "vue",
      meta: {
        offset: "TT",
        frequeny: {
          // pearlDate: "unknow",
        },
      },
      year: 2023,
    },
  ],
};

console.log(obj.frameworks[1].meta?.frequeny?.pearlDate?.title); */

/* // 09. Looping Objects: Object Keys, Values, and Entries

const player = {
  name: "shakib",
  country: "bangladesh",
  centure: 10,
  awards: 100,
};

const playerKeys = Object.keys(player);
// console.log(playerKeys);

// 10. Looping Arrays: The for-of Loop
for (const key of playerKeys) {
  // console.log(key);
}

const playerValues = Object.values(player);
// console.log(playerValues);

for (const value of playerValues) {
  // console.log(value);
}

const playerEntries = Object.entries(player);

console.log(playerEntries);

for (const [key, value] of playerEntries) {
  console.log(key, value);
}
 */

// 11. Primitives vs. Objects (Primitive vs. Reference Types)
// 12. The this Keyword

/* var birthYear = 1980;

const student1 = {
  name: "arif",
  birthYear: 2003,

  calcAge: () => {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const student2 = {
  name: "sami",
  birthYear: 2005,
  calcAge: student1.calcAge,
};

student2.calcAge();
// student1.calcAge(); */

// 13. Regular Functions vs. Arrow Functions
function sum(a, b = 0) {
  return a + b;
}
console.log(sum(2, 3));

const product = function (x, y) {
  return x * y;
};
console.log(product(3, 4));

const difference = (m, n) => {
  return m - n;
};

console.log(difference(3, 1));
// 14. Default Parameters

function doMath(num1, num2, ...other) {
  console.log(other);
  return num1 + num2;
}

const arr = [2, 4, 4, 5, 6, 3];
console.log(doMath(...arr));

// 15. First-Class and Higher-Order Functions
// 16. Functions Returning Functions
// 17. Immediately Invoked Function Expressions (IIFE)
// 18. The call and apply Methods
// 19. The bind Method
// 20. Sets
// 21. Maps: Fundamentals
// 22. Maps: Iteration
