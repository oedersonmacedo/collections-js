const array = [];
array.push(10);
array.push(10);
array.push(10);

console.log(array);
// expect output: [ 10, 10, 10 ]
console.log(array.length);
// expect output: 3

const set = new Set();
set.add("10");
set.add("10");
set.add("10");

console.log(set);
// expect output: Set(1) { '10' }

console.log(set.size);
// expect output: 1