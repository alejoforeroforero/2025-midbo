var particulas = [];
var planetas = [];
var cordenadas = [];
var palabras = ['Proyecciones', 'Visiones', 'Ilusiones', 'Fantasía', 'Inmaterialidad', 'Imaginación', 'Inconsciente', 'Posibilidad', 'Efímero', 'Irracional', 'Epifanía', 'Imposible', 'Revelación ', ' Ilusorio ', ' Iluminación ', ' Intangible ', ' Atemporal ', ' Irreal ', ' Enigma ', ' Recuerdos ', ' Fragmentos ', ' Memoria ', ' Reflejo ', ' Abstracción ', ' Paradójico ', 'Ensoñación', 'Onírico', 'Ensueño', 'Premoniciones', 'Realidades ocultas', 'Mensajes divinos', 'Miedos', 'Deseos', 'Alegrías', 'Misterios por resolver', 'Acertijos', 'Símbolos ', ' Pesadillas ', ' Lucidez ', ' Decisión ', ' Magia ', ' Sorpresa ', ' Otros lenguajes ', ' Muerte ', ' Renovación ', ' Vacío infinito ', ' Impotente desnudez ', ' Turbulenta microscopía ', 'Abundancia desproporcionada', 'Sombra negra', 'Somnolencia vivida', 'Despertar dormido', 'Pantalla real', 'Reunión aleatoria', 'Tiempos inacabados', 'Resonancia onírica', 'Atemporal', 'Proyección Collage', 'Cut-up ', 'Suspensión ', 'Sinestesia ', 'Lenguaje agramatical ', 'Heterotopía ', 'Ucronía ', 'Patafísica ', 'Tejido ', ' Palimpsesto ', ' Acuático ', ' Sutil sustancia ', ' La noche es el sueño del día ', ' El día es el sueño de la noche ', 'Telar de tus sombras ', 'Clave del deseo ', ' Alquimia ', 'Obturador del revelado', 'Razón amante', 'Enigmas de la cámara oscura', 'Película onírica', 'Símbolos', 'Reflejos', 'Ecos', 'Ideogramas', 'Caja negra de los destinos', 'Oscuridad', 'Volar', 'Jung', 'Despertar', 'Arquetipos', 'Artemidoro', 'Asclepio', 'Cerebro límbico', 'Flujo de consciencia', 'Vibraciones inconscientes', 'Conexión Universal', 'Estado alterado ', ' Trascendentales ', ' Reveladores ', ' Guías ', ' Espiritualidad ', ' Manera de autoconocerse ', 'Presentir la vida ', ' Libertad ', 'Mundo onírico ', 'Soñar para despertar ', 'Comunicación inconsciente ', 'Planos astrales ', 'Soñar despierto ', ' Onironauta ', ' Ilusorio ', ' Sueño profético ', ' Sonámbulo ', 'Delirio ', 'Suspiro maldito ', 'Usurpador arrebato ', 'Enano eterno ', ' Ñoño que aprende ', 'Oráculo iracundo ', ' Anhelo de despertar ', 'Pasión vivida ', ' Recoger lo sembrado ', ' Vivir conscientemente ', 'Entrega absoluta', 'Abrir los ojos ', 'Estar presente '];

var listaPaises = ["CO", "BO", "BR", "CL", "AR", "CR", "CU", "EC", "SV", "GY", "GT", "HT", "HN", "JM", "MX", "NI", "PY", "PA", "PE", "PR", "DO", "SR", "UY", "VE", "VC"];

var animar = false;
var interactividad = false;
var menuS = null;
var menuInfoS = null;
var proyectoS = null;
var planetaO = null;

var vaAObra = false;
var entranPlanetas = true;
var mostrandoDivX = false;
var videoCaida = false;
var reproducirTrailer = false;
var videoOn = false;
var sinopsisOn = false;
var sinopsisArriba = true;
var videoExplosionEscogido = true;
var videoFondoEnPlay = false;
var mostrandoConstelaciones = false;
var mostrarConstelaciones = false;
var mostrarPalabras = false;
var ponerParticulas = false;
var creditosOn = false;
var yaCreoDivEntrar = false;
var yaEspichoDivEntrar = false;
var hayDivTextos = false;
var terminoLaDescarga = false;
var audioTerremotoEstaSonando = false;
var aceptaWebGl;
var audioOn = true;
var yaCambioElAudio = false;
var yaEntro = false;
var enVivo = true;
var terminoPorcentaje = false;

var inconsolata;
var textoSinopsis;
var verBoton;
var fuentWebGl;

var divPopupDescarga;
var canvasGeneral;
var canvasLineas;
var divEntrar;
var divPalabras;
var divObras;
var divM;
var divX;
var divT1;
var divLogoIdartes;
var videoFondo;
var videoTrailerC;
var videoTrailer;
var divSinopsis;
var divMidbo;
var infoCreditos;
var divTextos;
var audioOnOff;
var imgAudio;
var divVivo;

var nParticulas = 1300;
var nPlanetasOn = 0;
var zoom = 0;
var camZ = 0;
var angle = 0;
var nCaida = 0;
var contadorPalabras = 0;
var contadorIntro = 0;
var constelacionNumero = 0;

var intervaloIntro;
var tiempoIntervaloIntro = 6000;

var parrafos = [];

parrafos[0] = "Previsión Colectiva <br>" + "Presenta";

parrafos[0] = 'Sueños distantes';

parrafos[1] = '<i>Sueños distantes</i> aborda lo onírico como materia intangible de la experiencia humana desde el quehacer documental.';

parrafos[2] = '¿Es posible documentar los sueños? ¿Hay lugar para la imaginación y la especulación en la práctica documental que busca abordar esta realidad alterna?';

parrafos[3] = 'Las visiones oníricas ponen a prueba el ejercicio documental, llevándolo a un lugar de frontera donde lo real y lo imaginario se encuentran, tensionan y potencian,  desafiando sus modos de producción de imágenes de "lo real".';

parrafos[4] = 'La exposición propone un recorrido de obras que abordan el mundo onírico desde lugares, métodos, preguntas y procesos de creación diversos, que a su vez, enriquecen y cuestionan el quehacer cinematográfico documental. Son obras con diferentes expresiones digitales como performance telemático, inteligencia artificial, arte generativo, video 360°, modelado 3D, visualización de datos y  videojuego.';

parrafos[5] = '<i>Sueños distantes</i> pone en diálogo visiones oníricas de distintas culturas, en un momento en el que la máquina de los sueños de la humanidad está en efervescencia, dándole cuerpo a un universo que abre otras maneras de habitar el presente y proyectar futuros posibles.';

var parrafosC = [];

parrafosC[0] = 'Sueños Distantes'

parrafosC[1] = '<i>Sueños distantes</i> aborda lo onírico como materia intangible de la experiencia humana desde el quehacer documental.'

parrafosC[2] = '¿Es posible documentar los sueños? ¿Hay lugar para la imaginación y la especulación en la práctica documental que busca abordar esta realidad alterna?'

parrafosC[3] = 'Las visiones oníricas ponen a prueba el ejercicio documental, llevándolo a un lugar de frontera donde lo real y lo imaginario se encuentran, tensionan y potencian,  desafiando sus modos de producción de imágenes de "lo real".';

parrafosC[4] = 'Los sueños han sido instrumentos de previsión, sanación, conexión espiritual y transmisión de conocimiento universal para muchas culturas a lo largo de la historia de la humanidad. Este año, en medio de circunstancias inéditas provocadas por una pandemia global, lo onírico toma relevancia, e imágenes que parecen soñadas empezaron a hacer parte de nuestra cotidianidad.';

parrafosC[5] = 'En este contexto, <i>Sueños Distantes</i> propone un recorrido de obras que abordan el mundo onírico desde lugares, métodos, preguntas y procesos de creación diversos, que a su vez, enriquecen y cuestionan el quehacer cinematográfico documental. Son obras con diferentes expresiones digitales como performance telemático, inteligencia artificial, arte generativo, video 360°, modelado 3D, visualización de datos y videojuego.';

parrafosC[6] = '<i>Vértices</i>, obra comisionada de Ximena Alarcón, encuentra en el sueño una fuente de conocimiento individual y colectivo capaz de llevar al estado de vigilia imágenes que dejan entrever emociones y vibraciones sobre lo que se está viviendo. <i>N8</i>, obra comisionada de Esteban Rey, interroga la manera fragmentaria en la que los sueños se filtran en la memoria y el uso de la imaginación y el collage para reconstruirlos, conservando algo de su naturaleza efímera.';

parrafosC[7] = 'Dentro de las obras internacionales, <i>Dream (Sueño)</i> explora el sueño como visión psicodélica e invita a comprenderlo como una realidad alterna. <i>The other Dakar (El otro Dakar)</i>, encuentra en lo onírico una dimensión donde mitología y realidad cohabitan y enriquecen la cotidianidad. <i>Sueños de la hija del jaguar </i> recurre a la imagen onírica como una tecnología antigua de visión chamánica para percibir un mundo fuertemente conectado con los ancestros. <i>Promesa</i> encuentra en el sueño un modo en el que la memoria tiene la posibilidad de actualizarse en el presente. Por último, <i>Pandemic Dreams Archive </i> recurre al archivo cibernético de sueños como una fuente de conocimiento especulativo que indaga la subjetividad humana y su relación con el entorno.';

parrafosC[8] = '<i>Sueños distantes</i> pone en diálogo visiones oníricas de distintas culturas, en un momento en el que la máquina de los sueños de la humanidad está en efervescencia, dándole cuerpo a un universo que abre otras maneras de habitar el presente y proyectar futuros posibles.';

/*parrafosC[9] = '<i><b>Sueños distantes</b></i> es una curaduría de Previsión Colectiva para la sección Documental Expandido de la Muestra Internacional Documental de Bogotá, organizada por ALADOS, la Fundación Laboratorio Accionar y la Universidad Nacional de Colombia, gracias al apoyo del Ministerio de Cultura, la Galería Santa Fe, el Instituto Distrital de las Artes - IDARTES y el Goethe Institut.';*/

parrafosC[9] = '<br><br>';


/**********************************/

var divInfo;

function construirPc() {
    var pc = (esCelular.cualquiera()) ? false : true;

    if (pc) {
        construirIntro();
        construirContenedores();
    } else {
        construirTablets();
        interactividad = false;
        mostrarPalabras = false;
    }
}

function construirTablets() {
    var divDescargando = document.getElementById("descargando");
    divDescargando.style.display = "none";

    canvas.style.display = "none";

    divPalabras = cE("div", document.body);

    var divFondo = cE("div", document.body);
    divFondo.id = "divFondoTabletas";

    var div = cE("div", divFondo);
    div.innerHTML = "la galeria virtual <i>Sueños distantes</i> sólo está disponible para computadoras.";

    var div = cE("div", divFondo);
    div.innerHTML = "En los siguientes enlaces puedes, no obstante, visitar las obras de la exposición:";

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "The Other Dakar - Selly Raby Kane, Senegal, 2017";
    div.addEventListener("click", function() {
        //window.open("https://youtu.be/wKfckJT3ew4");

        window.open("https://sellyrabykane.com/");


    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Dreams of the Jaguar's Daughter - Alfredo Salazar Caro, México- USA, 2019";
    div.addEventListener("click", function() {
        window.open("https://youtu.be/xyKRKYxVaq4");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Vértices - Ximena Alarcón, 2020 (Performances de Improvisación Telemática)";
    div.addEventListener("click", function() {
        window.open("https://youtu.be/a6Y1H0qOP6g");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Spaced Out - Pyaré (Pierre Friquet), Francia, 2019 (VR/instalación subacuática)";
    div.addEventListener("click", function() {
        window.open("https://youtu.be/q4PJ9jP0r1U");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Graphos and Onirocracy - Pandemic Dreams Archive, Internacional, 2020 (Inteligencia artificial/Web)";
    div.addEventListener("click", function() {
        window.open("https://socio-graph.net/outros/Pandemic/network_subs/");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Dream - Philippe Lambert, Canadá, 2018";
    div.addEventListener("click", function() {
        window.open("https://www.nfb.ca/interactive/dream/");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Promesa - Julián Palacios Gechtman, talia, 2020 (Videojuego)";
    div.addEventListener("click", function() {
        window.open("https://julian-palacios.itch.io/promesa");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "N8 - Esteban Rey, Colombia, 2020 (Web/ Inteligencia Artificial)";
    div.addEventListener("click", function() {
        window.open("https://n8.cara-cara.tv/");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Parasomnias - SensoLab, laboratorio de experimentación. Facultad de Ciencias Sociales, Pontificia Universidad Javeriana, Colombia, 2020";
    div.addEventListener("click", function() {
        window.open("https://youtu.be/ojCdYFk3Dv0");
    });

    var div = cE("div", divFondo);
    div.className = "enlaceDispositivos";
    div.innerHTML = "Ir a la página de midbo ";
    div.addEventListener("click", function() {
        window.open("https://www.midbo.co/expandido-4/");
    });
};

function construirSafari() {
    var divDescargando = document.getElementById("descargando");
    divDescargando.style.display = "none";

    canvas.style.display = "none";

    divPalabras = cE("div", document.body);

    var divFondoT = cE("div", document.body);
    divFondoT.id = "divFondoTabletas";

    var div = cE("div", divFondoT);
    div.innerHTML = "Tu navegador no es compatible con todas las tecnologías utilizadas por este sitio web. Te recomendamos visualizarlo en Firefox o Google Chrome.";

    var div = cE("div", divFondoT);
    div.className = "irANavegador";
    div.innerHTML = "Ir a la página de descarga de Firefox";
    div.addEventListener("click", function() {
        window.open("https://www.mozilla.org/es-ES/");
    });

    var div = cE("div", divFondoT);
    div.className = "irANavegador";
    div.innerHTML = "Ir a la página de descarga de Google Chrome";
    div.addEventListener("click", function() {
        window.open("https://www.google.com/chrome/");
    });
}

function construirIntro() {
    if (Explorador.browser == "Safari") {
        construirSafari();
    } else {
        var divDescargando = document.getElementById("descargando");
        divDescargando.style.display = "none";

        divT1 = cE('div', document.body);
        divT1.className = "presentacion1";
        divT1.id = "divT1";
        divT1.innerHTML = "Previsión Colectiva <br>" + "Presenta";
        hayDivTextos = true;

        animarParrafos(5000);

        divLogoIdartes = cE('div', document.body);
        divLogoIdartes.id = "divLogoIdartes";

        var img = cE("img", divLogoIdartes);
        img.src = "2-imagenes/logoidartes.jpg?n=3";

        window.setTimeout(function() {
            if (Explorador.browser == "Firefox") {
                descargarArchivosFirefox();
            } else {
                //descargarArchivosFirefox();
                descargarArchivos();
            }
        }, 1000);
    }
}

var dakarImg;
var dakarTrailer;
var dakarFondoV;
var jaguarImg;
var jaguarTrailer;
var jaguarFondoV;
var dreamImg;
var dreamTrailer;
var dreamFondoV;
var verticesImg;
var verticesTrailer;
var verticesFondoV;
var spaceImg;
var spaceTrailer;
var spaceFondoV;
var n8Img;
var n8Trailer;
var n8FondoV;
var pandemicImg;
var pandemicTrailer;
var pandemicFondoV;
var promesaImg;
var promesaTrailer;
var promesaFondoV;
var parasomniasImg;
var parasomniasTrailer;
var parasomniasFondoV;
var explosionV;
var nieblaV;
var audioPlanetas;
var audioTerremoto;
var audioIntro;

var indiceArchivos = 0;

var videoFondoOk = false;

function descargarArchivos() {
    if (indiceArchivos == 0) {
        videoFondo = cE('video', document.body);
        videoFondo.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/explosion3_mvwolk.mp4?n=3';
        videoFondo.id = 'videoFondo';
        videoFondo.loop = false;
        videoFondo.preload = "auto";
        videoFondo.oncanplay = function() {
            if (!videoFondoOk) {
                videoFondoOk = true;
                continuarDescarga();
            }
        }
    } else if (indiceArchivos == 1) {
        dakarImg = loadImage('2-imagenes/dakar.jpg?n=3', continuarDescarga);
    } else if (indiceArchivos == 2) {
        continuarDescarga();
    } else if (indiceArchivos == 3) {
        dakarFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/dakarv_vff31x.mp4?n=3'], continuarDescarga);
        dakarFondoV.volume(0);
    } else if (indiceArchivos == 4) {
        jaguarImg = loadImage('2-imagenes/jaguar.png?n=3', continuarDescarga);
    } else if (indiceArchivos == 5) {
        continuarDescarga();
    } else if (indiceArchivos == 6) {
        jaguarFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765606/jaguarv_uvuer9.mp4?n=3'], continuarDescarga);
        jaguarFondoV.volume(0);
    } else if (indiceArchivos == 7) {
        dreamImg = loadImage('2-imagenes/dream.png?n=3', continuarDescarga);
    } else if (indiceArchivos == 8) {
        continuarDescarga();
    } else if (indiceArchivos == 9) {
        dreamFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/dreamv_pfvuw6.mp4?n=3'], continuarDescarga);
        dreamFondoV.volume(0);
    } else if (indiceArchivos == 10) {
        verticesImg = loadImage('2-imagenes/vertices.png?n=3', continuarDescarga);
    } else if (indiceArchivos == 11) {
        continuarDescarga();
    } else if (indiceArchivos == 12) {
        verticesFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765607/verticesv_az5urh.mp4?n=3'], continuarDescarga);
        verticesFondoV.volume(0);
    } else if (indiceArchivos == 13) {
        spaceImg = loadImage('2-imagenes/spaceout.jpg?n=3', continuarDescarga);
    } else if (indiceArchivos == 14) {
        continuarDescarga();
    } else if (indiceArchivos == 15) {
        spaceFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/spaceoutv_bptkrt.mp4?n=3'], continuarDescarga);
        spaceFondoV.volume(0);
    } else if (indiceArchivos == 16) {
        n8Img = loadImage('2-imagenes/n8.jpg?n=3', continuarDescarga);
    } else if (indiceArchivos == 17) {
        continuarDescarga();
    } else if (indiceArchivos == 18) {
        n8FondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/n8v_xv0u5l.mp4?n=3'], continuarDescarga);
        n8FondoV.volume(0);
    } else if (indiceArchivos == 19) {
        pandemicImg = loadImage('2-imagenes/pandemic.jpg?n=3', continuarDescarga);
    } else if (indiceArchivos == 20) {
        continuarDescarga();
    } else if (indiceArchivos == 21) {
        pandemicFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/n8v_xv0u5l.mp4?n=3'], continuarDescarga);
        pandemicFondoV.volume(0);
    } else if (indiceArchivos == 22) {
        promesaImg = loadImage('2-imagenes/promesa.png?n=3', continuarDescarga);
    } else if (indiceArchivos == 23) {
        continuarDescarga();
    } else if (indiceArchivos == 24) {
        promesaFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/promesav_xvjfmm.mp4?n=3'], continuarDescarga);
        promesaFondoV.volume(0);
    } else if (indiceArchivos == 25) {
        parasomniasImg = loadImage('2-imagenes/parasomnias.jpg?n=3', continuarDescarga);
    } else if (indiceArchivos == 26) {
        continuarDescarga();
    } else if (indiceArchivos == 27) {
        parasomniasFondoV = createVideo(['https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765604/parasomniasv_dydmnl.mp4?n=3'], continuarDescarga);
        parasomniasFondoV.volume(0);
    } else if (indiceArchivos == 28) {
        continuarDescarga();
    } else if (indiceArchivos == 29) {
        audioIntro = new Audio();
        audioIntro.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769391/entrada_xcjznq.mp3";
        continuarDescarga();
    } else {
        if (!terminoLaDescarga) {
            terminoLaDescarga = true;
        }
        //crearPlanetas();		
        //crearDivEntrar("Saltar intro");	
    }
}

function continuarDescarga() {
    indiceArchivos++;
    console.log(indiceArchivos);
    descargarArchivos();
}

function descargarArchivosFirefox() {
    if (indiceArchivos == 0) {
        videoFondo = cE('video', document.body);
        videoFondo.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/explosion3_mvwolk.mp4?n=3';
        videoFondo.id = 'videoFondo';
        videoFondo.loop = false;
        videoFondo.oncanplay = continuarDescargaFirefox;
    } else if (indiceArchivos == 1) {
        dakarImg = loadImage('2-imagenes/dakar.jpg?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 2) {
        continuarDescargaFirefox();
    } else if (indiceArchivos == 3) {
        var dakarFondoVF = cE('video', document.body);
        dakarFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/dakarv_vff31x.mp4?n=3';
        dakarFondoVF.oncanplay = oncanplay = function() {
            dakarFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/dakarv_vff31x.mp4?n=3');
            dakarFondoV.volume(0);
            continuarDescargaFirefox();
        }
    } else if (indiceArchivos == 4) {
        jaguarImg = loadImage('2-imagenes/jaguar.png?n=3', continuarDescargaFirefox);

    } else if (indiceArchivos == 5) {
        continuarDescargaFirefox();
    } else if (indiceArchivos == 6) {
        var jaguarFondoVF = cE('video', document.body);
        jaguarFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765606/jaguarv_uvuer9.mp4?n=3';
        jaguarFondoVF.oncanplay = function() {
            jaguarFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765606/jaguarv_uvuer9.mp4?n=3');
            jaguarFondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 7) {
        dreamImg = loadImage('2-imagenes/dream.png?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 8) {
 
        continuarDescargaFirefox();
    } else if (indiceArchivos == 9) {
        var dreamFondoVF = cE('video', document.body);
        dreamFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/dreamv_pfvuw6.mp4?n=3';
        dreamFondoVF.oncanplay = function() {
            dreamFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765605/dreamv_pfvuw6.mp4?n=3');
            dreamFondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 10) {
        verticesImg = loadImage('2-imagenes/vertices.png?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 11) {
    
        continuarDescargaFirefox();
    } else if (indiceArchivos == 12) {
        var verticesFondoVF = cE('video', document.body);
        verticesFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765607/verticesv_az5urh.mp4?n=3';
        verticesFondoVF.oncanplay = function() {
            verticesFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765607/verticesv_az5urh.mp4?n=3');
            verticesFondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 13) {
        spaceImg = loadImage('2-imagenes/spaceout.jpg?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 14) {
    
        continuarDescargaFirefox();
    } else if (indiceArchivos == 15) {
        var spaceFondoVF = cE('video', document.body);
        spaceFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/spaceoutv_bptkrt.mp4?n=3';
        spaceFondoVF.oncanplay = function() {
            spaceFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/spaceoutv_bptkrt.mp4?n=3');
            spaceFondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 16) {
        n8Img = loadImage('2-imagenes/n8.jpg?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 17) {
        continuarDescargaFirefox();
    } else if (indiceArchivos == 18) {
        n8FondoVF = cE('video', document.body);
        n8FondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/n8v_xv0u5l.mp4?n=3';
        n8FondoVF.oncanplay = function() {
            n8FondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/n8v_xv0u5l.mp4?n=3');
            n8FondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 19) {
        pandemicImg = loadImage('2-imagenes/pandemic.jpg?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 20) {
        continuarDescargaFirefox();
    } else if (indiceArchivos == 21) {
        var pandemicFondoVF = cE('video', document.body);
        pandemicFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765607/pandemicv_xa0og1.mp4?n=3';
        pandemicFondoVF.oncanplay = function() {
            pandemicFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765607/pandemicv_xa0og1.mp4?n=3');
            pandemicFondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 22) {
        promesaImg = loadImage('2-imagenes/promesa.png?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 23) {
        continuarDescargaFirefox();
    } else if (indiceArchivos == 24) {
        var promesaFondoVF = cE('video', document.body);
        promesaFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/promesav_xvjfmm.mp4?n=3';
        promesaFondoVF.oncanplay = function() {
            promesaFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/promesav_xvjfmm.mp4?n=3');
            promesaFondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 25) {
        parasomniasImg = loadImage('2-imagenes/parasomnias.jpg?n=3', continuarDescargaFirefox);
    } else if (indiceArchivos == 26) {
           continuarDescargaFirefox();
    } else if (indiceArchivos == 27) {
        var parasomniasFondoVF = cE('video', document.body);
        parasomniasFondoVF.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765604/parasomniasv_dydmnl.mp4?n=3';
        parasomniasFondoVF.oncanplay = function() {
            parasomniasFondoV = createVideo('https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765604/parasomniasv_dydmnl.mp4?n=3');
            parasomniasFondoV.volume(0);
            continuarDescargaFirefox();
        };
    } else if (indiceArchivos == 28) {
        nieblaV = cE('video', document.body);
        nieblaV.src = 'https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/niebla_wqjvoi.mp4?n=3';
        nieblaV.oncanplay = continuarDescargaFirefox;
    } else if (indiceArchivos == 29) {
        audioIntro = new Audio();
        audioIntro.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769391/entrada_xcjznq.mp3";
        continuarDescargaFirefox();
    } else {
        if (!terminoLaDescarga) {
            terminoLaDescarga = true;
        }
    }
}

function continuarDescargaFirefox() {
    indiceArchivos++;
    descargarArchivosFirefox();
}

function construirContenedores() {
    divPopupDescarga = cE('div', document.body);
    divPopupDescarga.id = "divPopupDescarga";

    divPalabras = cE('div', document.body);

    divObrasG = cE('div', document.body);
    divObrasG.id = 'divObrasG';

    divObras = cE('div', divObrasG);
    divObras.id = 'divObras';

    divX = cE('div', divObrasG);
    divX.className = 'cerrarO';

    var span = cE('span', divX);
    span.innerHTML = 'X';

    span.addEventListener('click', function() {
        if (audioOn) {
            if (audioPlanetas) {
                audioPlanetas.volume = 1;
            }
        }

        if (!yaEntro) {
            divObras.innerHTML = '';
            divObrasG.style.display = 'none';
        } else {
            divObras.innerHTML = '';
            divObrasG.style.display = 'none';
            if (audioPlanetas) {
                audioPlanetas.play();
            }
            animar = true;
            vaAObra = false;
        }
    });

    /*videoFondo = cE('video', document.body);
    videoFondo.id = 'videoFondo';
    videoFondo.loop = false;*/

    videoTrailerC = cE('div', document.body);
    videoTrailerC.innerHTML = "";
    videoTrailerC.id = 'videoTrailerC';

    videoTrailer = cE('video', videoTrailerC);
    videoTrailer.id = 'videoTrailer';
    videoTrailer.loop = true;

    videoTrailer.onplaying = function() {
        videoOn = true;
    };

    videoTrailer.onpause = function() {
        videoOn = false;
    };

    divSinopsis = cE('div', document.body);
    divSinopsis.id = 'divSinopsis';

    var divBajar = cE("div", divSinopsis);
    divBajar.id = "divBajar";

    var img = cE("img", divBajar);
    img.src = "2-imagenes/bajar.png";
    img.addEventListener("click", function() {
        if (sinopsisArriba) {
            sinopsisArriba = false;
            img.src = "2-imagenes/subir.png";
            divSinopsis.className = "desaparecerSinopsis";
        } else {
            sinopsisArriba = true;
            img.src = "2-imagenes/bajar.png";
            divSinopsis.className = "aparecerSinopsis";
        }
    });

    tituloSinopsis = cE('div', divSinopsis);
    tituloSinopsis.id = 'tituloSinopsis';
    tituloSinopsis.innerHTML = ''

    textoSinopsis = cE('div', divSinopsis);
    textoSinopsis.id = 'textoSinopsis';
    textoSinopsis.innerHTML = "";

    verBoton = cE('div', divSinopsis);
    verBoton.innerHTML = 'Ver obra';
    verBoton.className = 'boton';
    verBoton.addEventListener('click', function() {
        vaAObra = true;
        audioPlanetas.pause();
        proyectoS.ponerObra();
    });

    var div = cE('div', divSinopsis);
    div.className = 'cerrar';

    var span = cE('span', div);
    span.innerHTML = 'X';

    span.addEventListener('click', function() {
        quitarSinopsis();
    });

    var divCreditos = cE('div', document.body);
    divCreditos.id = 'divCreditos';

    var div = cE('div', divCreditos);

    construirCreditos(div);

    var div = cE('div', divCreditos);
    div.className = 'cerrarCreditos';

    var span = cE('span', div);
    span.innerHTML = 'x';

    span.addEventListener('click', function() {
        divCreditos.className = 'desaparecerIzq';

        setTimeout(function() {
            divCreditos.style.display = 'none';
        }, 1200);

        creditosOn = false;
    });

    var infoCreditos = cE('div', document.body);
    infoCreditos.id = 'infoCreditos';

    var imgInfoC = cE("img", infoCreditos);
    imgInfoC.src = "2-imagenes/info.png";

    infoCreditos.addEventListener('click', function() {
        if (!creditosOn) {
            divCreditos.style.display = 'block';
            divCreditos.className = 'aparecerIzq';
            creditosOn = true;
        } else {
            divCreditos.className = 'desaparecerIzq';

            setTimeout(function() {
                divCreditos.style.display = 'none';
            }, 2000);

            creditosOn = false;
        }
    });

    audioOnOff = cE('div', document.body);
    audioOnOff.id = 'audioOnOff';
    audioOnOff.addEventListener('click', function() {
        videoFondoEnPlay = true;

        if (audioOn) {
            imgAudio.src = "2-imagenes/off.png";
            audioOn = false;
            audioPlanetas.volume = 0;

        } else {
            imgAudio.src = "2-imagenes/on.png";
            audioOn = true;
            audioPlanetas.volume = 1;
        }

        window.setTimeout(function() {
            videoFondoEnPlay = false;
        }, 400);
    });

    imgAudio = cE("img", audioOnOff);
    imgAudio.src = "2-imagenes/on.png";

    divVivo = cE("div", document.body);
    divVivo.id = "divVivo";
    divVivo.innerHTML = "VIVO";
    divVivo.addEventListener('click', function() {
        enVivo = true;
        videoFondoEnPlay = true;
        if (audioPlanetas) {
            audioPlanetas.volume = 0;
        }

        window.setTimeout(function() {
            videoFondoEnPlay = false;
        }, 400);

        ponerVivo();
    });

    divMidbo = cE("div", document.body);
    divMidbo.id = "divMidbo";

    var imgMidbo = cE("img", divMidbo);
    imgMidbo.src = "2-imagenes/logos/midbo.png";
    imgMidbo.addEventListener("click", function() {
        window.open("https://www.midbo.co/");
    });
};

function setup() {
    var pc = (esCelular.cualquiera()) ? false : true;

    if (pc) {
        createCanvas(windowWidth, windowHeight, WEBGL);

        aceptaWebGl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        fuentWebGl = loadFont("5-fuentes/Jura-Regular.ttf");

        if (aceptaWebGl && aceptaWebGl instanceof WebGLRenderingContext) {

        } else {
            pintarNoAcpetaWebGL()
        }

        canvas.addEventListener('click', canvasOnClick);
    } else {
        noLoop();
    }

}

function draw() {
    background('rgba(0,0,0,0)');

    if (mostrarConstelaciones) {
        pintarConstelaciones();
    };

    if (animar) {
        divLogoIdartes.style.display = "none";
        canvas.style.display = 'block';

        if (interactividad) {
            canvas.className = "bg0";
        }

        if (ponerParticulas) {
            for (var i = 0; i < nParticulas; i++) {
                var particula = particulas[i];
                particula.pintar();
            }
        }

        var camX = map(mouseX, 0, width * 1.3, -window.innerWidth / 1.4, window.innerWidth / 1.4)
        var camY = map(mouseY, 0, height, -window.innerHeight / 10, window.innerHeight / 10);

        if (entranPlanetas) {
            if (mouseX > (width - width / 5)) {
                camera(camX, camY, zoom + (height / 2) / tan(PI / 6), camX / 2, camY * 3, 0, 0, 1, 0);
            } else {
                camera(camX, camY, zoom + (height / 2) / tan(PI / 6), camX / 5, camY * 3, 0, 0, 1, 0);
            }
        } else if (interactividad) {
            if (mouseX > (width - width / 5)) {

                camera(camX, camY, zoom + (height / 2) / tan(PI / 6), camX / 5, camY * 3, 0, 0, 1, 0);
            } else {
                camera(camX, camY, zoom + (height / 2) / tan(PI / 6), camX / 5, camY * 3, 0, 0, 1, 0);
            }

        } else {
            //audioPlanetas.volume = 0;

            if (mouseX > (width - width / 5)) {
                nCaida = 0;
                zoom = 0;
                camera(camX, camY, zoom + (height / 2) / tan(PI / 6), camX / 2, camY * 3, 0, 0, 1, 0);
            } else if (mouseX < width / 6) {
                nCaida = 0;
                zoom = 0;
                camera(camX / 2, camY, zoom + (height / 2) / tan(PI / 6), camX / 10, camY * 3, 0, 0, 1, 0);
            } else {
                if (nCaida < 12) {
                    if (!audioTerremotoEstaSonando) {
                        audioTerremotoEstaSonando = true;
                        audioTerremoto.currentTime = 0;
                        audioTerremoto.play();
                    }
                    var nR = random(4, 30);
                    zoom = 0;

                    camera(0, 0, zoom + (height / 2) / tan(PI / 6), nR, 0, 0, 0, nR, 0);

                    nCaida++;
                } else {
                    audioTerremotoEstaSonando = false;
                    zoom = 0;
                    camera(0, 0, zoom + (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);
                }
            }
        }

        for (var i = 0; i < planetas.length; i++) {
            var planeta = planetas[i];
            planeta.pintar();
        }
    }
}