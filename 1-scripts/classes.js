class Menu
{
	constructor()
	{
		this.id;
		this.titulo;
		this.elementoPadre;	
		this.div;
		this.audio;
	}
	
	pintar()
	{
		if(this.tipo == 0)
		{
			this.div = cE('figure', this.elementoPadre);
			this.div.className = 'botonImg';
		
		}
		else
		{
			this.div = cE('div', this.elementoPadre);
			this.div.className = 'botonM';
			this.div.innerHTML = this.titulo;			
		}
		
		var thisObj = this;
		
		this.div.addEventListener("mouseover", function()
		{
			thisObj.audio.currentTime = 0;
			thisObj.audio.play();
		});
		
/*		this.div.addEventListener("mouseout", function()
		{
			thisObj.audio.pause();
		});*/
		
		this.div.addEventListener("click", function()
		{
			divT1.style.display = 'none';
									
			if(menuS)
			{
				if(!menuS.tipo == 0)
				{
					menuS.div.className = 'botonM';
				}				
			}
			
			if(thisObj.tipo == 0)
			{						
		
				thisObj.div.className = 'botonImg';
			}
			else
			{
				thisObj.div.className = 'botonMS';
			}
		
			
			menuS = thisObj;
			
			if(menuS.tipo == 0)
			{
				interactividad = true;
				audioPlanetas.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769395/planetas_clsh8l.mp3?n=1";
				audioPlanetas.play();
				mostrarPalabras = true;
				nParticulas = 1300;
				yaCambioElAudio = false;
			}
			else
			{
				interactividad = false;
				
				if(!yaCambioElAudio)
				{
					yaCambioElAudio = true;
					audioPlanetas.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769395/planetas2_zlljex.mp3?n=1";
					audioPlanetas.play();
				}
				mostrarPalabras = false;	
				nParticulas = 540;
				mostrarConstelaciones = false;				
			}
			
			entranPlanetas = false;
			
			for(var i=0; i<planetas.length; i++)
			{
				var planeta = planetas[i];
				planeta.transformar = true;	
			}
		});
	}	
}

class Planeta
{
	constructor()
	{
		this.id;
		this.titulo = "hola";
		this.tipo = 0;
		this.x = 0;
		this.y = 0;
		this.trasladar = true;
		this.xoff = random(-windowWidth/3, windowWidth/3);
		this.yoff = random(-windowHeight, windowHeight);
		this.zoff = random(0, 600);
		this.velocidadY = random(0.003, 0.008);
		this.velocidadX = random(0.008, 0.01);
		this.velocidadZ = random(0.008, 0.01);
		this.zR = random(0.008, 0.02);
		this.xR = random(0.0002, 0.0008);
		this.yR = random(0.08, 1.3);
		this.z = 0;
		this.r = random(295, 300);
		this.luz;
		this.fondo;
		this.angulo = 0;
		this.luzEntrada = 0;
		this.transformar = false;
		this.habilitado = false;
		this.esParteDelMenu = false;
		this.ponerTextura = false;
		
		var thisObj = this;
		
		this.divTituloPlaneta = cE('div', document.body);
		this.divTituloPlaneta.className = 'divTituloPlaneta';
		//this.divTituloPlaneta.style.width = windowWidth/17 + 'px';
		this.divTituloPlaneta.style.display = "none";
		
		this.divCursor = cE('div', document.body);
		this.divCursor.innerHTML = this.tipo;
		this.divCursor.className = 'divCursor';
		this.divCursor.style.width = windowWidth/17 + 'px';
		this.divCursor.style.height = windowWidth/17 + 'px';
		this.divCursor.onmouseover = function()
		{
			//reproducirTrailer = true;
			thisObj.trasladar = false;
			planetaO = thisObj;
			
			if(!sinopsisOn)
			{
				thisObj.fondoV.volume(1);
				
				window.setTimeout(function()
				{
					thisObj.divTituloPlaneta.style.left = mouseX - thisObj.titulo.length*3 + 'px';
					thisObj.divTituloPlaneta.style.top = mouseY + 30 + 'px';
					thisObj.divTituloPlaneta.innerHTML = thisObj.titulo;
					thisObj.divTituloPlaneta.style.display = "block";
					
					window.setTimeout(function()
					{
						thisObj.divTituloPlaneta.style.display = "none";
					}, 3000);					
					
				}, 10);
			}			
			
			if(!videoCaida)
			{
				videoCaida = true; 
				videoExplosionEscogido = false;				
				var nR = Math.floor(random(2, 4)); 
				canvas.className = 'bg' + nR;				
				ponerNiebla();					
			}
		}
		this.divCursor.onmouseout = function()
		{
			canvas.className = "bg1";
			reproducirTrailer = false;
			thisObj.divTituloPlaneta.style.display = "none";					
			thisObj.fondoV.volume(0);
			thisObj.trasladar = true;
			quitarNiebla();			
		}		
		this.divCursor.addEventListener('click', function()
		{			
			if(!sinopsisOn)
			{
				proyectoS = thisObj;				
				ponerSinopsis();			
			}
		});
	}
	
	pintar()
	{
		var thisObj = this;
		
		if(this.trasladar)
		{			
			if(this.zona == 1)
			{				
				this.x = map(noise(this.xoff), 0, 1, -(width/2)/1.5, -(width/2)/3);
				this.y = map(noise(this.yoff), 0, 1, -(height/2)/1.5, -(height/2)/2.5);
			}
			else if(this.zona == 2)
			{
				this.x = map(noise(this.xoff), 0, 1, -(width/2)/3, (width/2)/3);
				this.y = map(noise(this.yoff), 0, 1, -(height/2)/1.5, -(height/2)/2.5);
			}
			else if(this.zona == 3)
			{
				this.x = map(noise(this.xoff), 0, 1, (width/2)/3, (width/2)/1.5);
				this.y = map(noise(this.yoff), 0, 1, -(height/2)/1.5, -(height/2)/2.5);
			}
			else if(this.zona == 4)
			{
				this.x = map(noise(this.xoff), 0, 1, -(width/2)/1.5, -(width/2)/3);
				this.y = map(noise(this.yoff), 0, 1, -(height/2)/3, (height/2)/4);
			}
			else if(this.zona == 5)
			{
				this.x = map(noise(this.xoff), 0, 1, -(width/2)/3, (width/2)/3);
				this.y = map(noise(this.yoff), 0, 1, -(height/2)/3, (height/2)/4);
			}
			else if(this.zona == 6)
			{
				this.x = map(noise(this.xoff), 0, 1, (width/2)/3, (width/2)/1.5);
				this.y = map(noise(this.yoff), 0, 1, -(height/2)/3, (height/2)/4);
			}
			else if(this.zona == 7)
			{
				this.x = map(noise(this.xoff), 0, 1, -(width/2)/1.5, -(width/2)/3);
				this.y = map(noise(this.yoff), 0, 1, (height/2)/4, (height/2)/1.2);
			}
			else if(this.zona == 8)
			{
				this.x = map(noise(this.xoff), 0, 1, -(width/2)/3, (width/2)/3);
				this.y = map(noise(this.yoff), 0, 1, (height/2)/4, (height/2)/1.2);
			}
			else if(this.zona == 9)
			{
				this.x = map(noise(this.xoff), 0, 1, (width/2)/3, (width/2)/1.5);
				this.y = map(noise(this.yoff), 0, 1, (height/2)/4, (height/2)/1.2);
			}
		}
		
		if(entranPlanetas)
		{
			if(!this.ponerTextura)
			{			
				if(this.r <= 8)
				{			
					this.r = 8;
					this.transformar = false;
					this.habilitado = false;
					this.ponerTextura = true;				
					
					nPlanetasOn++;
					
					if(nPlanetasOn > 8)
					{
						entranPlanetas = false;	
						interactividad = true;										
					/*	divM.style.display = 'block';
						divM.className = 'aparece';*/	
						//ponerExplosionIntro();					
					}
					
					if(nPlanetasOn == 1)
					{
						ponerExplosionIntro();
					}
					
				}
				else if(this.r > 8 && this.r <= 30)
				{
					this.r -= 0.1;
				}
				else
				{
					this.r -= 10;
				}
			}
		}
		
		if(this.transformar)
		{
			this.esParteDelMenu = false;
			
			for(var i=0; i<this.tipos.length; i++)
			{
				var tipo = this.tipos[i];
				
				if(tipo == menuS.tipo)
				{
					this.esParteDelMenu = true;
					break;
				}
			}
			
			if(this.esParteDelMenu)
			{				
				if(this.r >= width/35)
				{					
					this.r = width/35;
					this.transformar = false;
					this.habilitado = true;
					this.divCursor.style.left = width/2 + this.x - (this.r/2) + 'px';
					this.divCursor.style.top = height/2 + this.y - (this.r/2) + 'px';
					this.divCursor.innerHTML = this.tipo;
					
					if(!thisObj.fondoVOn)
					{
						thisObj.fondoV.loop();
						thisObj.fondoVOn = true;					
					}					
				}
				else
				{
					this.r += 1;
				}
			}
			else
			{
				
				thisObj.fondoV.pause();
				
				//texture(this.fondo);
				
				if(this.fondoVOn)
				{
					this.fondoVOn = false;
				}
				
				if(this.r <= 8)
				{
					this.r = 8;
					this.transformar = false;
					this.habilitado = false;
				}
				else
				{
					this.r -= 3;
				}
			}
		}
		
		if(this.habilitado)
		{
			this.divCursor.style.left = width/2 + this.x - (this.r) + 'px';
			this.divCursor.style.top = height/2 + this.y - (this.r) + 'px';
			this.divCursor.innerHTML = this.tipo;
			this.divCursor.style.display = 'block';
		}
		else
		{
			this.divCursor.style.display = 'none';
		}
		
		push();		
		
			if(this.habilitado)
			{		
				translate(this.x, this.y, 0);
			}
			else
			{
				translate(this.x, this.y, this.z);
			}			
			
			noStroke();
			
			if(this.ponerTextura)
			{
				if(this.fondoVOn)
				{
					//specularColor(17,15,125);
					this.luzEntrada+=2;
					//pointLight(255,220,200,this.luzEntrada,this.luzEntrada,this.luzEntrada);
					//specularMaterial(255,255,255);
					texture(this.fondoV);
				}
				else
				{
					texture(this.fondo);
				}
				
				ambientLight(this.luz);
			}
			else
			{
				this.luzEntrada+=2;
				
				//specularColor(17,15,125);
				pointLight(255,255,255,this.luzEntrada,this.luzEntrada,this.luzEntrada);
				specularMaterial(255,255,255);				
				texture(this.fondo);	
			}
			
			rotateX(this.angulo*this.xR);
			rotateY(this.angulo*this.yR);
			rotateZ(this.angulo*this.zR);		
			
			sphere(this.r);
			
			if(this.trasladar)
			{
				this.angulo +=0.3;
			}
	
		pop();	
		
		if(this.ponerTextura)
		{		
			if(!videoOn)
			{		
				this.xoff +=this.velocidadX;
				this.yoff +=this.velocidadY;
				this.zoff +=this.velocidadZ;	
			}
		}
	}
}

class Particula
{
	constructor()
	{
		this.x;
		this.y;
		this.r = random(0.7, 1.2);
		this.xoff = random(-windowWidth/2, windowWidth/2);
		this.yoff = random(-windowHeight/2, windowHeight/2);	
		this.zoff = random(-windowHeight/5, windowHeight/5);
		this.rojo = random(120, 140);
		this.verde = random(150, 200);
		this.azul = random(140, 245);
		this.velocidadY = random(0.000001, 0.00003);
		this.velocidadX = random(0.00008, 0.0003);
		this.velocidadZ = random(0.0001, 0.0003);
		this.numero = 0;
		this.z = random(-350, 350);
	}
	
	pintar()
	{
		this.x = map(noise(this.xoff), 0, 1, (-width/2), width/2);
		this.y = map(noise(this.yoff), 0, 1, (-height/2), height/2);
		//this.z = map(noise(this.zoff), 0, 1, (0-height/8), height/8);		
		
		if(this.asteroide)
		{			
			/*if(this.z > 800)
			{
				this.z = random(-10, 10);;	
			}*/
			
			var suma = random(0.01, 2);
			
			var suma = 1;
			
			this.z+= suma;
		}
				
	/*	push();	
		
			let c = color(this.rojo, this.verde, this.azul);
			fill(c);			
			noStroke();					
			translate(this.x, this.y, this.z);
			ellipse(this.x, this.y, this.r, this.r);	
			
			var nR = random(0, 12);
		
			if(nR > 11)
			{			
				fill(this.rojo + 100, this.verde + 100, this.azul);	
					
			}
			translate(0, 0, this.z);
			
			ellipse(this.x, this.y, this.r/1.5, this.r/1.5);				
		
		pop();	*/	
		
		push();		
		var c = color(this.rojo, this.verde, this.azul);
		fill(c);			
		noStroke();	
		translate(this.x, this.y, this.z);
		sphere(this.r);
		pop();		
		
		this.yoff +=this.velocidadY;
		this.xoff +=this.velocidadX;
		this.zoff +=this.velocidadZ;	
	}		
}

