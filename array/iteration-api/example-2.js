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

const result = teams.filter(function (team) {
    return team.year < 1900
});

console.log(result);
// expect output: [ { name: 'Vasco', year: 1898 }, { name: 'Manchester United', year: 1878 } ]