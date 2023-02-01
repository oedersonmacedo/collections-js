const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
const iterator = languages.values();

console.log(iterator.next());
// expect output: { value: 1957, done: false }

console.log(iterator.next());
// expect output: { value: 1958, done: false }

console.log(iterator.next());
// expect output: { value: 1959, done: false }

console.log(iterator.next());
// expect output: { value: undefined, done: true }
