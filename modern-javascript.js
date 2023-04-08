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
/* function sum(a, b = 0) {
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
console.log(doMath(...arr)); */

// 15. First-Class and Higher-Order Functions

/* function dobule(number) {
  return number * 2;
}

function tripul(number) {
  return number * 3;
}

function transformar(number, fn) {
  return fn(number);
}

console.log(transformar(4, dobule));
console.log(transformar(5, tripul)); */

// 16. Functions Returning Functions ** caring funtion
/* function test(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(test(2)(3)(4));

const test2 = (a) => (b) => (c) => a + b + c; //lamda funtion / calculas function

console.log(test2(2)(3)(4)); */

/* // 17. Immediately Invoked Function Expressions (IIFE)

(function () {
  console.log("i will run once");
})(); */

// 18. The call and apply and bind Methods
// 19. The bind Method

/* const student = {
  name: "arif",
  birthYear: 1990,

  calAge(name) {
    return `${new Date().getFullYear() - this.birthYear} ${name} `;
  },
};

const student2 = {
  name: "rakib",
  birthYear: 2000,
};

// console.log(student.calAge());
// console.log(student2.call(calAge()));
// console.log(student.calAge.call(student2, "rakib"));
// const result = student.calAge.apply(student2, ["rakib"]);
const result = student.calAge.bind(student2, "rakib");

console.log(result()); */

// 20. Sets
/* const myset = new Set();
myset.add(2);
myset.add("hello");
myset.add(false);
myset.delete(false);
console.log(myset);

const arr = [2, 45, 5, 6, 4, 5, 3, 4, 5, 3];

const arrToSet = [...new Set(arr)];

console.log(arrToSet); */

/* // 21. Maps: Fundamentals
const animal = new Map();
animal.set("tiger", 4);
animal.set("lion", 5);
animal.set("monkey", 10);

animal.delete("lion");

console.log(animal);

for (const [anima, count] of animal) {
  console.log(anima, count);
}
 */
