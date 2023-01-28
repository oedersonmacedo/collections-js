const timeUnits = new Map();
console.log(timeUnits);
// expect output: Map(0) {}

const timeUnits1 = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits1);
// expect output: Map(3) { 'second' => 1, 'minute' => 60, 'hour' => 3600 }

console.log(Array.from(timeUnits1));
// expect output: [ [ 'second', 1 ], [ 'minute', 60 ], [ 'hour', 3600 ] ]

console.log(timeUnits1.size);
// expect output: 3