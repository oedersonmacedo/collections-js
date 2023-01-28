const teams = [
    {
        name: 'Vasco',
        year: 1898
    },
    {
        name: 'Criciuma',
        year: 1947
    },
    {
        name: 'Real Madrid',
        year: 1902
    },
    {
        name: 'Manchester United',
        year: 1878
    }
];
teams.sort(function (a, b) {
    return (a.name < b.name) ? -1 : 1;
});

console.log(teams);
//expect output: [
//    { name: 'Criciuma', year: 1947 },
//    { name: 'Manchester United', year: 1878 },
//    { name: 'Real Madrid', year: 1902 },
//    { name: 'Vasco', year: 1898 }
//]

teams.sort(function (a, b) {
    return (a.name > b.name) ? -1 : 1;
});
console.log(teams);
//expect output: [
//    { name: 'Vasco', year: 1898 },
//    { name: 'Real Madrid', year: 1902 },
//    { name: 'Manchester United', year: 1878 },
//    { name: 'Criciuma', year: 1947 }
//]

teams.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
console.log(teams);
//expect output: [
//    { name: 'Criciuma', year: 1947 },
//    { name: 'Manchester United', year: 1878 },
//    { name: 'Real Madrid', year: 1902 },
//    { name: 'Vasco', year: 1898 }
//]

teams.sort(function (a, b) {
    return b.name.localeCompare(a.name);
});

console.log(teams);
//expect output: [
//    { name: 'Vasco', year: 1898 },
//    { name: 'Real Madrid', year: 1902 },
//    { name: 'Manchester United', year: 1878 },
//    { name: 'Criciuma', year: 1947 }
//]
