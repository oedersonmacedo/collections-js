const languages = new Set(["Fortran", "Lisp", "COBOL"]);
const iterator = languages[Symbol.iterator]();

console.log(iterator.next());
// expect output: { value: 'Fortran', done: false }

console.log(iterator.next());
// expect output: { value: 'Lisp', done: false }

console.log(iterator.next());
// expect output: { value: 'COBOL', done: false }

console.log(iterator.next());
// expect output: { value: undefined, done: true }