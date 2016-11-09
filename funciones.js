			  	$(function(){
			firebase.database().ref('/posts/').on('child_added', function(data) {
			  console.log(data.val());
				var Accion = data.val().Accion;
			
				//console.log("Hay "+cantidad+" unidades del producto: "+producto+" que se encuentra en "+local);
				var HTML =  '<li class="prod">'+ Accion +' </li>'
				$('.box ul').append(HTML);
			});
			
			});