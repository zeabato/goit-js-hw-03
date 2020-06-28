'use strict';

const findBestEmployee = function (employees) {
  let bestEmployer = '';
  let tempTaskCount = 0;
  for (let index in employees){
    if (employees[index] > tempTaskCount){
      bestEmployer = index;
      tempTaskCount = employees[index];
    }
  }
  return bestEmployer;
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); 

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
