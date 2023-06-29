import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(example, data);
const allFilms = data.films;

const root = document.getElementById('root');
const titlePage = document.createElement('h1');
titlePage.innerText = 'Estudio Ghibli';
root.appendChild(titlePage);
//Se muestran todas las películas dentro de un contenedor

//Vamos a imprimir todas las películas y poster
const section = document.createElement('div');
section.className= 'films-section';
root.appendChild(section);

for(let i=0; i < allFilms.length ; i++){
    //declaramos la seccion, poster y nombre
    const containerFilm = document.createElement('div');
    containerFilm.className = 'film-name';
    const posterContainer = document.createElement('div');
    posterContainer.className = 'poster-container';
    const poster = document.createElement('img');
    poster.src = allFilms[i].poster; 
    //poster.alt = allFilms[i].title;
    poster.className = 'poster-class';
    const titulo = document.createElement('p');
    titulo.innerText = allFilms[i].title;
    section.appendChild(containerFilm);
    containerFilm.appendChild(posterContainer);
    posterContainer.appendChild(poster);
    containerFilm.appendChild(titulo);
}