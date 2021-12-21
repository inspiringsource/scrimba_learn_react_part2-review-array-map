const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const answer = pokemon.map(pokemon => `<p>${pokemon}</p>`);


for (let i = 0 ; i < pokemon.length; i++) {
    console.log(`<p>${pokemon[i]}</p>`);
}
console.log(answer);