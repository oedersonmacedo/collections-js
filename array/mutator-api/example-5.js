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
    return 1;
})

console.log(teams);
// expect output: [
//  { name: 'Vasco', year: 1898 },
//  { name: 'Criciuma', year: 1947 },
//  { name: 'Real Madrid', year: 1902 },
//  { name: 'Manchester United', year: 1878 }
//]