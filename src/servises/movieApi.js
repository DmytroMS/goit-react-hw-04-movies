const API_KEY = '1c92945d7b9e8de66cf2b53b0344c946';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config)
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}


// Fetch на популярные фильмы
export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
};


// Fetch  фильма по ID
export function fetchMovieDetails(movieID) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US`,
  );
}

// Запрос на актеров
export function fetchCast( movieID ) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`,
  );
}

// Fetch for reviews
export function fatchReviews(movieID) {
  return fetchWithErrorHandling(
     `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`,
  )
}


