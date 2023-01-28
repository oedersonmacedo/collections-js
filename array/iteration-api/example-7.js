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

const result = teams.reduce(function (total, team) {
    return total + team.year;
}, 0);

console.log(result);
// expect output: 7625