// let myPromise = new Promise((resolve, reject) => {
//   if(false) {
//     resolve("Muvoffaqqiyatli")
//   }else {
//     reject("Xatolik!")
//   }
// })

// async function getData() {
//   try {
//     const result = await myPromise;
//     console.log(result);  // 'Operatsiya muvaffaqiyatli yakunlandi'
//   } catch (error) {
//     console.error(error);  // 'Xato yuz berdi'
//   }
// }

// getData();

// function vaqtniKut(vaqt) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(); // Timer tugagach, Promise bajariladi
//     }, vaqt);
//   });
// }

// function vaqtniKut(vaqt) {
//   return setTimeout(() => {}, vaqt);
// }

// async function ishniBajar() {
//   console.log("1: Boshlanmoqda...");
//   await vaqtniKut(2000); // 2 soniya kutadi
//   console.log("2: Tugadi!");
// }

// ishniBajar();

//////////////////////// object

// let person = {
//   name: "John",
//   age: 30,
//   greet: function() {
//       console.log("Hello!");
//   }
// };

// let person = new Object();
// person.name = "John";
// person.age = 30;
// person.greet = function() {
//     console.log("Hello!");
// };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//       console.log("Hello!");
//   };
// }

// let john = new Person("John", 30);


// let proto = {
//   greet: function() {
//       console.log("Hello!");
//   }
// };

// let person = Object.create(proto);
// person.name = "John";
// person.age = 30;

// console.log(person);

// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }

//   greet() {
//       console.log("Hello!");
//   }
// }

// let john = new Person("John", 30);


// function person() {
//   return {
//       name: "John",
//       age: 30,
//       greet: function() {
//           console.log("Hello!");
//       }
//   };
// }

// let john = person();

// ////// method va key-value qo'shish

// let newPerson = person();

// newPerson.job = "Developer";

// newPerson.sayGoodbye = function() {
// console.log("Goodbye!");
// };

// newPerson.sayGoodbye(); 
// console.log(newPerson); 

// let person = (function() {
//   let instance;

//   function createInstance() {
//       return {
//           name: "John",
//           age: 30,
//           greet: function() {
//               console.log("Hello!");
//           }
//       };
//   }

//   return {
//       getInstance: function() {
//           if (!instance) {
//               instance = createInstance();
//           }
//           return instance;
//       }
//   };
// })();

// let john = person.getInstance();

// console.log(john);


// let fruits = new Array("apple", "banana", "orange");

// console.log(fruits);


// let numbers = Array.of(1, 2, 3, 4, 5);

// let str = "hello";
// let letters = Array.from(str); // ["h", "e", "l", "l", "o"]

// // set obyekti
// let mySet = new Set([1, 2, 3]);
// let numbers = Array.from(mySet); // [1, 2, 3]

// console.log(numbers);

// let str = "hello";
// let letters = [...str]; // ["h", "e", "l", "l", "o"]

// let filledArray = new Array(2).fill(0); // [0, 0, 0, 0, 0]

// console.log(filledArray);

// let str = String.fromCharCode(72, 101, 108, 108, 71); 

// console.log(str);

// let maxValue = Number.MAX_VALUE; // JavaScript-dagi eng katta son
// let minValue = Number.MIN_VALUE; 

// console.log(minValue, maxValue);

// console.log(String(Number.MAX_SAFE_INTEGER).length);

// console.log(Number.EPSILON);

// let truthyValue = !!!!1; // true
// let falsyValue = !!0; // false
// let stringBool = !!"hello"; // true

// console.log(truthyValue);




