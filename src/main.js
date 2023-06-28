import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(example, data);
const allFilms = data.films;

//for que imprime todos los titulos
/*const root = document.getElementById('root');
for(let i = 0 ; i < allFilms.length ; i++){
    const img = document.createElement('img'); 
    img.src = allFilms[i].poster; 
    img.className = 'poster-class';
  const titulos = document.createElement('h1');
  titulos.innerText = allFilms[i].title;
  //root.appendChild(titulos);
  root.appendChild(titulos);
  root.appendChild(img); 
}*/
//Creamos el divisor para mostrar peliculas con el elemento div
//<div class = 'films-section'> </div>
/*
const showFilms = document.createElement('div');
//<div> </div>

showFilms.className = 'films-section';
//<div class = 'films-section'> </div>

root.appendChild(showFilms);*/
//Ayuda a mostrar el elemento creado en la pagina

//Crear el contenedor del poster y título con div
/*const containerFilm = document.createElement('div');
containerFilm.className = 'film-name';
//El divisor containerFilm se muestra dentro de showFilm
showFilms.appendChild(containerFilm);

const poster = document.createElement('img'); 
poster.src = allFilms[0].poster; 
poster.className = 'poster-class';
const titulo = document.createElement('p');
titulo.innerText = allFilms[0].title;
//poster y titulo se muestra dentro del contenedor
containerFilm.appendChild(poster); 
containerFilm.appendChild(titulo);*/
const titlePage = document.createElement('h1');
titlePage.innerText = 'Estudio Ghibli';
root.appendChild(titlePage);
//Se muestran todas las películas dentro de un contenedor

const section = document.createElement('div');
section.className= 'films-section';
root.appendChild(section);

for(let i=0; i < allFilms.length ; i++){
    //declaramos la seccion, poster y nombre
    const containerFilm = document.createElement('div');
    containerFilm.className = 'film-name';
    const poster = document.createElement('img');
    poster.src = allFilms[i].poster; 
    poster.className = 'poster-class';
    const titulo = document.createElement('p');
    titulo.innerText = allFilms[i].title;
    section.appendChild(containerFilm);
    containerFilm.appendChild(poster);
    containerFilm.appendChild(titulo);
}

/*for(let i = 0 ; i < allFilms.length ; i++){
    const img = document.createElement('img');
    // Establece la ubicación de la imagen 
    //<img src='' class=''>
    img.src = allFilms[i].poster; 
    img.className = 'poster-class';
    // Agrega la imagen al documento 
    document.body.appendChild(img); 
  }*/
//root.innerHTML = `<h1>${allFilms[1].title}</h1>`;