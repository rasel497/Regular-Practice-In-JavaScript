/*
  1. reducer - sobgula element a jbe kintu 1ta function thkbe oi function apply kore protekk take 1ta ultimate value diye pthai dibe.
  11: protekber loop kore 1ta 1ta kore element dibe and segulake kichu1ta operation chalaiya 1ta number a rupantor korbe.

  2. map - sobgula element jy then kichu1ta operation chalaiya sobgulre output dey.

  3. forEach - sogula element niye kichu 1ta kore, kintu output dey na

  4. filter - ata 1ta condition er moddhe diye jy je je condition fullfill kore segula ke output hesebe dekhy

  5. find - find hocche jeta mathch korbe ota dibe nexxt r dibe na

 */

//1 to 5 addition
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//reduce (accumulator Function, initial value)
//accumulatorFunction use two parameters

// const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total)

// 2nd method
const total = numbers.reduce((previous, current) => {
  console.log(previous, current);
  return previous + current
}, 0);

