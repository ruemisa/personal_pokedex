// TRYING TO PUT EVERYTHING IN ONE FUNCTION
// Notes: It takes like 4 clicks (1 on each) to store data in the pokemon {}
// So first 3 clicks throws off an error
// If using with html: change the onclick openDisplay() values from names to integers

var pokemonArr = [];

var Strewbs = {
  pokemon: {}, // THIS MIGHT BE THE CULPRIT
  all: function() {
    console.log(Strewbs.pokemon);
    pokemonArr = Object.entries(Strewbs.pokemon);
    return pokemonArr;
  },

  get: function(name) {
    var name = name.toLowerCase();
    return Strewbs['pokemon'][name];
  },

};

function openDisplay(num) {


  var pokeRequest = new XMLHttpRequest();

  pokeRequest.onload = function() {
    var pokeData = JSON.parse(this.response); //manage data in a readable code
    console.log(pokeData); // helps me read the data

// Somehow, when the api is pulled, the storing of data is delayed by 1 click
    Strewbs.pokemon[pokeData.name] = {      // store the data into an object
      hp: pokeData['stats'][5]['base_stat'],
      attack: pokeData['stats'][4]['base_stat'],
      defense: pokeData['stats'][3]['base_stat'],
      abilities: [pokeData['abilities'][0]['ability']['name'], pokeData['abilities'][1]['ability']['name']],
      sprites: pokeData['sprites']['front_default'],
    }
  }
  // API request
  // Yes, the nycda firebase works for me. Cant use pokename because FLAREON returns as null
  pokeRequest.open("GET", `https://pokeapi-nycda.firebaseio.com/pokemon/${num}.json`, true);
  pokeRequest.send();


    Strewbs.all();  // to place all pokemon in an array
    array = pokemonArr;  // to this array
    var i; // access pokemon count through the array above

    document.getElementById('displayBox').style.display = "block";
    document.getElementById('displayStats').style.color = "black";

    if (num == 134) {
      document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/vaporeon.gif')";
      let text = document.getElementById('bio');
      text.innerHTML = "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.";
      i = 0;
    } else if (num == 135) {
      document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/jolteon.gif')";
      let text = document.getElementById('bio');
      text.innerHTML = "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.";
      i = 1;
    } else if (num == 136) {
      document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/flareon.gif')";
      let text = document.getElementById('bio');
      text.innerHTML = "Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.";
      i = 2;
    } else {
      console.log('Please choose the following: Vaporeon, Jolteon, or Flareon');
    }

    let pokeName = document.getElementById('name');
    pokeName.innerHTML = array[i][0];

    let image = document.getElementById('image');
    image.src = array[i][1]['sprites'];

    let hp = document.getElementById('hp');
    hp.innerHTML = "hp: " + array[i][1]['hp'];

    let attack = document.getElementById('attack');
    attack.innerHTML = "attack: " + array[i][1]['attack'];

    let defense = document.getElementById('defense');
    defense.innerHTML = "defense: " + array[i][1]['attack'];

    let abilities = document.getElementById('abilities');
    abilities.innerHTML = "Abilities";

    let one = document.getElementById('abilOne');
    one.innerHTML = array[i][1]['abilities'][0];

    let two = document.getElementById('abilTwo');
    two.innerHTML = array[i][1]['abilities'][1];

}

function closeDisplay() {
  document.getElementById('displayBox').style.display = "none";
}

// Iritating battle button

// function blankScreen() {
//   document.getElementById('blank').style.display = "none";
//   document.body.style.background = "center / cover no-repeat url('images/eevee.gif')";
//   document.body.style.height = "100vh";
// }
