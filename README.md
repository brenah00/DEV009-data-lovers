# Data Lovers

## Índice

* [1. Definición del producto](#1-definicion-del-producto)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)

***

## 1. Definición del producto

Desarrollo de un sitio web que reúne el trabajo del estudio Ghibli a través de los años, donde el usuario puede visualizar y navegar de forma simple entre todas los filmes realizados, el usuario puede acceder a una ficha informativa de cada filme. Además puede filtrar por Director o ordenar cronológicamente por año de lanzamiento. Adicionalmente, se pueden visualizar todos los personajes, los cuales pueden ser mostrados por género o bien, ser organizados alfabéticamente por nombre.

La solución fue desarrollada considerando que la data puede ser modificada, por ejemplo, si este año hay un nuevo estreno del director Hayao Miyazaki la data se actualiza, entonces se van a poder visualizar esos cambios sin necesidad de directamente modificar el código .

![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Historias de usuario

Para entender las necesidades de los usuarios, generamos una encuesta y dentro de lo que destacó fue:

- Al ingresar a un sitio web lo primero que llama la atención del usuario son las imágenes.
- Se desea ver un menú rápido y sencillo de entender.
- Mostrar la colección completa de Ghibli con un breve resumen de la película con vínculos para poder ver los personajes y materiales audiovisuales.
- Aplicación de filtros por director, orden cronológico y edad.
- A los usuarios les gustaría ver la información en el mosaico.

Se tomaron en cuenta las necesidades que podían ser cubiertas con lo que la data nos proporcionaba, por lo tanto, se establecieron las siguientes historias de usuario. 

### I. Yo usuaria quiero ver el listado de películas para conocer los posters y nombre de cada una.

**Criterios mínimos**

- Ver todos todos los posters de las películas

**Definición de terminado**

- Crear la función en JS que muestre todos los posters

- Que la página sea responsiva
	
### II. Yo usuaria quiero ver toda la información de la película que elija.

**Criterios mínimos**
- Ver toda la información (año de lanzamiento, nombre del director, sinopsis, personajes, locaciones y vehículos) de la película seleccionada

**Definición de terminado**

- Crear la función en JS que muestre la información de la película:  póster, información en orden (Nombre, año, director, productor, score, sinopsis)

- Crear función para mostrar personajes, locaciones y vehículos.

- Dar función al botón Films

- Agregar botón de volver, con su funcionalidad

- Que la página sea responsiva
	
### III. Yo usuaria quiero ver una sección de todos los personajes para visualizarlos con una foto. 

**Criterios mínimos**

- Ver todos los personajes y sus datos

**Definición de terminado**

- Crear la función en JS que muestre la información de información de los personajes(imagen, nombre, edad y género)

- Que la página sea responsiva

### IV. Yo como seguidora de un director en específico quiero ver las películas por director, así como poder ordenarlas por año de lanzamiento. De la misma manera quiero filtrar los personajes por género y especie, también ordenarlos por nombre.

**Criterios mínimos**

- Poder filtrar por nombre de Director

- Poder ordenar las películas por año de lanzamiento

- Poder filtrar los personajes por género

- Poder ordenar los personajes por nombre

- Poder filtrar los personajes por especie

**Definición de terminado**

- Crear la función en JS que filtre las películas por el nombre del Director seleccionado.

- Crear función de JS que ordene de manera descendente a las películas por año de lanzamiento

- Crear función de JS que ordene de manera ascendente a las películas por año de lanzamiento

- Función de JS que filtre por género

- Función de JS que ordene por edad de los personajes de forma ascendente y descendente.

- Que la página sea responsiva.

### V. Yo usuaria quiero saber el porcentaje personajes por género que aparecen en todas las películas

**Criterios mínimos**

- Ver el porcentaje del género seleccionado en todas las películas.

**Definición de terminado**

- Crear la función que nos devuelva un porcentaje dependiendo del criterio y valor especificado.

- Desarrollar la función para que los valores se visualicen en la página y en la gráfica. 

- Que la página sea responsiva


## 3. Diseño de la Interfaz de Usuario



### Prototipo de baja fidelidad

![Prototipo de baja fidelidad 1](../DEV009-data-lovers/src/img/HU1_PBF.jpg)

![Prototipo de baja fidelidad 2](../DEV009-data-lovers/src/img/HU2_PBF.jpg)

### Prototipo de alta fidelidad

![Prototipo de baja fidelidad 1](../DEV009-data-lovers/src/img/HU1_PAF.png)

![Prototipo de baja fidelidad 2](../DEV009-data-lovers/src/img/HU2_PAF.png)

![Prototipo de baja fidelidad 3](../DEV009-data-lovers/src/img/HU3_PAF.png)

![Prototipo de baja fidelidad 4](../DEV009-data-lovers/src/img/HU4_PAF.png)

![Prototipo de baja fidelidad 5](../DEV009-data-lovers/src/img/PAF_calculo_agregado.png)

### Testeos de usabilidad

Una vez desarrollado el prototipo de alta fidelidad, lo compartimos con nuestros respectivos squads para hacer el test de usabilidad.

Junto con la imagen, les pedimos que nos contestaran las siguientes preguntas:

- ¿Se cumple el objetivo para el usuario?

- Si tu respuesta es No, ¿Qué hace falta para que se cumpla el objetivo?

- ¿Qué agregarías para que la experiencia de usuario sea mejor?

Obtuvimos feedback que recopilamos en un documento, a modo de bitácora. Las sugerencias que recibimos apuntaban a aspectos de estilo y usabilidad, que consideramos para el desarrollo del sitio.
Así establecimos la relación entre criterios mínimos para cumplir con lo esperado por el usuario y la definición de terminado respecto del desarrollo, para poder cumplirlo.
Así fuimos trabajando cada historia de usuario por Sprint, con sus respectivos objetivos de desarrollo para cada ciclo.

### Implementación de la Interfaz de Usuario

#### Desktop
![Implementación Desktop](../DEV009-data-lovers/src/img/Desktop.png)
![Implementación Desktop 2](../DEV009-data-lovers/src/img/Desktop_personajes.png)

#### Tablet
![Implementación Desktop](../DEV009-data-lovers/src/img/Responsive_tablet.png)
![Implementación Desktop 2](../DEV009-data-lovers/src/img/Responsive_tablet_film.png)

#### Movil
![Implementación Desktop](../DEV009-data-lovers/src/img/Responsive_telefono.png)
