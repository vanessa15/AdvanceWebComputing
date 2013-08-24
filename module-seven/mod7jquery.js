$(document).ready(function(){
    $('#gora').click(function(){
        var search_moviename = $('#movie').val();
        if(search_moviename == ""){
            alert("Enter Movie Title");
        }
        
            $(function(){            
            $('#result').html("");
            $('#result').append('<div align = "center">'+'<font color = "white">'+'<em>'+'<strong>'+'<p class="text-info">Result for: ' +search_moviename+ '</p>'+'</strong>'+'</em>'+'</font>'+'</div>');
            var search = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
            $.ajax({
                url: search,
                data: {
                    q: search_moviename,
                    apiKey: 'hcrurhsttexasrgfm2y6yahm'
                },
                    dataType: 'jsonp',
                    success: showMovies
            });

            function showMovies(response){
                $('.content').html("");
				var count_it = 0;
				
                for(i=0;i<response.movies.length;i++){
                    var movie = response.movies[i];
                    var synop = movie.synopsis;  
					var casts = movie.abridged_cast;
					
					
					for(j=0;j<movie.abridged_cast.length;j++){
							
							var castss = movie.abridged_cast[j];
							
							 $('.casts').append('<div class = "cast_name">' + '<font color = "white">' +castss.name+'</font>'+'</div>');
							
					}
					

					
                $('.content').append(
				
				'<div class = "whole_beauty">'+
				'<div class="movie_holder">'+'<div class="thumb">'+ '<font color = "white">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</font>'+'</div>'+'</div>'+
				'<div class="synopsis">'+
				'<div class="title">'+'<p class="movie_title">' +'<font color = "white">'+movie.title+ '</font>'+'</p>'+'</div>'+
				'<p>'+'<font color = "white">'+synop+'</font>'+'</p>'+
				'<div class="year">'+'<font color = "white">'+'<em>'+'<p>Year: ' +movie.year+ '</p>'+'</em>'+'</font>'+
				'</div>'+'<font color = "white">'+'<em>'+
				'<div class = "for_cast">Casts: '+'<div class="casts">'+
		
				// foreach(casts as cast)
				// {
				// movie.abridged_cast+ 
				// }
				
				'</div>'+'</em>'+'</font>'+'</div>'+
				
				'</div>'+
				'</div>'+'<div style = "clear:both"></div>'
				
				);
				
                 
					// alert("test");
				  count_it = count_it + 1;
				 
				 }  
				 $('.content').append('</div>');
					// alert(count_it);
					$('#count').html('<div align = "center">'+'<em>'+'<font color = "white">'+"Number of Results: "+count_it+'</font>'+'</em>'+'</div>');
            }
            });
            $( '#movform' ).each(function(){
                this.reset();
                });
        });
});

