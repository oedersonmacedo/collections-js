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

const result = teams.find(function (team) {
    return team.name === 'Vasco';
});

console.log(result);
// expect output: { name: 'Vasco', year: 1898 }

const result1 = teams.filter(function (team) {
    return team.name === 'Vasco';
});

console.log(result1);
// expect output: [ { name: 'Vasco', year: 1898 } ]
