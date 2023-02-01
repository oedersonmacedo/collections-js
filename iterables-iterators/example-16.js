const language = "COBOL";
const iterator = language[Symbol.iterator]();
console.log(iterator.next());
// expect output: { value: 'C', done: false }

console.log(iterator.next());
// expect output: { value: 'O', done: false }

console.log(iterator.next());
// expect output: { value: 'B', done: false }

console.log(iterator.next());
// expect output: { value: 'O', done: false }

console.log(iterator.next());
// expect output: { value: 'L', done: false }

console.log(iterator.next());
// expect output: { value: undefined, done: true }