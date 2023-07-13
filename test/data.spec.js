import {searchByGender, mergeCharacters, searchByDirector, sortByYearAsc, sortByYearDesc, sortByNameAsc, sortByNameDesc} from '../src/data.js';

const films = [ 
  {
    "title": "Only Yesterday",
    "director": "Isao Takahata",
    "release_date": "1991",
    "people": [
      {
        "name": "Aiko",
        "gender": "Female",
        "specie": "Human"
      }
    ]
  },
  {
    "title": "Ponyo on the Cliff by the Sea",
    "director": "Hayao Miyazaki",
    "release_date": "2008",
    "people": [
      {
        "name": "Sosuke",
        "gender": "Male",
        "specie": "Human"
      },
      {
        "name": "Brunhilde/Ponyo",
        "gender": "Female",
        "specie": "Fish/Human"
      },
      {
        "name": "Granmammare",
        "gender": "Female",
        "specie": "Deity"
      },
    ]
  },
  {
    "title": "Pom Poko",
    "director": "Isao Takahata",
    "release_date": "1994",
    "people": [
      {
        "name": "Shoukichi",
        "gender": "Male",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Okiyo",
        "gender": "Female",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Zeniba",
        "gender": "Female",
        "specie": "Witch"
      }
    ]
  }
];
const isaoFilms = [
  {
    "title": "Only Yesterday",
    "director": "Isao Takahata",
    "release_date": "1991",
    "people": [
      {
        "name": "Aiko",
        "gender": "Female",
        "specie": "Human"
      }
    ]
  },
  {
    "title": "Pom Poko",
    "director": "Isao Takahata",
    "release_date": "1994",
    "people": [
      {
        "name": "Shoukichi",
        "gender": "Male",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Okiyo",
        "gender": "Female",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Zeniba",
        "gender": "Female",
        "specie": "Witch"
      }
    ]
  }
];
const hayaoFilms = [ 
  {
    "title": "Ponyo on the Cliff by the Sea",
    "director": "Hayao Miyazaki",
    "release_date": "2008",
    "people": [
      {
        "name": "Sosuke",
        "gender": "Male",
        "specie": "Human"
      },
      {
        "name": "Brunhilde/Ponyo",
        "gender": "Female",
        "specie": "Fish/Human"
      },
      {
        "name": "Granmammare",
        "gender": "Female",
        "specie": "Deity"
      },
    ]
  }
];
const allCharacters = [
  {
    "name": "Aiko",
    "gender": "Female",
    "specie": "Human"
  },
  {
    "name": "Sosuke",
    "gender": "Male",
    "specie": "Human"
  },
  {
    "name": "Brunhilde/Ponyo",
    "gender": "Female",
    "specie": "Fish/Human"
  },
  {
    "name": "Granmammare",
    "gender": "Female",
    "specie": "Deity"
  },
  {
    "name": "Shoukichi",
    "gender": "Male",
    "specie": "Raccoon Dog"
  },
  {
    "name": "Okiyo",
    "gender": "Female",
    "specie": "Raccoon Dog"
  },
  {
    "name": "Zeniba",
    "gender": "Female",
    "specie": "Witch"
  }
];
const maleCharacters = [
  {
    "name": "Sosuke",
    "gender": "Male",
    "specie": "Human"
  },
  {
    "name": "Shoukichi",
    "gender": "Male",
    "specie": "Raccoon Dog"
  }
];
const orderedByYearAsc = [
  {
    "title": "Only Yesterday",
    "director": "Isao Takahata",
    "release_date": "1991",
    "people": [
      {
        "name": "Aiko",
        "gender": "Female",
        "specie": "Human"
      }
    ]
  },
  {
    "title": "Pom Poko",
    "director": "Isao Takahata",
    "release_date": "1994",
    "people": [
      {
        "name": "Shoukichi",
        "gender": "Male",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Okiyo",
        "gender": "Female",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Zeniba",
        "gender": "Female",
        "specie": "Witch"
      }
    ]
  },
  {
    "title": "Ponyo on the Cliff by the Sea",
    "director": "Hayao Miyazaki",
    "release_date": "2008",
    "people": [
      {
        "name": "Sosuke",
        "gender": "Male",
        "specie": "Human"
      },
      {
        "name": "Brunhilde/Ponyo",
        "gender": "Female",
        "specie": "Fish/Human"
      },
      {
        "name": "Granmammare",
        "gender": "Female",
        "specie": "Deity"
      },
    ]
  }
];
const orderedByYearDesc = [ 
  {
    "title": "Ponyo on the Cliff by the Sea",
    "director": "Hayao Miyazaki",
    "release_date": "2008",
    "people": [
      {
        "name": "Sosuke",
        "gender": "Male",
        "specie": "Human"
      },
      {
        "name": "Brunhilde/Ponyo",
        "gender": "Female",
        "specie": "Fish/Human"
      },
      {
        "name": "Granmammare",
        "gender": "Female",
        "specie": "Deity"
      },
    ]
  },
  {
    "title": "Pom Poko","director": "Isao Takahata",
    "release_date": "1994",
    "people": [
      {
        "name": "Shoukichi",
        "gender": "Male",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Okiyo",
        "gender": "Female",
        "specie": "Raccoon Dog"
      },
      {
        "name": "Zeniba",
        "gender": "Female",
        "specie": "Witch"
      }
    ]
  },
  {
    "title": "Only Yesterday",
    "director": "Isao Takahata",
    "release_date": "1991",
    "people": [
      {
        "name": "Aiko",
        "gender": "Female",
        "specie": "Human"
      }
    ]
  },
];
const orderNamesAToZ = [
  {
    "name": "Aiko",
    "gender": "Female",
    "specie": "Human"
  },
  {
    "name": "Brunhilde/Ponyo",
    "gender": "Female",
    "specie": "Fish/Human"
  },
  {
    "name": "Granmammare",
    "gender": "Female",
    "specie": "Deity"
  },
  {
    "name": "Okiyo",
    "gender": "Female",
    "specie": "Raccoon Dog"
  },
  {
    "name": "Shoukichi",
    "gender": "Male",
    "specie": "Raccoon Dog"
  },
  {
    "name": "Sosuke",
    "gender": "Male",
    "specie": "Human"
  },
  {
    "name": "Zeniba",
    "gender": "Female",
    "specie": "Witch"
  }
];
const femaleCharacters = [
  {
    "name": "Aiko",
    "gender": "Female",
    "specie": "Human"
  },
  {
    "name": "Brunhilde/Ponyo",
    "gender": "Female",
    "specie": "Fish/Human"
  },
  {
    "name": "Granmammare",
    "gender": "Female",
    "specie": "Deity"
  },
  {
    "name": "Okiyo",
    "gender": "Female",
    "specie": "Raccoon Dog"
  },
  {
    "name": "Zeniba",
    "gender": "Female",
    "specie": "Witch"
  }
];
const orderNamesZToA = [
  {
    "name": "Zeniba",
    "gender": "Female",
    "specie": "Witch"
  },
  {
    "name": "Sosuke",
    "gender": "Male",
    "specie": "Human"
  },
  {
    "name": "Shoukichi",
    "gender": "Male",
    "specie": "Raccoon Dog"
  },
  {
    "name": "Okiyo",
    "gender": "Female",
    "specie": "Raccoon Dog"
  },
  {
    "name": "Granmammare",
    "gender": "Female",
    "specie": "Deity"
  },
  {
    "name": "Brunhilde/Ponyo",
    "gender": "Female",
    "specie": "Fish/Human"
  },
  {
    "name": "Aiko",
    "gender": "Female",
    "specie": "Human"
  }
];

describe('searchByGender', () => {
  it('is a function', () => {
    expect(typeof searchByGender).toBe('function');
  });
  it('Muestra personajes Female', () => {
    expect(searchByGender(allCharacters,'Female')).toEqual(femaleCharacters);
  });
  it('Muestra personajes Male', () => {
    expect(searchByGender(allCharacters,'Male')).toEqual(maleCharacters);
  });
});

describe('mergeCharacters', () => {
  it('is a function', () => {
    expect(typeof mergeCharacters).toBe('function');
  });
  it('Une los personajes de las peliculas', () => {
    expect(mergeCharacters(films)).toEqual(allCharacters);
  });
});

describe('searchByDirector', () => {
  it('is a function', ()=> {
    expect(typeof searchByDirector).toBe('function');
  });
  it('Devuelve arreglo con el filme del director Hayao Miyazaki', () => {
    expect(searchByDirector(films,'Hayao Miyazaki')).toEqual(hayaoFilms);
  });
  //Isao Takahata
  it('Muestra el director de la pelicula', () => {
    expect(searchByDirector(films,'Isao Takahata')).toEqual(isaoFilms);
  });
});
describe('sortByYearAsc', () => {
  it('is a function', ()=> {
    expect(typeof sortByYearAsc).toBe('function');
  });
  it('Muestra el año de lanzamiento de forma ascendente', () => {
    expect(sortByYearAsc(films)).toEqual(orderedByYearAsc);
  });
});
describe('sortByYearDesc', () => {
  it('is a function', ()=> {
    expect(typeof sortByYearDesc).toBe('function');
  });
  it('Muestra el año de lanzamiento de forma descendente', () => {
    expect( sortByYearDesc(films)).toEqual(orderedByYearDesc);
  });
  it('Muestra el año de lanzamiento de forma descendente', () => {
    expect( sortByYearDesc(orderedByYearAsc)).toEqual(orderedByYearDesc);
  });
});
describe('sortByNameAsc', () => {
  it('is a function', ()=> {
    expect(typeof sortByNameAsc).toBe('function');
  });
  it('ordena los personajes por nombre de A hacia Z', ()=>{
    expect(sortByNameAsc(allCharacters)).toEqual(orderNamesAToZ);
  });
  it('ordena los personajes por nombre de A hacia Z', ()=>{
    expect(sortByNameAsc(orderNamesZToA)).toEqual(orderNamesAToZ);
  });
});
describe('sortByNameDesc', () => {
  it('is a function', ()=> {
    expect(typeof sortByNameDesc).toBe('function');
  });
  it('ordena los personajes por nombre de Z hacia A', ()=>{
    expect(sortByNameDesc(mergeCharacters(films))).toEqual(orderNamesZToA);
  });
  /*it('ordena los personajes por nombre de Z hacia A', ()=>{
    expect(sortByNameAsc(orderNamesAToZ)).toEqual(orderNamesZToA);
  });*/
  //Esto debería ser error
  it('ordena los personajes por nombre de Z hacia A', ()=>{
    expect(orderNamesAToZ).toEqual(orderNamesZToA);
  });
});


