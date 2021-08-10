import { example, anotherExample } from '../src/data.js';
import { speciesFilter, genderFilter, episodesFilter, sortFilter } from '../src/data.js';

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
describe('speciesFilter', () => {
  it('is a function', () => {
    expect(typeof speciesFilter).toBe('function');
  });

  it( `Deberia devolver especies`, () => {
    var DataGral=[ 
      { name: "Rick",species:"Human"},
      {name:"Morty",species:"Alien"},]

    var TipoGral=[
      { name:"Rick",species:"Human"},
      { name:"Beth",species:"Human"},]
      expect (speciesFilter(DataGral,"Human")).toStrictEqual(TipoGral);
      }
  );
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
