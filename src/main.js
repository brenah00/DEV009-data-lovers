import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(example, data);
const allFilms = data.films;
const root = document.getElementById('root');
for(let i = 0 ; i < allFilms.length ; i++){
  const titulos = document.createElement('h1');
  //const poster = document.createElement('img src=' + allFilms[i].poster);
  titulos.innerText = allFilms[i].title;
  //root.innerHTML = `<img src=${allFilms[i].poster}>`
  root.appendChild(titulos);
  //root.appendChild(poster);
}
for(let i = 0 ; i < allFilms.length ; i++){
  
    const img = document.createElement('img'); 
    // Establece la ubicación de la imagen 
    img.src = allFilms[i].poster; 
    img.className = 'poster-class';
    // Agrega la imagen al documento 
    document.body.appendChild(img); 
  }
//root.innerHTML = `<h1>${allFilms[1].title}</h1>`;