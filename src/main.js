import {info, speciesFilter, genderFilter, episodesFilter, sortFilter } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

//Para mostrar la imagen y nombre de los personajes

function allCharacters(data) { //declaramos funcion
  let all = ''
  data.forEach((objeto) => { // creando nvo array a info con map
          
          //concatenamos all con el template para mostrar el nombre del personaje y la imagen
  all += `<div class="tarjetas"><h1 class='name'> Name: ${objeto.name}</h1> <h2 class="gender">Gender: ${objeto.gender}</h2><h3 class="species"> Specie: ${objeto.species}</h3><h4 class='origin'> Origin: ${objeto.origin.name}</h4>
          <img src = ${objeto.image} class="image"> </img></div>`
  });

  document.getElementById('articles').innerHTML = all; //devuelve elemento content y agrego all a content. Nodo all se adjunta a nodo padre content
}

allCharacters(info);

// funcion change en select species
      
document.getElementById("species").addEventListener("change", function(e) {
  console.log(speciesFilter(info, e.target.value));
})

// funcion change en select gender
document.getElementById("gender").addEventListener("change", function(e) {
 
console.log(genderFilter(info, e.target.value));
})

// funcion change en select episodes
document.getElementById("episodes").addEventListener("change", function(e) {
console.log(episodesFilter(info, e.target.value));
})

// funcion change en select orden az-za
document.getElementById('ordenA').addEventListener('change', function(e) {

  let filteredData = sortFilter(info, e.target.value);
  console.log(filteredData)
  allCharacters(filteredData)
 
})

  const clear = document.getElementById('clear'); // boton borrar 
  clear.addEventListener('click', function() {
    document.getElementById('ordenA').value = '';
    document.getElementById('species').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('episodes').value = '';
});