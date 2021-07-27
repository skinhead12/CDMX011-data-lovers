//Importar el acomodo de A-Z por nombre
import { sortName } from './data.js';
console.log(sortName);

//Para mostrar la imagen y nombre de los personajes
allCharacters() ;
    function allCharacters() { //declaramos funcion
        info.map((objeto)=>{ // creando nvo array a info con map
          let all = document.createElement('all'); //creando variable all
          all.classList.add("allchar"); //anade la clase all chart 
          //creamos constante template para mostrar el nombre del personaje y la imagen
          const template = `<h1 class='name'> ${objeto.name}</h1> 
          <img src = ${objeto.image} class = 'image'> </img>`
          all.innerHTML = template; //remplaza el contenido de all por template
          document.getElementById('articles').appendChild(all); //devuelve elemento content y agrego all a content. Nodo all se adjunta a nodo padre content
        });
      }