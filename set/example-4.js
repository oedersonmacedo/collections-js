const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");

console.log(charsets.has("ASCII"));
// expect output: true

console.log(charsets.has("CP-1252"));
// expect output: false

console.log(charsets.delete("ISO-8859-1"));
// expect output: true

console.log(charsets.delete("CP-1252"));
// expect output: false

console.log(charsets.has("ASCII"));
// expect output: true

console.log(charsets.has("ISO-8859-1"));
// expect output: false

console.log(charsets.has("CP-1252"));
// expect output: false