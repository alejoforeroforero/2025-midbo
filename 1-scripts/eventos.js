var timeoutMov;
var estaAnimandoPalabras = false;

function windowResized() 
{
  	resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) 
{
	zoom +=event.delta;
	
	if(zoom > height*2)
	{
		zoom = height*2;
	}
	else if(zoom < -height*2)
	{
		zoom = -height*2;
	}
	
	//console.log(zoom);
}

function mouseMoved() 
{
	if(mostrarPalabras)
	{
		if(interactividad)
		{
			clearTimeout(timeoutMov)
			
			timeoutMov = setTimeout(function()
			{			
				document.body.removeChild(divPalabras);	
								
				var pRandom = Math.floor(random(0, palabras.length-1));			
				var palabra = palabras[pRandom];
					
				divPalabras = cE('div', document.body);
				divPalabras.style.display = "block";
				divPalabras.className = 'divPalabras';		
				divPalabras.innerHTML = palabra;
				divPalabras.style.left = mouseX - 10 + 'px';
				divPalabras.style.top = mouseY-25 + 'px';				
			}, 200);
		}
	}
	else
	{
		divPalabras.style.display = "none";
	}
}

function canvasOnClick()
{
		
}

document.addEventListener('click', function()
{
	if(interactividad)
	{		
		if(!videoExplosionEscogido)
		{			
			videoExplosionEscogido = true;			
			videoFondo.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/explosion3_mvwolk.mp4';
		}
		
		if(!videoFondoEnPlay)
		{
			videoFondoEnPlay = true;
			videoFondo.style.display = 'block';
			videoFondo.currentTime = 0;
			videoFondo.className = "aparecerFondo";
			videoFondo.play();
			videoFondo.loop = false;
		}
		
		window.setTimeout(function()
		{
			constelacionNumero = Math.floor(random(1, 8));		
			mostrandoConstelaciones = false;
			videoFondo.className = "desaparecerFondo";
			videoFondo.style.display = 'none';					
			audioPlanetas.play();
			mostrarConstelaciones = true;
			videoFondoEnPlay = false;
		}, 3400);
	}
});