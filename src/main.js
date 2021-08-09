import {info, example, speciesFilter, genderFilter, episodesFilter, sortFilter } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

console.log(sortFilter); //Importar el acomodo de A-Z por nombre
console.log(speciesFilter);//Importar el filtro de especies para mostrar en consola Humans

//Para mostrar la imagen y nombre de los personajes

    function allCharacters() { //declaramos funcion
        info.map((objeto)=>{ // creando nvo array a info con map
          let all = document.createElement('all'); //creando variable all
          all.classList.add("allchar"); //anade la clase all chart 
          //creamos constante template para mostrar el nombre del personaje y la imagen
          let template = `<div class="tarjetas"><h1 class='name'> Name: ${objeto.name}</h1> <h2 class='gender'>Gender: ${objeto.gender}</h2><h3 class='species'> Specie: ${objeto.species}</h3><h4 class='origin'> Origin: ${objeto.origin.name}</h4>
          <img src = ${objeto.image} class = 'image'> </img></div> `
          all.innerHTML = template; //remplaza el contenido de all por template
          document.getElementById('articles').appendChild(all); //devuelve elemento content y agrego all a content. Nodo all se adjunta a nodo padre content
       
      
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
    
    let filtro = (sortFilter(info, e.target.value));
    let listaOrdenada = '';
    filtro.forEach((actual) => listaOrdenada += template = actual) ;
    all.innerHTML = listaOrdenada;
    //console.log(allCharacters());
    //console.log(sortFilter(info, e.target.value));
  })
});
        
}
allCharacters() ;

  const clear = document.getElementById('clear'); // boton borrar 
  clear.addEventListener('click', function() {
    document.getElementById('ordenA').value = '';
    document.getElementById('species').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('episodes').value = '';
});
