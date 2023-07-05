import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(example, data);
const allFilms = data.films;
const root = document.getElementById('root');
const header = document.createElement('header');
const imgHeader1 = document.createElement('img');
//imgHeader1.src = 'https://static.wikia.nocookie.net/studioghibli/images/d/d4/Studio_Ghibli.png/revision/latest/scale-to-width-down/439?cb=20200410033324&path-prefix=es';
//imgHeader1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Studio_Ghibli_wordmark.svg/1280px-Studio_Ghibli_wordmark.svg.png';
imgHeader1.src = 'https://upload.wikimedia.org/wikipedia/commons/8/86/Studio_Ghibli_portal_logo.png';
root.appendChild(header);
header.appendChild(imgHeader1);
//creación de vistas
const view1 = document.createElement('div');
const view2=document.createElement('div');
root.appendChild(view1);
root.appendChild(view2);
view1.style.display='block';
view2.style.display='none';
//al clickear una pelicula, muestra su tarjeta con toda la información en la segunda vista




// inicia vista 1

const titlePage = document.createElement('h1');
titlePage.innerText = 'Films';
view1.appendChild(titlePage);
//Se muestran todas las películas dentro de un contenedor
//Vamos a imprimir todas las películas y poster
const section = document.createElement('div');
section.className= 'films-section';
view1.appendChild(section);

for(let i=0; i < allFilms.length ; i++){
    //declaramos la seccion, poster y nombre
    const containerFilm = document.createElement('div');
    containerFilm.className = 'film-name';
    const posterContainer = document.createElement('div');
    posterContainer.className = 'poster-container';
    posterContainer.value = i;
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
//cierre vista 1
// inicio vista 2
let index=1;
const boton1=document.createElement('button');
boton1.innerText='Volver';
view2.appendChild(boton1);
const cardFilm = document.createElement('div');
cardFilm.className= 'card-film';
view2.appendChild(cardFilm);
const poster = document.createElement('img');
poster.src = allFilms[index].poster;
//poster.className='poster-class';
const allInformation=document.createElement('section');
const titleFilm = document.createElement('h1');
titleFilm.innerText = allFilms[0].title;
const year = document.createElement('h2');
year.innerText = allFilms[0].release_date;
//const infoFilm =document.createElement('p');
//infoFilm.innerText ='Director: '+allFilms[0].director+'\nProducer: '+allFilms[0].producer+'\nScore: '+allFilms[0].rt_score+'\n\n'+allFilms[0].description;
const infoDirector =document.createElement('p');
infoDirector.innerHTML =`<b>Director: </b>${allFilms[0].director}`;
const infoProducer=document.createElement('p');
infoProducer.innerHTML= `<b>Producer: </b>${allFilms[0].producer}`;
const infoScore=document.createElement('p');
infoScore.innerHTML= `<b>Score:  </b>${allFilms[0].rt_score}`;
const infoDescription=document.createElement('p');
infoDescription.innerText=allFilms[0].description;
cardFilm.appendChild(poster);
cardFilm.appendChild(allInformation);
allInformation.appendChild(titleFilm);
allInformation.appendChild(year);
//cardFilm.appendChild(infoFilm);
allInformation.appendChild(infoDirector);
allInformation.appendChild(infoProducer);
allInformation.appendChild(infoScore);
allInformation.appendChild(infoDescription);

const subTitle1=document.createElement('h2');
subTitle1.innerText='Characters';
const showCharacters=document.createElement('div');
showCharacters.className='show-characters';
view2.appendChild(subTitle1);
view2.appendChild(showCharacters);
const allCharacters=allFilms[0].people;
for (let i=0; i<allCharacters.length; i++){
    const characterCard=document.createElement('div');
    characterCard.className='character-card';
    const characterPhoto=document.createElement('div');
    characterPhoto.className='character-photo';
    const character=document.createElement('img');
    character.src=allCharacters[i].img;
    const characterInfo=document.createElement('p');
    characterInfo.innerText=allCharacters[i].name+'\nAge: '+allCharacters[i].age+'\nGender: '+allCharacters[i].gender;
    showCharacters.appendChild(characterCard);
    characterCard.appendChild(characterPhoto)
    characterCard.appendChild(characterInfo);
    characterPhoto.appendChild(character);
}
const subTitle2=document.createElement('h2');
subTitle2.innerText='Locations';
const showLocations=document.createElement('div');
showLocations.className='show-locations';
view2.appendChild(subTitle2);
view2.appendChild(showLocations);
const allLocations=allFilms[0].locations;
for(let i=0; i<allLocations.length; i++){
    const locationCard=document.createElement('div');
    locationCard.className='location-card';
    const locationPhoto=document.createElement('div');
    locationPhoto.className='location-photo';
    const location=document.createElement('img');
    location.src=allLocations[i].img;
    const nameLocation=document.createElement('p');
    nameLocation.innerHTML=allLocations[i].name;
    showLocations.appendChild(locationCard);
    locationCard.appendChild(locationPhoto);
    locationPhoto.appendChild(location);
    locationCard.appendChild(nameLocation);
}
const subTitle3=document.createElement('h2');
subTitle3.innerText='Vehicles';
const showVehicles=document.createElement('div');
showVehicles.className='show-vehicles';
view2.appendChild(subTitle3);
view2.appendChild(showVehicles);
const allVehicles=allFilms[0].vehicles;
for (let i=0; i<allVehicles.length; i++){
    const vehicleCard=document.createElement('div');
    vehicleCard.className='vehicle-card';
    const vehiclePhoto=document.createElement('div');
    vehiclePhoto.className='vehicle-photo';
    const vehicle=document.createElement('img');
    vehicle.src=allVehicles[i].img;
    const nameVehicle=document.createElement('p');
    nameVehicle.innerHTML=allVehicles[i].name;
    showVehicles.appendChild(vehicleCard);
    vehicleCard.appendChild(vehiclePhoto);
    vehiclePhoto.appendChild(vehicle);
    vehicleCard.appendChild(nameVehicle);
}
//cierre vista 2


const footer = document.createElement('footer');
footer.innerText = 'Creado por Brenda Aguilar y Cami Flores';
root.appendChild(footer);

const boton=document.querySelectorAll('.poster-container');
const container=boton;

boton.addEventListener('click',function(){
   // index=container.value;
    view1.style.display='none';
    view2.style.display='block';
});

boton1.addEventListener('click',function(){
    view1.style.display='block';
    view2.style.display='none';
});


// tercera prueba
// cuarta prueba