const languages = new Set(["Fortran", "Lisp", "COBOL"]);
for (let language of languages) {
    console.log(language);
}
// expect output:
// 'Fortran'
// 'Lisp'
// 'COBOL'

console.log([...languages]);
// expect output: [ 'Fortran', 'Lisp', 'COBOL' ]
