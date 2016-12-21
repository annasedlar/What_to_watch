$(document).ready(function(){
	// the base url for all api calls
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	const imageBaseUrl = 'http://image.tmdb.org/t/p/';
	const nowPlayingUrl = apiBaseUrl + "movie/now_playing?api_key="+apiKey;
	const genreBaseUrl = apiBaseUrl + "genre/movie/list?api_key="+apiKey;
	console.log(genreBaseUrl);


	function getNowPlaying(endPoint){
		$.getJSON(nowPlayingUrl, function(nowPlayingData){
			var nowPlayingHTML = '';
			console.log(nowPlayingData);
			for(let i=0; i< nowPlayingData.results.length; i++){
				var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path
				// console.log(poster);
				nowPlayingHTML += '<div class="col-xs-3">';
					nowPlayingHTML += '<img src="' + poster+ '">';
				nowPlayingHTML += '</div>'; 
			}
			$('#movie-grid').html(nowPlayingHTML);
		});
	}


	function getByGenre(genreID){
		const genreIDUrl = "https://api.themoviedb.org/3/genre/" + genreID + "/movies?api_key=" +apiKey + "&language=en-US&include_adult=false&sort_by=created_at.asc";
		console.log(genreIDUrl);
		var genreHTML = '';
		$.getJSON(genreIDUrl, function(genreData){
			// var genreHTML = '';
			console.log(genreData);

			for(let i=0; i < genreData.results.length; i++){
				var genrePoster = imageBaseUrl + 'w300' + genreData.results[i].poster_path;
				genreHTML += '<div class="col-xs-3">';
					genreHTML += '<img src="' + genrePoster+ '">';
				genreHTML += '</div>'; 
			}
			$('#movie-grid').html(genreHTML);
			$('#small-head').html("Genre: Action");
		});
		
		// console.log(genreHTML);
	}

// var genre_code = new RegExp(value, 'g');
// genre.search(genre_code);

	// var gmyGenres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "War", "Western", "Now Playing"];
	// var genreID = [];
	// function getGenre(whatGenre){
	// 	for(var i=0; i < myGenres.length; i++){
	// 		for(var j =0; j<genres.length; j++){
	// 			if(myGenres[i] == genres[j].name){
	// 				genreID.push(genres[j].id);
	// 			}
	// 		}
	// 	}
	// }
	//loop though genres.names. if user clicks on drop-down menu item with html == genres.name


// var genres=[
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     },
//     {
//       "id": 16,
//       "name": "Animation"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 99,
//       "name": "Documentary"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Family"
//     },
//     {
//       "id": 14,
//       "name": "Fantasy"
//     },
//     {
//       "id": 36,
//       "name": "History"
//     },
//     {
//       "id": 27,
//       "name": "Horror"
//     },
//     {
//       "id": 10402,
//       "name": "Music"
//     },
//     {
//       "id": 9648,
//       "name": "Mystery"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     },
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 10770,
//       "name": "TV Movie"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 10752,
//       "name": "War"
//     },
//     {
//       "id": 37,
//       "name": "Western"
//     }
//   ]

	getNowPlaying();


	$('#nowplaying').click(function(){
		getNowPlaying();			
	})
	$('#28').click(function(){
		getByGenre(28);
	})

});
