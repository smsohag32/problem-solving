const reverse = function (x) {
   let t = 0;
   while (x !== 0) {
      let c = x % 10;
      t = t * 10 + c;
      console.log("result of t expect ", t);
      x = Math.floor(x / 10);

      console.log(x, t);
      // return t;
   }
   return t;
};

const r = reverse(56);
