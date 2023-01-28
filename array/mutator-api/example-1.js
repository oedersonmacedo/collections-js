const teams = ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United'];

console.log(teams);
// expect output: ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United']

console.log(teams.push('Atletico-MG'));
// expect output: 5

console.log(teams.push('Palmeiras'));
// expect output: 6

console.log(teams);
// expect output: ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United', 'Atletico-MG', 'Palmeiras']

console.log(teams.pop());
// expect output: 'Palmeiras'

console.log(teams.pop());
// expect output: 'Atletico-MG'

console.log(teams);
// expect output: ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United']