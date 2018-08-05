// API GET request
// created a global trainer object
// Notes: THE ORIGINAL FILE. Yeah, I started out with a longer script.

var pokemonArr = [];

var Strewbs = {
  all: function() {
    // console.log(Strewbs.pokemon);
    pokemonArr = Object.entries(Strewbs.pokemon);
    return pokemonArr;
  },

  get: function(name) {
    var name = name.toLowerCase();
    if (name != 'vaporeon' && name != 'jolteon' && name != 'flareon') {
      alert('Please choose one: Vaporeon, Jolteon, Flareon.');
    } else {
      return Strewbs['pokemon'][name];
    }
  }

};

// VAPOREON

var vaporRequest = new XMLHttpRequest();

vaporRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/134/", true); // Api request

vaporRequest.onload = function() {
  var vaporData = JSON.parse(this.response); //manage data in a readable code
    console.log(vaporData);      // helps me read data through console

    Strewbs.pokemon = {         // created pokemon obj to house the pokemons inside trainer obj
      vaporeon: {
        hp: vaporData['stats'][5]['base_stat'],
        attack: vaporData['stats'][4]['base_stat'],
        defense: vaporData['stats'][3]['base_stat'],
        abilities: [vaporData['abilities'][0]['ability']['name'], vaporData['abilities'][1]['ability']['name']],
        sprites: vaporData['sprites']['front_default'],

      }
    };

}
vaporRequest.send();

// JOLTEON

var jolteonRequest = new XMLHttpRequest();

jolteonRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/135/", true);

jolteonRequest.onload = function() {
  var jolteonData = JSON.parse(this.response);
    console.log(jolteonData);

    Strewbs['pokemon']['jolteon'] = {
      hp: jolteonData['stats'][5]['base_stat'],
      attack: jolteonData['stats'][4]['base_stat'],
      defense: jolteonData['stats'][3]['base_stat'],
      abilities: [jolteonData['abilities'][0]['ability']['name'], jolteonData['abilities'][1]['ability']['name']],
      sprites: jolteonData['sprites']['front_default'],
    };

}
jolteonRequest.send();

// FLAREON

var flareonRequest = new XMLHttpRequest();

flareonRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/136/", true);

flareonRequest.onload = function() {
  var flareonData = JSON.parse(this.response);
    console.log(flareonData);

    Strewbs['pokemon']['flareon'] = {
      hp: flareonData['stats'][5]['base_stat'],
      attack: flareonData['stats'][4]['base_stat'],
      defense: flareonData['stats'][3]['base_stat'],
      abilities: [flareonData['abilities'][0]['ability']['name'], flareonData['abilities'][1]['ability']['name']],
      sprites: flareonData['sprites']['front_default'],
    };

}

flareonRequest.send();


// This DISPLAYS the Stats Sheet through a modal when clicked on the pokemon card panel

// arrayname = pokermonArr;

// VAPOREON


function displayVapor() {
  Strewbs.all();
  array = pokemonArr;

  document.getElementById('displayBox').style.display = "block";
  document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/vaporeon2.png')";
  document.getElementById('displayStats').style.color = "black";

    let stats = document.getElementById('displayStats');

    let name = document.getElementById('name');
    name.innerHTML = array[0][0];

    let image = document.getElementById('image');
    image.src = array[0][1]['sprites'];

    let hp = document.getElementById('hp');
    hp.innerHTML = "hp: " + array[0][1]['hp'];

    let attack = document.getElementById('attack');
    attack.innerHTML = "attack: " + array[0][1]['attack'];

    let defense = document.getElementById('defense');
    defense.innerHTML = "defense: " + array[0][1]['attack'];

    let abilities = document.getElementById('abilities');
    abilities.innerHTML = "Abilities";

    let one = document.getElementById('abilOne');
    one.innerHTML = array[0][1]['abilities'][0];

    let two = document.getElementById('abilTwo');
    two.innerHTML = array[0][1]['abilities'][1];
}

// JOLTEON

function displayJolteon() {
  Strewbs.all();
  array = pokemonArr;

  document.getElementById('displayBox').style.display = "block";
  document.getElementById('displayStats').style.background = "center / cover no-repeat url('images/jolteon2.jpg')";
  document.getElementById('displayStats').style.color = "black";

    let stats = document.getElementById('displayStats');

    let name = document.getElementById('name');
    name.innerHTML = array[2][0];

    let image = document.getElementById('image');
    image.src = array[2][1]['sprites'];

    let hp = document.getElementById('hp');
    hp.innerHTML = "hp: " + array[2][1]['hp'];

    let attack = document.getElementById('attack');
    attack.innerHTML = "attack: " + array[2][1]['attack'];

    let defense = document.getElementById('defense');
    defense.innerHTML = "defense: " + array[2][1]['attack'];

    let abilities = document.getElementById('abilities');
    abilities.innerHTML = "Abilities";

    let one = document.getElementById('abilOne');
    one.innerHTML = array[2][1]['abilities'][0];

    let two = document.getElementById('abilTwo');
    two.innerHTML = array[2][1]['abilities'][1];
}

// FLAREON

function displayFlareon() {
  Strewbs.all();
  array = pokemonArr;

  document.getElementById('displayBox').style.display = "block";
  document.getElementById('displayStats').style.background = "right / cover no-repeat url('images/flareon2.jpg')";
  document.getElementById('displayStats').style.color = "black";

    let stats = document.getElementById('displayStats');

    let name = document.getElementById('name');
    name.innerHTML = array[1][0];

    let image = document.getElementById('image');
    image.src = array[1][1]['sprites'];

    let hp = document.getElementById('hp');
    hp.innerHTML = "hp: " + array[1][1]['hp'];

    let attack = document.getElementById('attack');
    attack.innerHTML = "attack: " + array[1][1]['attack'];

    let defense = document.getElementById('defense');
    defense.innerHTML = "defense: " + array[1][1]['attack'];

    let abilities = document.getElementById('abilities');
    abilities.innerHTML = "Abilities";

    let one = document.getElementById('abilOne');
    one.innerHTML = array[1][1]['abilities'][0];

    let two = document.getElementById('abilTwo');
    two.innerHTML = array[1][1]['abilities'][1];
}

// To close Modal

function closeDisplay() {
  document.getElementById('displayBox').style.display = "none";
}
