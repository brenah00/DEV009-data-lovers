//FUNCION QUE FILTRA POR NOMBRE DE DIRECTOR
export const searchByDirector = (allFilms,director) => {
  return allFilms.filter(film => film.director === director);
};
//FUNCION QUE ORDENA LAS PELICULAS POR AÑO DE LANZAMIENTO ASCENDENTEMENTE
export const sortByYearAsc = (allFilms) => {
  return allFilms.sort(function(a, b){ 
    if (a.release_date > b.release_date) {
        return 1; 
    }
      if (a.release_date < b.release_date) {
        return -1;
      }
      // a must be equal to b
      return 0;
  });
};


export const sortByYearDesc = (allFilms) => {
  let sortedList = allFilms.sort(function(a, b){ 
    if (a.release_date < b.release_date) {
        return 1; 
    }
    if (a.release_date > b.release_date) {
        return -1;
    }
    // a must be equal to b
    return 0;
  });
  return sortedList;

};
export const anotherExample = () => {
  return 'OMG';
};
// probando probando