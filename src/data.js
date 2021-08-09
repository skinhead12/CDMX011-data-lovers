import data from './data/rickandmorty/rickandmorty.js';


export let info = data.results;

//const sortSp = Array.from(info).sort((a, b) => { if (a.species.toLowerCase() < b.species.toLowerCase()) return -1 });
//export const sortSpecies = info.sort((a, b) => {
  //if(a.species.toLowerCase() < b.species.toLowerCase()) return -1 });
//console.log(sortSpecies);
  
//console.log(sortName);

//export const speciesFilter= (speciesSelected)=>{
  // let species= info.filter (kindofspecie=>kindofspecie.species===speciesSelected)
//return species
//}

// export const speciesFilter= info.filter(function(specieSelected){
//   return specieSelected.species=== "Human";

// })

export const example = () => {
  return 'example';
 };
 // estas funciones son de ejemplo
 //export const anotherExample = () => {
 //  return 'OMG';
 //};
 //export const pictures = info.filter((image) => {
  //return image;
//});
// filtrar por especie 
export const speciesFilter = (data, tipo) => {
  let resultSpecies = data.filter(personaje => personaje.species === tipo)
  return resultSpecies;
}
// funcion filtrar por genero
export const genderFilter = (data, genero) => {
  let resultGender = data.filter(personaje => personaje.gender === genero)
  return resultGender;
  
}
// funcion filtrar por episodio
export const episodesFilter = (data, episodios) => {
  let resultEpisodes = data.filter(personaje => personaje.episode === episodios)
 return resultEpisodes;
}

// export const sortFilter = (info) => {
//   let resultSort = info.sort((a, b) => {
//   if(a.name.toLowerCase() < b.name.toLowerCase()) return -1  
//   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1});
//       return resultSort;   
// }
// funcion orden ascendente y descendente 
  export const sortFilter = (data, seleccion) => {
      
    if(seleccion === "upward") {
      data.sort((a,b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        
        if(a > b) {
          return 1;
        }
        if(a < b) {
          return -1;
        }
        return 0;
      
      });
      return data;
    }
      if(seleccion === "downward") {
      data.sort((a,b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        
        if(a > b) {
          return -1;
        }
        if(a < b) {
          return 1;
        }
        return 0;
      });
     return data;
    }
  }
