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
			// console.log(nowPlayingData);
			for(let i=0; i< nowPlayingData.results.length; i++){
				var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path
				console.log(nowPlayingData);
				nowPlayingHTML += '<div class="col-xs-3">';
					nowPlayingHTML +='<div class="hovereffect">';
						nowPlayingHTML += '<img class="img-responsive" img src="' + poster+ '" alt="">';
							nowPlayingHTML += '<div class="overlay">';
								nowPlayingHTML += '<h2>'+nowPlayingData.results[i].title+'</h2>';
								nowPlayingHTML += '<a class="info" href="#">'+nowPlayingData.results[i].overview+'</a>';
							nowPlayingHTML += '</div>'; 
						nowPlayingHTML += '</div>'; 
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
					genreHTML +='<div class="hovereffect">';
						genreHTML += '<img class="img-responsive" img src="' + genrePoster+ '" alt="">';
						genreHTML += '<div class="overlay">';
							genreHTML += '<h2>'+genreData.results[i].title+'</h2>';
							genreHTML += '<a class="info" href="#">'+genreData.results[i].overview+'</a>';
						genreHTML += '</div>'; 
					genreHTML += '</div>'; 
				genreHTML += '</div>'; 
			}
			$('#movie-grid').html(genreHTML);
			
		});
	}
	getNowPlaying();
	$('#nowplaying').click(function(){
		getNowPlaying();			
	})
	$('#28').click(function(){
		getByGenre(28);
		$('#small-head').html("Genre: Action");
	})
	$('#12').click(function(){
		getByGenre(12);
		$('#small-head').html("Genre: Adventure");
	})
	$('#16').click(function(){
		getByGenre(16);
		$('#small-head').html("Genre: Animation");
	})
	$('#35').click(function(){
		getByGenre(35);
		$('#small-head').html("Genre: Comedy");
	})
	$('#80').click(function(){
		getByGenre(80);
		$('#small-head').html("Genre: Crime");
	})
	$('#99').click(function(){
		getByGenre(99);
		$('#small-head').html("Genre: Documentary");
	})
	$('#18').click(function(){
		getByGenre(18);
		$('#small-head').html("Genre: Drama");
	})
	$('#10751').click(function(){
		getByGenre(10751);
		$('#small-head').html("Genre: Family");
	})
	$('#14').click(function(){
		getByGenre(14);
		$('#small-head').html("Genre: Fantasy");
	})
	$('#36').click(function(){
		getByGenre(36);
		$('#small-head').html("Genre: History");
	})
	$('#27').click(function(){
		getByGenre(27);
		$('#small-head').html("Genre: Horror");
	})
	$('#10402').click(function(){
		getByGenre(10402);
		$('#small-head').html("Genre: Music");
	})
	$('#9648').click(function(){
		getByGenre(9648);
		$('#small-head').html("Genre: Mystery");
	})
	$('#10749').click(function(){
		getByGenre(10749);
		$('#small-head').html("Genre: Romance");
	})
	$('#878').click(function(){
		getByGenre(878);
		$('#small-head').html("Genre: Science Fiction");
	})
	$('#53').click(function(){
		getByGenre(53);
		$('#small-head').html("Genre: Thriller");
	})
	$('#10751').click(function(){
		getByGenre(10751);
		$('#small-head').html("Genre: War");
	})
	$('#37').click(function(){
		getByGenre(37);
		$('#small-head').html("Genre: Western");
	})
});
