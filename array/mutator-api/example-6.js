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
    return a.year - b.year;
})

console.log(teams);
// expect output: [
//  { name: 'Manchester United', year: 1878 },
//  { name: 'Vasco', year: 1898 },
//  { name: 'Real Madrid', year: 1902 },
//  { name: 'Criciuma', year: 1947 }
//]

teams.sort(function (a, b) {
    return b.year - a.year;
})

console.log(teams);
// expect output: [
//  { name: 'Criciuma', year: 1947 },
//  { name: 'Real Madrid', year: 1902 },
//  { name: 'Vasco', year: 1898 },
//  { name: 'Manchester United', year: 1878 },
//]