const teams = [];
teams[0] = 'Vasco';
teams[1] = 'Criciuma';
teams[2] = 'Real Madrid';
teams[3] = 'Manchester United';

console.log(teams);
// expect output: ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United']

console.log(teams.length);
// expect output: 4

delete teams[2];

console.log(teams);
// expect output: ['Vasco', 'Criciuma', <1 empty item>, 'Manchester United']

console.log(teams.length);
// expect output: 4
