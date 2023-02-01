const languages = new Set(["Fortran", "Lisp", "COBOL"]);
const iterator = languages.entries();

console.log(iterator.next());
// expect output: { value: [ 'Fortran', 'Fortran' ], done: false }

console.log(iterator.next());
// expect output: { value: [ 'Lisp', 'Lisp' ], done: false }

console.log(iterator.next());
// expect output: { value: [ 'COBOL', 'COBOL' ], done: false }

console.log(iterator.next());
// expect output: { value: undefined, done: true }