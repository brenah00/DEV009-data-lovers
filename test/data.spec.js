import {searchByGender, mergeCharacters, searchByDirector, sortByYearAsc, sortByYearDesc, sortByNameAsc, sortByNameDesc} from '../src/data.js';

const films = [ 
  {
    //"id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    //"description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://picfiles.alphacoders.com/114/114188.jpg",
    "release_date": "1991",
    //"rt_score": "100",
    "people": [
      {
        //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
        "name": "Aiko",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
        "gender": "Female",
        //"age": "10",
        //"eye_color": "Black",
        //"hair_color": "Grey brown",
        "specie": "Human"
      }
    ]
  },
  {
    //"id": "758bf02e-3122-46e0-884e-67cf83df1786",
    "title": "Ponyo on the Cliff by the Sea",
    //"description": "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    "director": "Hayao Miyazaki",
    //"producer": "Toshio Suzuki",
    //"poster": "https://image.tmdb.org/t/p/w780/yp8vEZflGynlEylxEesbYasc06i.jpg",
    "release_date": "2008",
    //"rt_score": "92",
    "people": [
      {
        //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        "name": "Sosuke",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
        "gender": "Male",
        //"age": "5",
        //"eye_color": "Brown",
        //"hair_color": "Brown",
        "specie": "Human"
      },
      {
        //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
        "name": "Brunhilde/Ponyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
        "gender": "Female",
        //"age": "5",
        //"eye_color": "Dark brown",
        //"hair_color": "Red",
        "specie": "Fish/Human"
      },
      {
        //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
        "name": "Granmammare",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
        "gender": "Female",
        //"age": "NA",
        //"eye_color": "Brown",
        //"hair_color": "Red",
        "specie": "Deity"
      },
    ]
  },
  {
    //"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    "title": "Pom Poko",
    //"description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://www.themoviedb.org/t/p/original/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
    "release_date": "1994",
    //"rt_score": "78",
    "people": [
      {
        //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
        "name": "Shoukichi",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
        "gender": "Male",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
        "name": "Okiyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
        "gender": "Female",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
        "name": "Zeniba",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
        "gender": "Female",
        //"age": "Elder",
        //"eye_color": "Dark brown",
        //"hair_color": "White",
        "specie": "Witch"
      }
    ]
  }
];
const isaoFilms = [
  {
    //"id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    //"description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://picfiles.alphacoders.com/114/114188.jpg",
    "release_date": "1991",
    //"rt_score": "100",
    "people": [
      {
        //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
        "name": "Aiko",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
        "gender": "Female",
        //"age": "10",
        //"eye_color": "Black",
        //"hair_color": "Grey brown",
        "specie": "Human"
      }
    ]
  },
  {
    //"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    "title": "Pom Poko",
    //"description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://www.themoviedb.org/t/p/original/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
    "release_date": "1994",
    //"rt_score": "78",
    "people": [
      {
        //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
        "name": "Shoukichi",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
        "gender": "Male",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
        "name": "Okiyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
        "gender": "Female",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
        "name": "Zeniba",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
        "gender": "Female",
        //"age": "Elder",
        //"eye_color": "Dark brown",
        //"hair_color": "White",
        "specie": "Witch"
      }
    ]
  }
];
const hayaoFilms = [ 
  {
    //"id": "758bf02e-3122-46e0-884e-67cf83df1786",
    "title": "Ponyo on the Cliff by the Sea",
    //"description": "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    "director": "Hayao Miyazaki",
    //"producer": "Toshio Suzuki",
    //"poster": "https://image.tmdb.org/t/p/w780/yp8vEZflGynlEylxEesbYasc06i.jpg",
    "release_date": "2008",
    //"rt_score": "92",
    "people": [
      {
        //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        "name": "Sosuke",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
        "gender": "Male",
        //"age": "5",
        //"eye_color": "Brown",
        //"hair_color": "Brown",
        "specie": "Human"
      },
      {
        //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
        "name": "Brunhilde/Ponyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
        "gender": "Female",
        //"age": "5",
        //"eye_color": "Dark brown",
        //"hair_color": "Red",
        "specie": "Fish/Human"
      },
      {
        //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
        "name": "Granmammare",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
        "gender": "Female",
        //"age": "NA",
        //"eye_color": "Brown",
        //"hair_color": "Red",
        "specie": "Deity"
      },
    ]
  }
];
const allCharacters = [
  {
    //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
    "name": "Aiko",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
    "gender": "Female",
    //"age": "10",
    //"eye_color": "Black",
    //"hair_color": "Grey brown",
    "specie": "Human"
  },
  {
    //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
    "name": "Sosuke",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
    "gender": "Male",
    //"age": "5",
    //"eye_color": "Brown",
    //"hair_color": "Brown",
    "specie": "Human"
  },
  {
    //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
    "name": "Brunhilde/Ponyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
    "gender": "Female",
    //"age": "5",
    //"eye_color": "Dark brown",
    //"hair_color": "Red",
    "specie": "Fish/Human"
  },
  {
    //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
    "name": "Granmammare",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
    "gender": "Female",
    //"age": "NA",
    //"eye_color": "Brown",
    //"hair_color": "Red",
    "specie": "Deity"
  },
  {
    //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
    "name": "Shoukichi",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
    "gender": "Male",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  },
  {
    //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
    "name": "Okiyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
    "gender": "Female",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  },
  {
    //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
    "name": "Zeniba",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
    "gender": "Female",
    //"age": "Elder",
    //"eye_color": "Dark brown",
    //"hair_color": "White",
    "specie": "Witch"
  }
];
const maleCharacters = [
  {
    //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
    "name": "Sosuke",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
    "gender": "Male",
    //"age": "5",
    //"eye_color": "Brown",
    //"hair_color": "Brown",
    "specie": "Human"
  },
  {
    //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
    "name": "Shoukichi",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
    "gender": "Male",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  }
];

const orderNamesAToZ = [
  {
    //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
    "name": "Aiko",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
    "gender": "Female",
    //"age": "10",
    //"eye_color": "Black",
    //"hair_color": "Grey brown",
    "specie": "Human"
  },
  {
    //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
    "name": "Brunhilde/Ponyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
    "gender": "Female",
    //"age": "5",
    //"eye_color": "Dark brown",
    //"hair_color": "Red",
    "specie": "Fish/Human"
  },
  {
    //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
    "name": "Granmammare",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
    "gender": "Female",
    //"age": "NA",
    //"eye_color": "Brown",
    //"hair_color": "Red",
    "specie": "Deity"
  },
  {
    //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
    "name": "Okiyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
    "gender": "Female",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  },
  {
    //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
    "name": "Shoukichi",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
    "gender": "Male",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  },
  {
    //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
    "name": "Sosuke",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
    "gender": "Male",
    //"age": "5",
    //"eye_color": "Brown",
    //"hair_color": "Brown",
    "specie": "Human"
  },
  {
    //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
    "name": "Zeniba",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
    "gender": "Female",
    //"age": "Elder",
    //"eye_color": "Dark brown",
    //"hair_color": "White",
    "specie": "Witch"
  }
];
const femaleCharacters = [
  {
    //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
    "name": "Aiko",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
    "gender": "Female",
    //"age": "10",
    //"eye_color": "Black",
    //"hair_color": "Grey brown",
    "specie": "Human"
  },
  {
    //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
    "name": "Brunhilde/Ponyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
    "gender": "Female",
    //"age": "5",
    //"eye_color": "Dark brown",
    //"hair_color": "Red",
    "specie": "Fish/Human"
  },
  {
    //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
    "name": "Granmammare",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
    "gender": "Female",
    //"age": "NA",
    //"eye_color": "Brown",
    //"hair_color": "Red",
    "specie": "Deity"
  },
  {
    //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
    "name": "Okiyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
    "gender": "Female",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  },
  {
    //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
    "name": "Zeniba",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
    "gender": "Female",
    //"age": "Elder",
    //"eye_color": "Dark brown",
    //"hair_color": "White",
    "specie": "Witch"
  }
];
const orderNamesZToA = [
  {
    //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
    "name": "Zeniba",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
    "gender": "Female",
    //"age": "Elder",
    //"eye_color": "Dark brown",
    //"hair_color": "White",
    "specie": "Witch"
  },
  {
    //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
    "name": "Sosuke",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
    "gender": "Male",
    //"age": "5",
    //"eye_color": "Brown",
    //"hair_color": "Brown",
    "specie": "Human"
  },
  {
    //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
    "name": "Shoukichi",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
    "gender": "Male",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  },
  {
    //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
    "name": "Okiyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
    "gender": "Female",
    //"age": "Adult",
    //"eye_color": "Black",
    //"hair_color": "Brown",
    "specie": "Raccoon Dog"
  },
  {
    //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
    "name": "Granmammare",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
    "gender": "Female",
    //"age": "NA",
    //"eye_color": "Brown",
    //"hair_color": "Red",
    "specie": "Deity"
  },
  {
    //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
    "name": "Brunhilde/Ponyo",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
    "gender": "Female",
    //"age": "5",
    //"eye_color": "Dark brown",
    //"hair_color": "Red",
    "specie": "Fish/Human"
  },
  {
    //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
    "name": "Aiko",
    //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
    "gender": "Female",
    //"age": "10",
    //"eye_color": "Black",
    //"hair_color": "Grey brown",
    "specie": "Human"
  }
];
const orderedByYearAsc = [
  {
    //"id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    //"description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://picfiles.alphacoders.com/114/114188.jpg",
    "release_date": "1991",
    //"rt_score": "100",
    "people": [
      {
        //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
        "name": "Aiko",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
        "gender": "Female",
        //"age": "10",
        //"eye_color": "Black",
        //"hair_color": "Grey brown",
        "specie": "Human"
      }
    ]
  },
  {
    //"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    "title": "Pom Poko",
    //"description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://www.themoviedb.org/t/p/original/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
    "release_date": "1994",
    //"rt_score": "78",
    "people": [
      {
        //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
        "name": "Shoukichi",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
        "gender": "Male",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
        "name": "Okiyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
        "gender": "Female",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
        "name": "Zeniba",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
        "gender": "Female",
        //"age": "Elder",
        //"eye_color": "Dark brown",
        //"hair_color": "White",
        "specie": "Witch"
      }
    ]
  },
  {
    //"id": "758bf02e-3122-46e0-884e-67cf83df1786",
    "title": "Ponyo on the Cliff by the Sea",
    //"description": "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    "director": "Hayao Miyazaki",
    //"producer": "Toshio Suzuki",
    //"poster": "https://image.tmdb.org/t/p/w780/yp8vEZflGynlEylxEesbYasc06i.jpg",
    "release_date": "2008",
    //"rt_score": "92",
    "people": [
      {
        //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        "name": "Sosuke",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
        "gender": "Male",
        //"age": "5",
        //"eye_color": "Brown",
        //"hair_color": "Brown",
        "specie": "Human"
      },
      {
        //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
        "name": "Brunhilde/Ponyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
        "gender": "Female",
        //"age": "5",
        //"eye_color": "Dark brown",
        //"hair_color": "Red",
        "specie": "Fish/Human"
      },
      {
        //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
        "name": "Granmammare",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
        "gender": "Female",
        //"age": "NA",
        //"eye_color": "Brown",
        //"hair_color": "Red",
        "specie": "Deity"
      },
    ]
  }
];
const orderedByYearDesc = [ 
  {
    //"id": "758bf02e-3122-46e0-884e-67cf83df1786",
    "title": "Ponyo on the Cliff by the Sea",
    //"description": "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    "director": "Hayao Miyazaki",
    //"producer": "Toshio Suzuki",
    //"poster": "https://image.tmdb.org/t/p/w780/yp8vEZflGynlEylxEesbYasc06i.jpg",
    "release_date": "2008",
    //"rt_score": "92",
    "people": [
      {
        //"id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        "name": "Sosuke",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
        "gender": "Male",
        //"age": "5",
        //"eye_color": "Brown",
        //"hair_color": "Brown",
        "specie": "Human"
      },
      {
        //"id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
        "name": "Brunhilde/Ponyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
        "gender": "Female",
        //"age": "5",
        //"eye_color": "Dark brown",
        //"hair_color": "Red",
        "specie": "Fish/Human"
      },
      {
        //"id": "942efc9a-8d02-4643-aa3f-134429a23684",
        "name": "Granmammare",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
        "gender": "Female",
        //"age": "NA",
        //"eye_color": "Brown",
        //"hair_color": "Red",
        "specie": "Deity"
      },
    ]
  },
  {
    //"id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    "title": "Pom Poko",
    //"description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://www.themoviedb.org/t/p/original/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
    "release_date": "1994",
    //"rt_score": "78",
    "people": [
      {
        //"id": "575d6943-f9da-445e-8e77-e118c3924a1d",
        "name": "Shoukichi",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
        "gender": "Male",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
        "name": "Okiyo",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
        "gender": "Female",
        //"age": "Adult",
        //"eye_color": "Black",
        //"hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        //"id": "d9aceca5-beb9-4b2a-85ba-fc17d33750f8",
        "name": "Zeniba",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png",
        "gender": "Female",
        //"age": "Elder",
        //"eye_color": "Dark brown",
        //"hair_color": "White",
        "specie": "Witch"
      }
    ]
  },
  {
    //"id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    //"description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director": "Isao Takahata",
    //"producer": "Toshio Suzuki",
    //"poster": "https://picfiles.alphacoders.com/114/114188.jpg",
    "release_date": "1991",
    //"rt_score": "100",
    "people": [
      {
        //"id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
        "name": "Aiko",
        //"img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
        "gender": "Female",
        //"age": "10",
        //"eye_color": "Black",
        //"hair_color": "Grey brown",
        "specie": "Human"
      }
    ]
  },
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
    expect(sortByNameDesc(allCharacters)).toEqual(orderNamesZToA);
  });
  it('ordena los personajes por nombre de Z hacia A', ()=>{
    expect(sortByNameAsc(orderNamesAToZ)).toEqual(orderNamesZToA);
  });
  /*it('ordena los personajes por nombre de Z hacia A ', ()=>{
    expect(sortByNameDesc(allCharacters)).toEqual(orderNamesZToA);
  });
  /*
  it('ordena los personajes por nombre de Z hacia A ', ()=>{
    expect(sortByNameDesc(orderNamesAToZ)).toEqual(orderNamesZToA);
  });*/
});

/*
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
  */
/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
