var apiKey = "2cd9f99a30cc8c7748af4e8e53b9284c"
var omdbKey = "6a8b6945"
var omdbDetails = " http://www.omdbapi.com/?i=tt3896198&apikey=6a8b6945"
var omdbTitles =  " https://omdbapi.com/?s=thor&page=1&apikey=6a8b6945"
var apiUrl = "https://api.themoviedb.org/3/movie/76341?api_key=2cd9f99a30cc8c7748af4e8e53b9284c"
var apiMovieSearch = "https://api.themoviedb.org/3/search/movie?api_key=2cd9f99a30cc8c7748af4e8e53b9284c&language=en-US&page=1&include_adult=false"
var imagePath = "https://image.tmdb.org/t/p/w300"
var movieSearch = document.querySelector("#movie-info")
var apiTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=2cd9f99a30cc8c7748af4e8e53b9284c"
var posterInputEl = document.querySelector("#trendingMovies")
var posterSearchEl = document.querySelector("#searchedMovie")

async function getTrendingMovies(url) {
    var res = await fetch(url);
    var resData = await res.json();
    displayTrendingMovies(resData.results.slice(0, 5));
}

var displayTrendingMovies = function (movies) {
    console.log('MOVIES:', movies);
    posterInputEl.innerHTML = "";
    movies.forEach((movie) => {
        var { poster_path, name, overview, original_title } = movie;
        var moviePosterEl = document.createElement("div");
        moviePosterEl.classList = "justify-center box-border w-auto p-4 border-4 rounded-[15px]"
        moviePosterEl.innerHTML = `
        <div class="flex justify-center box-border w-auto p-4 border-5 rounded-[15px] bg-white bg-opacity-50">
        <img 
            src='${imagePath}/${poster_path}'
            alt="${name}"
        />
        </div>
        <div>
            <h3>${name || original_title}</h3>
            <p>${overview}</p>
        </div>
        `;
        posterInputEl.appendChild(moviePosterEl)
    });
}

getTrendingMovies(apiTrending);
// displayTrendingMovies();

async function loadSearchedMovies(searchTerm){
    var searchUrl = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=6a8b6945`;
    var res = await fetch(searchUrl);
    var resData = await res.json();
    console.log(resData.Search);
 
}

function findSearchedMovies (searchTerm) {
var searchTerm = movieSearch.value.trim();
if (searchTerm.length > 0) {
    loadSearchedMovies(searchTerm)
    displaySearchedMovies(searchTerm)
}
}
