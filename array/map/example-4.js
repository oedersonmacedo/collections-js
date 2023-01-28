const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);

console.log(timeUnits.has("hour"));
// expect output: true

console.log(timeUnits.has("day"));
// expect output: false