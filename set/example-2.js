const charsets = new Set(["ASCII", "ISO-8599-1", "UTF-8"]);
console.log(charsets);
// expect output: Set(3) { 'ASCII', 'ISO-8599-1', 'UTF-8' }

console.log(Array.from(charsets));
// expect output: ["ASCII", "ISO-8599-1", "UTF-8"]