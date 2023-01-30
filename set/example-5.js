const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets);
// expect output: Set(3) { 'ASCII', 'ISO-8859-1', 'UTF-8' }

console.log(charsets.size);
// expect output: 3

charsets.clear();
console.log(charsets);
// expect output: Set(0) {}

console.log(charsets.size);
// expect output: 0
