class Trainer {
  constructor(name) {
    this.name = name;
  }
  all() {
    pokemon = Object.entries(poke)[1];
    console.log(pokemon);
  }
}

var pokemon = {};
var poke;

var num = prompt('enter number');

var pokeRequest = new XMLHttpRequest();
pokeRequest.open("GET", `https://pokeapi-nycda.firebaseio.com/pokemon/${num}.json`, true);


pokeRequest.onload = function() {
  var pokeData = JSON.parse(this.response); //manage data in a readable code
  console.log(pokeData);
  return poke = pokeData;
}
// API request
pokeRequest.send();
