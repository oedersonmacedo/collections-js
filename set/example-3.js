const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets);
// expect output: Set(3) { 'ASCII', 'ISO-8599-1', 'UTF-8' }


charsets.forEach(function (charset) {
    console.log(charset);
});
// expect output:
// 'ASCII'
// 'ISO-8599-1'
// 'UTF-8'

console.log(charsets.size);