
function crearPlanetas()
{
	var planeta = new Planeta();
	planeta.id = 'dakar';
	planeta.titulo = "THE OTHER DAKAR";
	planeta.tipos = [1, 2, 4];
	planeta.luz = [255, 255, 255];
	planeta.zona = 1;
	planeta.fondo = dakarImg;
	planeta.trailer = dakarTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765648/dakart_pg0lyv.mp4?n=3";
	planeta.fondoV = dakarFondoV;
	planeta.ponerObra = ponerDakar;
	planeta.tSinopsis = "<h1>THE OTHER DAKAR</h1>";
	planeta.sinopsis = 'Selly Raby Kane, Senegal, 2017<br>'+
	"VR/ 360° (7:35 min)<br>"+
	"<br>"+
			"En este filme onírico en 360º, seguimos a una niña en su travesía por <i>The other Dakar / La otra Dakar</i>, un lugar donde los artistas resguardan los prodigios secretos de la ciudad.<br>"+
			"<br>"+
"<i>The other Dakar</i> es producto de la confluencia de dos factores: accidente y proactividad, y su objetivo profundo es contribuir a un cambio en la imagen que esta ciudad subvalorada proyecta hacia sí misma, hacia África y hacia el mundo.<br>"+
"<br>"+
"El arte y la tecnología constituyen herramientas claves para transformar la experiencia cotidiana de Dakar. Combinadas con el diseño y la mitología, devienen fundamentales para revivir el sentido de comunidad en la Dakar urbana.<br><br><br>";
	planetas.push(planeta);	
	
	var planeta = new Planeta();
	planeta.id = 'jaguar';
	planeta.titulo = "DREAMS OF THE JAGUAR'S DAUGHTER";
	planeta.tipos = [1, 2];
	planeta.luz = [255, 255, 255];
	planeta.zona = 9;
	planeta.fondo = jaguarImg;
	planeta.trailer = jaguarTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765647/jaguart_gc2aq1.mp4?n=3";
	planeta.fondoV = jaguarFondoV;
	planeta.ponerObra = ponerJaguar;
	planeta.tSinopsis = "<h1>DREAMS OF THE JAGUAR'S DAUGHTER</h1>";
	planeta.sinopsis = 'Alfredo Salazar Caro, México- USA, 2019 <br>'+
			'VR/360° (8:00 min)<br>'+
			"<br>"+
			"<span class='infoEvento'><i>Conversatorio sobre documental y realidad virtual, Alfredo Salazar-Caro y Pierre Friquet, sábado 7 de noviembre, 4:00 p.m.</i></span> <br>"+
			"<br>"+
			"<i>Dreams of the Jaguar’s Daughter / Sueños de la hija del jaguar</i> es un documental surrealista en realidad virtual. Achik', el espíritu de una joven migrante, recuenta las memorias y los sueños de su arduo viaje al Norte desde la jungla Guatemalteca, pasando por el centro de México hasta llegar al desierto de Arizona. Cada capítulo está compuesto por documentación de la caravana migrante desde el año 2018: escaneos 3D, tomas de drones, video, video 360 y entrevistas.<br>"+
			"<br>"+
			"Para 22 MIDBO se presentará <i>Dreams of the Jaguar’s Daughter - Capítulo 1: Desraizados,</i> en formato video 360.<br><br><br>"
	planetas.push(planeta);	
	
	var planeta = new Planeta();
	planeta.id = 'dream';
	planeta.titulo = "DREAM";
	planeta.tipos = [1, 4];
	planeta.luz = [255, 255, 255];
	planeta.zona = 2;
	planeta.fondo = dreamImg;
	planeta.trailer = dreamTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765632/dreamt_y9z5zp.mp4?n=3";
	planeta.fondoV = dreamFondoV;
	planeta.ponerObra = ponerDream;
	planeta.tSinopsis = "<h1>DREAM</h1>"
	planeta.sinopsis = 	"Philippe Lambert, Canadá, 2018<br>"+
		"VR e Interactivo web (10 min)<br>"+
		"<br>"+
		'<i>Dream / Sueño</i> es un sistema de generación de experiencias en línea basado en los mecanismos singulares de los sueños. Pareciera que los sueños derivan de recuerdos personales, colectivos y genéticos. Nuestras experiencias, sentidos, intuiciones y emociones son filtradas por un sistema neurológico que luego nos presenta una realidad simulada, guiada por sus propias reglas y su propia lógica interna. En cierto modo, <i>Dream</i> es más una realidad alterna que una realidad virtual; es una breve inmersión en una dimensión paralela que nos exige que reconsideremos nuestra relación con nuestros estados de vigilia y de sueño.<br>'+
		"<br>"+
			'"Al crear <i>Dream</i>, quería trabajar con artistas visuales de la misma manera en la que colaboro con músicos. Pensé en los artistas como un conjunto de instrumentistas que podían improvisar sobre el tema de los sueños y crear imágenes para ser superpuestas y organizadas en una actuación en vivo conducida por el usuario. Los artistas podrían jugar con un conjunto único de herramientas digitales, generando recuerdos que luego podrían transformarse en otros al infinito. Me aproximé a los dibujos recopilados de las audiencias como si fueran grabaciones de campo o materiales sonoros encontrados, de modo que Dream sería menos una visión única y más una obra colectiva, accediendo a una base de datos de memorias tanto individuales como colectivas".<br><br><br>';
	planetas.push(planeta);
	
	var planeta = new Planeta();
	planeta.id = 'vertices';
	planeta.titulo = "VÉRTICES";
	planeta.tipos = [1, 3];
	planeta.luz = [255, 255, 255];
	planeta.zona = 3;
	planeta.fondo = verticesImg;
	planeta.trailer = verticesTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765633/verticest_jyisvk.mp4?n=3";
	planeta.fondoV = verticesFondoV;
	planeta.ponerObra = ponerVertices;
	planeta.tSinopsis = "<h1>VÉRTICES <span class='obraComisionada'><i>Obra comisionada</i> </span></h1>";
	planeta.sinopsis = "Ximena Alarcón <br>" +			
			'en colaboración con Pablo Caballero Blanco, Virginia Cubides Ceballos, Pablo Ibarra Gomez, Camila Montenegro Cárdenas, Daniela Pinilla Espinosa, Johann Romero Riveros y Heidy Sandoval Orjuela<br>'+
			'<br>'+
			'Colombia, 2020, Performances de Improvisación Telemática (40 min)<br>'+
			"<span class='infoEvento'><i>Sábado 31 de octubre, 4:00 p.m.</i></span> <br>"+
			"<span class='infoEvento'><i>Miércoles 4 de noviembre, 5:00 p.m.</i></span><br>"+
			"<br>" +
			"<span class='infoEvento'><i>Charla con el colectivo, 25 de noviembre 2:00 p.m.</i></span><br>"+
			"<br>" +
			"Por medio de coordenadas geográficas de la realidad de la vigilia y la realidad del sueño, Vértices crea constelaciones que recogen las cualidades vibratorias de los sueños de siete jóvenes artistas que participan en la pieza, para ser vistas en cualquier parte del planeta.<br>"+
			"<br>" +
			"<i>Vértices</i> recoge sensaciones, pensamientos, sentimientos e intuiciones, identificando espacios, sonidos, imágenes y personajes humanos y no humanos, con el fin de responder a las preguntas: ¿qué es lo que más importa en este momento?, ¿quiénes son mis guías?, ¿en qué dirección me muevo para resonar con más fuerza?<br>"+
			"<br>" +
			"A través de la improvisación con sonido e imagen, la resonancia e interacción entre los vértices estimula el movimiento flexible de las constelaciones, transformándose en su viaje y manteniendo la esencia de sus vértices.<br><br><br>"

	planetas.push(planeta);
	
	var planeta = new Planeta();
	planeta.id = 'promesa';
	planeta.titulo = "PROMESA";
	planeta.tipos = [2, 4];
	planeta.luz = [255, 255, 255];
	planeta.xoff = -width/3;
	planeta.yoff = height/3;
	planeta.zona = 4;
	planeta.fondo = promesaImg;
	planeta.trailer = promesaTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765604/parasomniast_nnvvni.mp4?n=3";
	planeta.fondoV = promesaFondoV;
	planeta.ponerObra = ponerPromesa;
	planeta.tSinopsis = "<h1>PROMESA</h1>"
	planeta.sinopsis = 'Julián Palacios Gechtman<br>'+
			'Italia, 2020, Videojuego (45 min)<br>'+
			"<br>"+
			"Recorre los sueños y los recuerdos que surgen en un diálogo entre un abuelo y su nieto.<br>"+
			"<br>"+
			"La evocación de las experiencias pasadas te sumergirá en una ensoñación, en un flujo de impresiones donde los recuerdos y las fantasías de ambos se mezclan en imágenes que son, al mismo tiempo, personales y compartidas.<i>Promesa</i> es un sugestivo viaje en primera persona que te llevará a lugares conocidos.<br>"+
			"<br>"+
			"<i>Durante la muestra se estarán obsequiando varias llaves del videojuego para que puedas tener la experiencia en su totalidad. ¡Participa en los concursos a través de las redes sociales! (@MIDBO_DOC Instagram). En la galería, se presenta una reseña audiovisual que introduce a la experiencia del videojuego.</i><br><br>"+
			"<i>Para adquirir el videojuego, consulta los siguientes lugares:</i><br><br>"+
			"<a target='_Blank' class='botonPromesa' href='https://store.steampowered.com/widget/1345370/'>Promesa Steam</a> <a target='_Blank' class='botonPromesa' href='https://itch.io/embed/223702?bg_color=202020&amp;fg_color=ffffff&amp;link_color=5f97cf&amp;border_color=000000'>Promesa Itch</a><br><br>";
	planetas.push(planeta);	
	
	var planeta = new Planeta();
	planeta.id = 'space';
	planeta.titulo = "SPACED OUT";
	planeta.tipos = [1, 2, 4];
	planeta.luz = [66, 180, 234];
	planeta.zona = 5;
	planeta.fondo = spaceImg;
	planeta.trailer = spaceTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765623/spaceoutt_kxh6fd.mp4?n=3";
	planeta.fondoV = spaceFondoV
	planeta.ponerObra = ponerSpaceout;
	planeta.tSinopsis = "<h1>SPACED OUT</h1>"
	planeta.sinopsis = 'Pyaré (Pierre Friquet), Francia, 2019<br>'+
			'VR/instalación subacuática  (10:00 min)<br>'+
			"<br>"+
			"<span class='infoEvento'><i>Conversatorio sobre documental y realidad virtual, Alfredo Salazar-Caro y Pierre Friquet, sábado 7 de noviembre, 4:00 p.m.</span></i><br>"+
			"<br>"+
			"<i>Spaced out / Cabeza en la luna</i> es una experiencia de realidad virtual bajo el agua que utiliza el revolucionario casco de realidad virtual a prueba de agua DiVR de Ballast Technologies. Es una invitación para que los visitantes floten en el agua mientras respiran con un snorkel, lo que da la ilusión de estar sumergidos en la superficie lunar.<br>"+
			"<br>"+
			"<i>Spaced out</i> transporta a los visitantes de la tierra a la luna, del agua al espacio y de la primera a la tercera persona, dejando atrás el cuerpo, para llegar a la luna y luego a su centro vacío.<br>"+
			"<br>"+
			"En <i>Spaced out</i>, los archivos de la NASA se modifican por medio de eliminación de fotogramas, recuperación de datos, distorsión, compresión brillante, edición incorrecta, reinterpretación y errores forzados. Los colores están en negativo: el espacio es blanco y las estrellas son negras. La superficie de la luna es azul brillante, lo que da a los colores de la tierra un aire extrañamente familiar.<br>"+
			"<br>"+
			"<i>Spaced out</i> confronta la ciencia y la imaginación, así como los archivos documentales y la creación original en 3D inspirada en el retrofuturismo. Su objetivo es crear tensión, combinando los dos polos opuestos de la representación de la realidad, utilizando el revolucionario casco de realidad virtual a prueba de agua de Ballast, DiVR.<br>"+
			"<br>"+
			"<i>*En la galería se presenta un video que muestra brevemente la experiencia de la pieza. Para conocer más detalles del proyecto, no te pierdas el conversatorio con Pyaré.</i><br><br><br>";
	planetas.push(planeta);
	
	var planeta = new Planeta();
	planeta.id = 'pandemic';
	planeta.titulo = "GRAPHOS AND ONIROCRACY";
	planeta.tipos = [2, 3];
	planeta.luz = [255, 255, 255];
	planeta.zona = 6;
	planeta.fondo = pandemicImg;
	planeta.trailer = pandemicTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765635/pandemict_mol5le.mp4?n=3";
	planeta.fondoV = pandemicFondoV;
	planeta.ponerObra = ponerPandemic;
	planeta.tSinopsis = "<h1>GRAPHOS AND ONIROCRACY</h1>"
	planeta.sinopsis = 'Pandemic Dreams Archive, Internacional, 2020<br>'+
			"Inteligencia artificial/Web<br>"+
			"<br>"+
			"<span class='infoEvento'><i>Charla de apertura, Archivo de sueños pandémicos, martes 27 de octubre 10:00 a.m. </i> </span><br>"+
			"<a href='https://www.midbo.co/onirocracia-pandemia-y-suenos-cyborgs/' target='_Blank'><i>* Cliquea aquí para leer un artículo sobre esta charla</i></a><br><br>"+
			"<br>"+
			"Durante la pandemia mundial del 2020, se crea la plataforma online Pandemic Dreams Archive con el propósito de reunir sueños generados durante este fenómeno histórico, respondiendo a varias interrogantes: ¿Con qué sueñan los terrícolas en la era de la pandemia mundial? ¿Cómo responde la red de inconscientes a la infestación de cuerpos? ¿Qué tienen que decir los espectros de los sueños sobre este momento planetario? En este sentido, se crea un archivo de sueños pandémicos para investigar sobre las redes inconscientes, el lenguaje de los sueños y la subjetividad humana.<br>"+
			"<br>"+
			"A partir de este archivo, se desarrollan diferentes experiencias tecnológicas (procesamiento del lenguaje natural, producción de <i>graphos</i> y creación de algoritmos).  Los estudios con grafos son la base para crear una cartografía de los sueños de la pandemia a partir de sus interconexiones semánticas. Hechos a partir de técnicas de procesamiento del lenguaje natural basadas en la teoría de grafos, son una forma de navegar los sueños a través de los sustantivos que evocan.<br>"+
			"<br>"+
			"Las visualizaciones nos ayudan a generar narrativas, análisis y delirios, según la proximidad de los signos, a partir de las conspiraciones que se generan entre las imágenes y sus grupos.<br>"+
			"<br>"+
			"Las cartografías nos han inspirado mucho. Los invitamos a que naveguen con nosotros a través de estas redes para que hagan su propio análisis, ciencia e inconsciencia de nuestros sueños.<br>"+
			"<br>"+
			"<a href='https://archivedream.wordpress.com/' target='_Blank'><i>* Si quieres consignar tus sueños en PDA, haz click aquí</i></a><br><br>";
	planetas.push(planeta);
	
	var planeta = new Planeta();
	planeta.id = 'n8';
	planeta.titulo = "N8";
	planeta.tipos = [2, 3];
	planeta.luz = [255, 220, 255];
	planeta.zona = 7;
	planeta.fondo = n8Img;
	planeta.trailer = n8Trailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765646/n8t_wg8vh4.mp4?n=3";
	planeta.fondoV = n8FondoV;
	planeta.ponerObra = ponerN8;
	planeta.tSinopsis = "<h1>N8 <span class='obraComisionada'><i>Obra comisionada</i></span></h1>";
	planeta.sinopsis = 'Esteban Rey en asocio con Pandemic Dreams Archive<br>'+
			'Colombia, 2020, Web/ Inteligencia Artificial <br>'+
			"<span class='infoEvento'><i>Malicia Artificial, charla sobre inteligencia artificial, documental y arte, jueves 5 de noviembre, 6:00 p.m.</i></span><br>"+
			"<br>"+
			"Una aplicación web dispone un motor de búsqueda inversa para obtener fragmentos de lo que fueron sueños pandémicos en diferentes partes del mundo. Las búsquedas a su vez crearán un nuevo archivo de objetos texto-textura, imágenes anémicas e inacabadas, resultantes del deterioro de una geometría dudosamente tridimensional.<br>"+
			"<br>"+
			'La pieza <i>N8</i> se produce en medio de la pandemia y en relación con ella, pero no se trata en absoluto de un trabajo coyuntural: parte de una pesquisa que comenzó hace 12 años cuestionando el formato de los sueños en relación a lo que podría llamarse “iconografías post-colombinas” en algunas expresiones de arquitectura colonial. El encuentro de esta búsqueda con el Pandemic Dreams Archive tal vez permita actualizar miradas, perspectivas y territorios en la red.<br><br>';
	planetas.push(planeta);
	
	var planeta = new Planeta();
	planeta.id = 'parasomnias';
	planeta.titulo = "PARASOMNIAS";
	planeta.tipos = [3, 4];
	planeta.luz = [255, 255, 255];
	planeta.zona = 8;
	planeta.fondo = parasomniasImg;
	planeta.trailer = parasomniasTrailer;
	planeta.trailerSrc = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765604/parasomniast_nnvvni.mp4?n=3";
	planeta.fondoV = parasomniasFondoV;
	planeta.ponerObra = ponerParasomnias;
	planeta.tSinopsis = "<h1>PARASOMNIAS</h1>";
	planeta.sinopsis = 'SensoLab, laboratorio de experimentación. Facultad de Ciencias Sociales, Pontificia Universidad Javeriana, Colombia, 2020 <br>'+
			"<span class='infoEvento'>Videomapping (25:00 min),<i> sábado 7 de noviembre 7:00 p.m.</i> </span><br>"+
			"<i>Evento virtual y presencial en Medellín, Zipaquirá, Bogotá</i><br>"+
			"<br>"+
			"La parasomnia es “un trastorno de la conducta durante el sueño, asociado con episodios breves o parciales de despertar, sin que se produzca una interrupción importante del sueño ni una alteración del nivel de vigilia diurno”. El carácter ambiguo de este trastorno nos sirve como inspiración para esta serie de intervenciones visuales que serán proyectadas en fachadas de edificaciones de varias ciudades del país, y que fueron realizadas a partir de un archivo de sueños y vigilias recogido por SensoLab durante la cuarentena. A través de este performance visual y de sus imágenes, proponemos reflexionar sobre las fronteras entre sueño y vigilia, entre pesadilla y realidad y entre lo onírico y lo vigílico.<br>"+
			"<br>"+
			"<i>*Este evento puede ser visto por los canales de transmisión de la muestra y en los lugares donde el colectivo proyectará.</i><br><br>";
	planetas.push(planeta);
	
	for (var j=0; j<nParticulas; j++)
	{		
		var nR1 = random(1, 10);
		var nR2 = random(1, 20);
						
		var particula = new Particula();
		particula.asteroide = (nR2>19) ? true : false;
		
		if(j < 20)
		{
			particula.z = 0;
		}
		
		if(nR1<5)
		{
			particula.rojo = random(120, 140);
			particula.verde = random(150, 200);
			particula.azul = random(140, 245);
		}
		else if(nR1>=5 && nR1<7)
		{
			particula.rojo = random(35, 50);
			particula.verde = random(70, 90);
			particula.azul = random(100, 140);
		}
		else
		{
			particula.rojo = random(200, 255);
			particula.verde = random(200, 255);
			particula.azul = random(200, 255);
		}	
		
		particulas.push(particula);	
	}
}