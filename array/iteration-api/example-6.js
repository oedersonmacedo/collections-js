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

const result = teams.map(team => team.name);
console.log(result);
// expect output: [ 'Vasco', 'Criciuma', 'Real Madrid', 'Manchester United' ]