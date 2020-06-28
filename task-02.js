'use strict';

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const countProps = function (obj) {
  let count = 0;
  for (let index in obj){
    count += 1;
  }
  return count;
};

console.log(countProps(user));