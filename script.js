var apiKey = "2cd9f99a30cc8c7748af4e8e53b9284c"
// var movieUrL = "https://api.themoviedb.org/3"
// var movieReviews = movieUrl + "/review/{review_id}?api_key="+apiKey


var apiUrl = "https://api.themoviedb.org/3/movie/76341?api_key=2cd9f99a30cc8c7748af4e8e53b9284c"
//Don't think we need reviews.  Just SEARCH and TRENDING
// var apiMovieReviews = "https://api.themoviedb.org/3/review/{review_id}?api_key=2cd9f99a30cc8c7748af4e8e53b9284c"
var apiMovieSearch = "https://api.themoviedb.org/3/search/movie?api_key=2cd9f99a30cc8c7748af4e8e53b9284c&language=en-US&page=1&include_adult=false"
var imagePath = "https://image.tmdb.org/t/p/w300"

// I think we should use trnding instead of new releases.
var apiTrending = "https://api.themoviedb.org/3/trending/all/day?api_key=2cd9f99a30cc8c7748af4e8e53b9284c&per_page=5"

//get elements by id

var posterInputEl = document.querySelector("#trendingMovies")

// Get Movies
//function getTrendingMovies(){

// Fetch Trending Movies 
//fetch(apiTrending)
//.then(function (response) {
//return response.json();
// })
//.then(function (data) {
//returns a response then needs to be converted to JSON
// console.log(data);
// }
// )}


//add event listener

//function displayTrendingMovies() {
//var posterIcon = document.createElement("img");
//posterIcon.setAttribute(
//"src", page[1].results[0].poster_path
//);
//posterInputEl.appendChild(posterIcon);
//}

async function getTrendingMovies(url) {
    var res = await fetch(url);
    var resData = await res.json();
    displayTrendingMovies(resData.results.slice(0, 4));
}

var displayTrendingMovies = function (movies) {
    console.log('MOVIES:', movies);
    posterInputEl.innerHTML = "";
    movies.forEach((movie) => {
        var { poster_path, title, overview } = movie;
        var moviePosterEl = document.createElement("div");
        moviePosterEl.classList = "basis-1/3 box-border w-90 p-4 border-4 rounded-[15px] "
        moviePosterEl.innerHTML = `
        <div class="basis-1/3">
        <img
            src='${imagePath}/${poster_path}'
            alt="${title}"
        />
        </div>
        <div class="basis-2/3">
            <h3>${title}</h3>
            <p>${overview}</p>
        </div>
        `;
        posterInputEl.appendChild(moviePosterEl)
    });
}

getTrendingMovies(apiTrending);
// displayTrendingMovies();

