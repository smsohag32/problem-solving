let n = 0;
const createCounter = function () {
   return function () {
      return n++;
   };
};

const counter = createCounter();
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
