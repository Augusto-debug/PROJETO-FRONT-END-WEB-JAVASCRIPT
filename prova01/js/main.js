import { getPopularMovies, getGenres } from './req.js';

window.addEventListener('DOMContentLoaded', async function() {
    const moviesContainer = document.getElementById('movies-container');
    
    try {
        const genresData = await getGenres();
        const genresMap = {};
        genresData.genres.forEach(genre => {
            genresMap[genre.id] = genre.name;
        });
        const movies = await getPopularMovies();
        moviesContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie, genresMap);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Failed to load movies:', error);
        moviesContainer.innerHTML = `
            <div class="error">
                <p>Ocorreu um erro ao carregar os filmes.</p>
                <p>Detalhes: ${error.message}</p>
            </div>
        `;
    }
});

function createMovieCard(movie, genresMap) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    const posterPath = movie.poster_path;
    const posterUrl = posterPath 
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : 'images/no-poster.png';
    
    let genresHTML = '';
    if (movie.genre_ids && movie.genre_ids.length > 0) {
        genresHTML = movie.genre_ids
            .slice(0, 3) 
            .map(genreId => {
                const genreName = genresMap[genreId] || 'Unknown';
                return `<span class="genre">${genreName}</span>`;
            })
            .join('');
    }
    
    movieCard.innerHTML = `
        <img src="${posterUrl}" alt="${movie.title}" class="movie-poster">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-rating">
                <span>⭐ ${movie.vote_average.toFixed(1)}</span>
            </div>
            <div class="movie-genres">
                ${genresHTML}
            </div>
            <p class="movie-overview">${movie.overview || 'Sem descrição disponível.'}</p>
        </div>
    `;
    
    return movieCard;
}