
// API GET request

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("info").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/134/", true);
//   xhttp.send();
// }
var trainer = {};

var vaporRequest = new XMLHttpRequest();

vaporRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/134/", true);

vaporRequest.onload = function() {
  var vaporData = JSON.parse(this.response);
  trainer.pokemon = {
    vaporeon: {
      hp: vaporData['stats'][5]['base_stat'],
    }
  };
  console.log(vaporData);
  // let name = document.getElementById('name');
  // let vaporName = document.createElement('p');
  // vaporName.innerHTML = vaporData.name;
  // name.appendChild(vaporName);

}

vaporRequest.send();

var jolteonRequest = new XMLHttpRequest();

jolteonRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/135/", true);

jolteonRequest.onload = function() {
  var jolteonData = JSON.parse(this.response);


    console.log(jolteonData);

}

jolteonRequest.send();

var flareonRequest = new XMLHttpRequest();

flareonRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/136/", true);

flareonRequest.onload = function() {
  var flareonData = JSON.parse(this.response);


    console.log(flareonData);

}

flareonRequest.send();
