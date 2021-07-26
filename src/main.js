//import { template } from '@babel/core';
import { example, info } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
 import rym from './data/rickandmorty/rickandmorty.js';

 console.log(example, rym);
// evento, manipulacion del DOM

allCharacters();
    function allCharacters(){
        info.map((objeto) =>{
        let all = document.createElement('p');
        all.classList.add("allchar");
        const template = `<h1 class='name'> ${objeto.name} </h1><img src = ${objeto.image} class = 'image'></img>`
        all.innerHTML = template;
        document.getElementById('articles').appendChild(all);
    });
}
