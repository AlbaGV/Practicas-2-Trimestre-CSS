function iniciar(){

	var elemento = document.getElementById('lienzo'); 
	lienzo = elemento.getContext('2d'); 

	//comienza la descripcion. Es llamado el primero antes de comenzar el trazo
	lienzo.beginPath(); 

	//TRAZO
	lienzo.arc(100,100,50,0,Math.PI*2, false);
	lienzo.stroke(); //dibuja una figura vacia
	
}window.addEventListener("load", iniciar, false);

var invervalo = setInterval(mover,1); //movimiento
	
	//posicion aleatoria arriba y abajo e izquierda
	var ejeXinicio = Math.floor((Math.random()*100)+20);
	var ejeYinicio = Math.floor((Math.random()*50)+20);
	var ejeX = ejeXinicio;
	var ejeY = ejeYinicio;
	var subiendo = false ;
	var izquierda = false;
 
function mover(){

		//Para que se vea nitido y moviendose
        lienzo.clearRect(0,0,1345,758); 
        lienzo.beginPath();

        //las cordenadas para el movimiento
        lienzo.arc(ejeX,ejeY,40,0,Math.PI*2);
        lienzo.stroke();

		if (!subiendo){ //Si baja
			if (ejeY < 719){ //el height - el radio del circulo
				ejeY+=1;//voy aumentando
			}else{
			document.getElementById('burbuja').play();//si llega al final suena
			subiendo = true;//cuando toca sube
			}
		}
		
		if (subiendo){ //Si sube 
			if (ejeY > 38){//para que llegue a la linea superior tiene que restar
				ejeY-=1;//decrementa 
			}else{
			document.getElementById('burbuja').play();//si toca suena
			subiendo = false;//cuando toca baja
			}
		}
		
		if (!izquierda){ //Si va a la derecha
			if (ejeX < 1306){//width - el radio
				ejeX+=1;
			}else{
			document.getElementById('burbuja').play();
			izquierda = true;
			}
		}
		
		if (izquierda){ //Si va a la izquierda
			if (ejeX > 38){//izquierda resta. Mientras mas le ponga mas cerca del centro se queda
				ejeX-=1;
			}else{
			document.getElementById('burbuja').play();
			izquierda = false;
			}
		}	 
}