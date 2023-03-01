/*
 * Funcion que permite escalar un elemento
 * a pantalla completa y pocisionarlo en 
 * el centro del documento.
 * 
 * autor: Pablo Elias Pineda
 */

function autoScale(id) {
	
	var d = document, E, iw = window.innerWidth,
		ih = window.innerHeight, X, Y, scale;
	
	if(typeof id == 'object') E = id;
	else E = d.getElementById(id);
	
	X = iw/2 - E.width/2; // centro en x
	Y = ih/2 - E.height/2;// centro en y
	
	if (iw/E.width > ih/E.height) {
		scale = ih/E.height;
	} else if (iw/E.width < ih/E.height) {
		scale = iw/E.width;	
	} else {
		scale = 1;
	}
	
	// acomodar en el centro y escalar a pantalla completa
	E.style.transform = 'translate('+X+'px,'+Y+'px) scale('+scale+')';
	document.body.width = iw;
	
	// para que se ejecute al cambiar el tamaño de la ventana
	window.onresize = function (event) {		
		autoScale(id);	
	}
	
}
