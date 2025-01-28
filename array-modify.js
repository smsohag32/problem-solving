var map = function (arr, fn) {
   let result = [];

   for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
   }
};

const arr1 = [15, 566, 656];

map(arr1, function (n) {
   return n + 1;
});
