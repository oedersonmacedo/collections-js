const teams = ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United'];

console.log(teams);
// expect output: ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United']

console.log(teams.splice(1, 1));
// expect output: [ 'Criciuma' ]

console.log(teams);
// expect output: ['Vasco', 'Real Madrid', 'Manchester United']

console.log(teams.splice(1, 0, 'Atletico-MG', 'Palmeiras'));
// expect output: []

console.log(teams);
// expect output: [ 'Vasco', 'Atletico-MG', 'Palmeiras', 'Real Madrid', 'Manchester United' ]

console.log(teams.splice(1, 2, 'Criciuma'));
// expect output: [ 'Atletico-MG', 'Palmeiras' ]

console.log(teams);
// expect output: [ 'Vasco', 'Criciuma', 'Real Madrid', 'Manchester United' ]