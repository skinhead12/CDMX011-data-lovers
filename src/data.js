import rickMorty from './data/rickandmorty/rickandmorty.js';


export let info = rickMorty.results;


export const sortName = info.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
});

export const speciesFilter = info.filter(function(specieSelected) {
    return specieSelected.species === "Human";
})