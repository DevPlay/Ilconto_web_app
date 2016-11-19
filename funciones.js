			  	$(function(){
			firebase.database().ref('/posts/').on('child_added', function(data) {
			  console.log(data.val());
				var Accion = data.val().Accion;
				var HTML =  '<li class="box"><div id='+ Accion +'><h1>'+Accion+'</div></li>'
				$('.posts ul').append(HTML);
			});

				firebase.database().ref('/posts/').on('child_removed', function(data) {
				// Sacamos el li del HTML
				$('#'+data.key).remove();
			});
			
			});