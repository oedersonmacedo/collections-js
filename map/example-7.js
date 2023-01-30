const obj = {};
console.log("toString" in obj);
// expect output: true
console.log("valueOf" in obj);
// expect output: true

const obj1 = Object.create(null);
console.log("toString" in obj1);
// expect output: false

console.log("valueOf" in obj1);
// expect output: false

const map = new Map();
console.log(map.get("toString"));
// expect output: false

console.log(map.get("valueOf"));
// expect output: false