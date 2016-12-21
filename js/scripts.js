$(document).ready(function(){
	// the base url for all api calls
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
	const nowPlayingUrl = apiBaseUrl + "movie/now_playing?api_key="+apiKey;


	function getNowPlaying(endPoint){
		$.getJSON(nowPlayingUrl, function(nowPlayingData){
			var nowPlayingHTML = '';
			for(let i=0; i< nowPlayingData.results.length; i++){
				var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path
				console.log(poster);
				nowPlayingHTML += '<div class="col-xs-3">';
					nowPlayingHTML += '<img src="' + poster+ '">'
				nowPlayingHTML += '</div>'; 
			}
			$('#movie-grid').html(nowPlayingHTML);
		});
	}



	var genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "War", "Western", "Now Playing"];
	function getGenre(whatGenre){
		for(var i=0; i < genres.length; i++){

		}
	}

	getNowPlaying();


	$('#nowplaying').click(function(){
		getNowPlaying();			
	});
});