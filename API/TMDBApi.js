// API/TMDBApi.js
// https://developers.themoviedb.org/3/lists/get-list-details
const API_TOKEN = "579e65bf91757e3ac866d2f15390ef4d";


// recherche 
export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
      .catch((error) => console.error(error))
}


// Recup lien image film
export function getImageFromApi(name){
  return 'https://image.tmdb.org/t/p/w300' + name ;
}

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
      .catch((error) => console.error(error));
}