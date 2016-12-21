$(document).ready(function(){
	// the base url for all api calls
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
	const nowPlayingUrl = apiBaseUrl + "movie/now_playing?api_key="+apiKey;

	$.getJSON(nowPlayingUrl, function(nowPlayingData){
		console.log(nowPlayingData);
		var nowPlayingHTML = '';
		for(let i=0; i< nowPlayingData.results.length; i++){
			var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path
			console.log(poster);
			nowPlayingHTML += '<div class="col-sm-3">';
				nowPlayingHTML += '<img src="' + poster+ '">'
				nowPlayingHTML += '</div>'; 
			}
				$('#movie-grid').html(nowPlayingHTML);
		



	})


})