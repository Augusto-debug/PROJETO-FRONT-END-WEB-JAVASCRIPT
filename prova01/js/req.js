const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGFlNDFkMTBiZDE5MDVjNTVlNjlhMzA2MzYxMjYzYSIsIm5iZiI6MTYzOTQ5OTc1NC4yNzYsInN1YiI6IjYxYjhjN2VhNmEzMDBiMDA5Nzc5NzJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d1KmdAyLRpsyhVEvYe2nJmt02FugwjYl13Whid5yOMQ';
const baseUrl = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`
  },
};

function getPopularMovies() {
  const url = `${baseUrl}/movie/popular?language=pt-BR&page=1`;
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      return data.results.slice(0, 10);
    })
    .catch((err) => {
      console.error("Error fetching popular movies:", err);
      throw err;
    });
}

function getGenres() {
  const url = `${baseUrl}/genre/movie/list?language=pt-BR`;
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("Error fetching genres:", err);
      throw err;
    });
}

export { getPopularMovies, getGenres };