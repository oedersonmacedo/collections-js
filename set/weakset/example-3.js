const circles = new WeakSet();
function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}
Circle.prototype.calculateArea = function() {
    if (!circles.has(this)) throw "Invalid object";
    return Math.PI * Math.pow(this.radius, 2);
};
const circle1 = new Circle(10);
const circle2 = {
    radius: 5
};

console.log(circle1.calculateArea.call(circle1));
// expect output: 314.1592653589793

console.log(circle1.calculateArea());
// expect output: 314.1592653589793

console.log(circle1.calculateArea.call(circle2));
// GENERATE ERROR