const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";

console.log(obj);
// expect output: { '10': 'String', true: 'String' }

const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");
console.log(map);
// expect output: Map(4) { 10 => 'Number', '10' => 'String', true => 'Boolean', 'true' => 'String' }
