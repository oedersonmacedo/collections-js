const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"]
let languages = classicLanguages.concat(modernLanguages);
console.log(languages);
// expect output: [ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'JavaScript' ]

languages = [...classicLanguages, ...modernLanguages];
console.log(languages);
// expect output: [ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'JavaScript' ]
