const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits.get("second"));
// expect output: 1

console.log(timeUnits.get("minute"));
// expect output: 60

console.log(timeUnits.get("hour"));
// expect output: 3600

timeUnits.delete('hour');
console.log(timeUnits.get("hour"));
// expect output: undefined

timeUnits.clear();
console.log(timeUnits);
// expect output: Map(0) {}