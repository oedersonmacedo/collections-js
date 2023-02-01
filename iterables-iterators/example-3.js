const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
for (let language of languages) {
    console.log(language);
}
// expect output:
// [ 'Fortran', 1957 ]
// [ 'Lisp', 1958 ]
// [ 'COBOL', 1959 ]

for (let [language, year] of languages) {
    console.log(language, year);
}
// expect output:
// 'Fortran' '1957'
// 'Lisp' '1958'
// 'COBOL' '1959'

console.log([...languages]);
// expect output: [ [ 'Fortran', 1957 ], [ 'Lisp', 1958 ], [ 'COBOL', 1959 ] ]