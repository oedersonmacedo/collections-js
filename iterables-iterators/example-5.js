let language = "COBOL";
for (let char of language) {
    console.log(char);
}
// expect output: 
// 'C'
// 'O'
// 'B'
// 'O'
// 'L'
console.log([...language]);
// expect output: [ 'C', 'O', 'B', 'O', 'L' ]