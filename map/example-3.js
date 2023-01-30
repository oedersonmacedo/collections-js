const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);

timeUnits.forEach(function (value, key) {
    console.log(value + '=' + key);
});
// expect output:
//'1=second'
//'60=minute'
//'3600=hour'