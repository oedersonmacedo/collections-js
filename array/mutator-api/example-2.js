const teams = ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United'];

console.log(teams);
// expect output: ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United']

console.log(teams.unshift('Atletico-MG'));
// expect output: 5

console.log(teams.unshift('Palmeiras'));
// expect output: 6

console.log(teams);
// expect output: ['Palmeiras', 'Atletico-MG', 'Vasco', 'Criciuma', 'Real Madrid', 'Manchester United']

console.log(teams.shift());
// expect output: 'Palmeiras'

console.log(teams.shift());
// expect output: 'Atletico-MG'

console.log(teams);
// expect output: ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United']