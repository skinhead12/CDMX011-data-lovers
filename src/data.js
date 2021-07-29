import data from './data/rickandmorty/rickandmorty.js';

let info = data.results;


export const sortName = info.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
});

export const speciesFilter = info.filter(function(specieSelected) {
    return specieSelected.species === "Human";
})