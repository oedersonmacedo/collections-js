const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, "value1");
wm1.set(obj2, "value2");
console.log(wm1);
// expect output: console.log(wm1);

console.log(wm1.has(obj1));
// expect output: true

console.log(wm1.has(obj2));
// expect output: true

console.log(wm1.get(obj1));
// expect output: 'value1'

console.log(wm1.get(obj2));
// expect output: 'value2'
