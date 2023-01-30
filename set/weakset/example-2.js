const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1.delete(obj2));
// expect output: true

console.log(ws1.has(obj1));
// expect output: true

console.log(ws1.has(obj2));
// expect output: false

console.log(ws1);
// expect output: WeakSet { <items unknown> }