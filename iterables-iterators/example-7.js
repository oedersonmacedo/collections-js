const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
const iterator = languages[Symbol.iterator]();
console.log(iterator.next());
// expect output: { value: [ 'Fortran', 1957 ], done: false }

console.log(iterator.next());
// expect output: { value: [ 'Lisp', 1958 ], done: false }

console.log(iterator.next());
// expect output: { value: [ 'COBOL', 1959 ], done: false }

console.log(iterator.next());
// expect output: { value: undefined, done: true }