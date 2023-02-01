const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
const iterator = languages.keys();

console.log(iterator.next());
// expect output: { value: 'Fortran', done: false }

console.log(iterator.next());
// expect output: { value: 'Lisp', done: false }

console.log(iterator.next());
// expect output: { value: 'COBOL', done: false }

console.log(iterator.next());
// expect output: { value: undefined, done: true }
