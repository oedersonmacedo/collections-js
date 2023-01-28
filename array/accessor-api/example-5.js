const teams = ['Vasco', 'Criciuma', 'Real Madrid', 'Manchester United', 'Atletico-MG', 'Palmeiras' ];

console.log(teams.join(","));
// expect output: 'Vasco,Criciuma,Real Madrid,Manchester United,Atletico-MG,Palmeiras'

console.log(teams.join(";"));
// expect output: 'Vasco;Criciuma;Real Madrid;Manchester United;Atletico-MG;Palmeiras'

console.log(teams.join("    "));
// expect output: 'Vasco    Criciuma    Real Madrid Manchester United   Atletico-MG Palmeiras'