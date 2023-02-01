const languages = ["Fortran", "Lisp", "COBOL"];
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
// expect output:
// 'Fortran'
// 'Lisp'
// 'COBOL'

for (let i in languages) {
    console.log(languages[i]);
}
// expect output:
// 'Fortran'
// 'Lisp'
// 'COBOL'

languages.forEach(function (language) {
    console.log(language);
});
// expect output:
// 'Fortran'
// 'Lisp'
// 'COBOL'

languages.forEach((language) => {
    console.log(language);
});
// expect output:
// 'Fortran'
// 'Lisp'
// 'COBOL'

for (let language of languages) {
    console.log(language);
}
// expect output:
// 'Fortran'
// 'Lisp'
// 'COBOL'