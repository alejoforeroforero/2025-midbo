function pintarNoAcpetaWebGL() {
    var div = cE("div", document.body);
    div.id = "divNoWebGL";
    div.innerHTML = "Este sitio Web hace uso de graficas en WebGL las cuales no se encuentran habilitadas o no son compatibles con este navegador.";
}

function animarParrafos(duracion) {
    intervaloIntro = window.setTimeout(function() {
        if (hayDivTextos) {
            document.body.removeChild(divT1);
            hayDivTextos = false;
        }

        if (contadorIntro == 0) {
            divT1 = cE('div', document.body);
            divT1.className = "presentacion2";
            divT1.id = "divT1";
            divT1.innerHTML = parrafos[contadorIntro];
            hayDivTextos = true;
            animarParrafos(7000);
        } else if (contadorIntro == 1) {
            divT1 = cE('div', document.body);
            divT1.className = "presentacion3";
            divT1.id = "divT1";
            divT1.innerHTML = parrafos[contadorIntro];
            hayDivTextos = true;
            animarParrafos(10000);

            crearDivEntrar("Saltar intro");
        } else if (contadorIntro == 3 || contadorIntro == 5) {
            divT1 = cE('div', document.body);
            divT1.className = "presentacion4";
            divT1.id = "divT1";
            divT1.innerHTML = parrafos[contadorIntro];
            hayDivTextos = true;
            animarParrafos(17000);
        } else if (contadorIntro == 4) {
            divT1 = cE('div', document.body);
            divT1.className = "presentacion5";
            divT1.id = "divT1";
            divT1.innerHTML = parrafos[contadorIntro];
            hayDivTextos = true;
            animarParrafos(22000);
        } else if (contadorIntro > parrafos.length - 1) {
            if (!yaCreoDivEntrar) {
                crearDivEntrar("Entrar");
            } else {
                if (!yaEspichoDivEntrar) {
                    divEntrar.style.display = "block";
                    divEntrar.innerHTML = "Entrar";
                }
            };

            if (hayDivTextos) {
                divT1.style.display = "none";
            }
            clearTimeout(intervaloIntro);
        } else {
            divT1 = cE('div', document.body);
            divT1.className = "presentacion3";
            divT1.id = "divT1";
            divT1.innerHTML = parrafos[contadorIntro];
            hayDivTextos = true;
            animarParrafos(10000);
        }

        contadorIntro++;

    }, duracion);
}

function crearDivEntrar(texto) {
    if (!yaCreoDivEntrar) {
        yaCreoDivEntrar = true;

        divEntrar = cE('div', document.body);
        divEntrar.id = 'divEntrar';
        divEntrar.innerHTML = texto;
        divEntrar.onclick = function() {
            yaEspichoDivEntrar = true;
            popupDescarga();
            divEntrar.style.display = 'none';
        }
    }
}

var indiceArchivosAnterior = 0;
var porcentaje = 0;

function popupDescarga() {
    if (terminoLaDescarga) {
        divPopupDescarga.style.display = "none";
        entrarAlProtecto();
    } else {
        if (indiceArchivosAnterior == indiceArchivos) {
            porcentaje++;

            if (porcentaje > Math.floor((indiceArchivos + 1) * 100 / 30)) {
                porcentaje = Math.floor((indiceArchivos + 1) * 100 / 30);
            }
        } else {
            porcentaje = Math.floor(indiceArchivos * 100 / 30);
        }

        divPopupDescarga.style.display = "block";
        divPopupDescarga.innerHTML = porcentaje + "%";

        indiceArchivosAnterior = indiceArchivos;

        window.setTimeout(function() {
            popupDescarga();
        }, 711);
    }
}

function entrarAlProtecto() {
    crearPlanetas();
    divEntrar.style.display = 'none';
    yaEntro = true;
    animar = true;
    mostrarPalabras = true;
    construirTitulo();
    construirMenu();
    clearTimeout(intervaloIntro);

    audioIntro.play();

    /*proyectoS = planetas[8];			
    ponerSinopsis();*/

    if (hayDivTextos) {
        divT1.style.display = "none";
        divLogoIdartes.style.display = "none";
    }
}

function construirCreditos(div) {
    var divArriba = cE("div", div);
    divArriba.id = "divArriba";

    var span1 = cE("span", divArriba);
    span1.innerHTML = "Programación";
    span1.addEventListener("click", function() {
        ponerProgramacion(span1);
    });

    menuInfoS = span1;
    menuInfoS.className = "menuInfoS";

    var span2 = cE("span", divArriba);
    span2.className = "menuInfoNormal";
    span2.innerHTML = "Texto curatorial";
    span2.addEventListener("click", function() {
        ponerTextoCuratorial(span2)
    });

    var span3 = cE("span", divArriba);
    span3.className = "menuInfoNormal";
    span3.innerHTML = "Créditos";
    span3.addEventListener("click", function() {
        ponerCreditos(span3)
    });

    divTextos = cE("div", div);
    divTextos.id = "divTextos";

    ponerProgramacion(span1);
}

function ponerProgramacion(span) {
    menuInfoS.className = "menuInfoNormal";
    menuInfoS = span;
    menuInfoS.className = "menuInfoS";

    divTextos.scrollTop = 0;
    divTextos.innerHTML = "<span class='infoEvento'>Transmisiones en vivo a través de las redes sociales de la MIDBO - Facebook Live y Youtube @MIDBODOC.</span> <br>" +
        "<span class='infoEvento'>Acceso libre desde cualquier país del mundo</span><br>" +
        "<br>" +
        "<h1>1. Martes 27 de octubre, 10:00 a.m.</h1><br>" +
        "Charla de apertura<br>" +
        "Colectivo <i>Pandemic Dreams Archive</i> (Archivo de sueños pandémicos)<br>" +
        "Brasil<br>" +
        "<br>" +
        "<br>" +
        "<h1>2. Sábado 31 de octubre, 4:00 p.m.</h1><br>" +
        "<i>Vértices</i><br>" +
        "Performance de improvisación telemática<br>" +
        "Ximena Alarcón y colectivo Vértices<br>" +
        "Colombia<br>" +
        "<br>" +
        "<br>" +
        "<h1>3. Miércoles 4 de noviembre, 5:00 p.m. </h1><br>" +
        "<i>Vértices</i><br>" +
        "Performance de improvisación telemática<br>" +
        "Ximena Alarcón y colectivo Vértices<br>" +
        "Colombia<br>" +
        "<br>" +
        "<br>" +
        "<h1>4. Jueves 5 de noviembre, 6:00 p.m.</h1><br>" +
        "<i>Malicia Artificial</i><br>" +
        "Charla sobre inteligencia artificial, documental y arte<br>" +
        "Esteban Rey<br>" +
        "Colombia<br>" +
        "<br>" +
        "<i>Ciclo de conferencias de las artes organizado  por el Centro de Divulgación y Medios de la Facultad de Artes Universidad Nacional de Colombia</i><br>" +
        "<br>" +
        "<br>" +
        "<h1>5. Sábado 7 de noviembre, 4:00 p.m.</h1><br>" +
        "Conversatorio sobre documental y realidad virtual<br>" +
        "Pierre Friquet y Alfredo Salazar-Caro <br>" +
        "Francia-México<br>" +
        "<br>" +
        "<i>En alianza con el Festival Narrar el Futuro</i><br>" +
        "<br>" +
        "<br>" +
        "<h1>6. Sábado 7 de noviembre, 7:00 p.m.</h1><br>" +
        "<i>Parasomnias</i><br>" +
        "Videomapping<br>" +
        "SensoLab, laboratorio de experimentación<br>" +
        "Evento virtual y presencial en Medellín, Zipaquirá, Bogotá<br>" +
        "Colombia<br>" +
        "<br>" +
        "<br>" +
        "<h1>7. Martes 10 de noviembre, 7:00 p.m. </h1><br>" +
        "<i>Sueños Distantes galeria virtual</i><br>" +
        "Conversatorio, <i>Las posibilidades del medio digital en Sueños Distantes</i><br>" +
        "Carolina Ortiz y Alejandro Forero<br>" +
        "Colombia<br>" +
        "<br>" +
        "<br>" +
        "<h1>8. Miércoles 25 de noviembre, 2:00 p.m.</h1><br>" +
        "Conferencia, <i>Las derivas del documental como proceso artístico (Documental expandido).</i><br>" +
        "Ximena Alarcón y colectivo Vértices<br>" +
        "Colombia<br>" +
        "<br>" +
        "<i>En el marco del I Simposio Latinoamericano de Arte Mediático organizado por la Universidad Nacional y la UNAM </i>";
}

function ponerTextoCuratorial(span) {
    menuInfoS.className = "menuInfoNormal";
    menuInfoS = span;
    menuInfoS.className = "menuInfoS";

    divTextos.scrollTop = 0;
    divTextos.innerHTML = "";

    for (var i = 0; i < parrafosC.length; i++) {
        if (i == 0) {
            var h1 = cE("h1", divTextos);
            h1.innerHTML = parrafosC[i] + "<br>";
        } else {
            var div = cE("div", divTextos);
            div.innerHTML = parrafosC[i];
        }
    }
}

function ponerCreditos(span) {
    menuInfoS.className = "menuInfoNormal";
    menuInfoS = span;
    menuInfoS.className = "menuInfoS";

    divTextos.scrollTop = 0;
    divTextos.innerHTML = "";

    var divInfo = cE("div", divTextos);
    divInfo.innerHTML = "<i>Proyecto ganador de la Beca de programación en artes plásticas Red Galería Santa Fe, Sala Virtual 2020.</i><br>" +
        "<br>" +
        "<span class='creditosBold'>Coordinación exposición <i>Sueños distantes</i>:</span> Carolina Ortiz Cerón<br>" +
        "<span class='creditosBold'>Curaduría: </span> Previsión Colectiva (Germán Ayala, Carolina Ortiz Cerón, Ana Salas) <br>" +
        "<span class='creditosBold'>Curador invitado:</span> Andrés Jurado<br>" +
        "<span class='creditosBold'>Asistente de curaduría:</span> Cristian Duque Escobar<br>" +
        "<br>" +
        "<span class='creditosBold'>Concepto y diseño Sueños distantes:</span> Alejandro Forero, Carolina Ortiz Cerón<br>" +
        "<span class='creditosBold'>Programador web:</span> Alejandro Forero<br>" +
        "<span class='creditosBold'>Diseño sonoro:</span> Carolina Ortiz Cerón<br>" +
        "<br>" +
        "<span class='creditosBold'>Producción General:</span> Paola Figueroa<br>" +
        "<span class='creditosBold'>Producción de Campo:</span> Laura Berbeo<br>" +
        "<br>" +
        "<span class='creditosBold'>Agradecimientos:</span><br>" +
        "Ximena Alarcón, Esteban Rey,  Natalia Behaine, Helkin René Díaz, Viviana Gómez Echeverry, Oscar Guarín, Amalia Leal, Gabriel Restrepo, Rodrigo Restrepo Ángel, Rodrigo Restrepo Pabón, Alma Sarmiento, SensoLab, Leonel Vasquez, Angelica María Zorrilla.<br>" +
        "<br>" +
        "<i>Sueños distantes</i> es una curaduría realizada por Previsión Colectiva, que se presenta en la Sala virtual de la Galería Santa Fe, en el marco de la sección de Documental expandido de la 22 MIDBO (Muestra Internacional Documental de Bogotá).<br>" +
        "<br>" +
        "<span class='creditosBold'>Organizan: </span>Corporación Colombiana de Documentalistas ALADOS y Fundación Laboratorio Accionar<br>" +
        "<span class='creditosBold'>Co-organiza: </span>Universidad Nacional de Colombia - Vicerrectoría y Vicedecanatura de Investigación y Extensión<br>" +
        "<span class='creditosBold'>Con el apoyo de: </span>Corporación Colombiana de Documentalistas ALADOS y Fundación Laboratorio Accionar<br>" +
        "";

    var div = cE("div", divTextos);
    div.className = "titulosLogos";
    div.innerHTML = "Organizan";

    var div = cE("div", divTextos);
    div.id = "organizaImgs";

    var img = cE("img", div);
    img.src = "2-imagenes/logos/logo1.png";

    var img = cE("img", div);
    img.src = "2-imagenes/logos/logo2.png";

    var div = cE("div", divTextos);
    div.className = "titulosLogos";
    div.innerHTML = "Co-organiza";

    var div = cE("div", divTextos);
    div.id = "coorganizaImgs";

    var img = cE("img", div);
    img.src = "2-imagenes/logos/logo3.png";

    var div = cE("div", divTextos);
    div.className = "titulosLogos";
    div.innerHTML = "Apoyan";

    var div = cE("div", divTextos);
    div.id = "apoyaImgs";

    var img = cE("img", div);
    img.src = "2-imagenes/logos/logo4.png";

    var img = cE("img", div);
    img.src = "2-imagenes/logos/logo5.png";

    var div = cE("div", divTextos);
    div.className = "titulosLogos";
    div.innerHTML = "Aliado";

    var div = cE("div", divTextos);
    div.id = "aliadoImgs";

    var img = cE("img", div);
    img.src = "2-imagenes/logos/logo6.png";
}

function construirTitulo() {
    divMidbo = cE('div', document.body);
    divMidbo.id = 'titulo';
    divMidbo.innerHTML = 'Sueños distantes';

    divInfo = cE('div', document.body);
    divInfo.id = 'info';
    divInfo.innerHTML = 'info';
}

function construirMenu() {
    divM = cE('div', document.body);
    divM.id = 'menu';
    divM.addEventListener("mouseover", function() {
        mostrarPalabras = false;
    });

    divM.addEventListener("mouseout", function() {
        mostrarPalabras = true;
    });

    var menu = new Menu();
    menu.elementoPadre = divM;
    menu.tipo = 0;
    menu.titulo = 'Inicio';
    menu.audio = new Audio();
    menu.audio.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769390/morse1_vj18at.mp3";
    menu.pintar();

    menuS = menu;

    var menu = new Menu();
    menu.elementoPadre = divM;
    menu.tipo = 1;
    menu.titulo = 'Visión';
    menu.audio = new Audio();
    menu.audio.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769391/morse2_uej2ys.mp3";
    menu.pintar();

    var menu = new Menu();
    menu.elementoPadre = divM;
    menu.tipo = 2;
    menu.titulo = 'Memoria';
    menu.audio = new Audio();
    menu.audio.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769391/morse3_ghs4ey.mp3";
    menu.pintar();

    var menu = new Menu();
    menu.elementoPadre = divM;
    menu.tipo = 3;
    menu.titulo = 'Especulación';
    menu.audio = new Audio();
    menu.audio.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769391/morse4_gjtudg.mp3";
    menu.pintar();

    var menu = new Menu();
    menu.elementoPadre = divM;
    menu.tipo = 4;
    menu.titulo = 'Realidad Alterna';
    menu.audio = new Audio();
    menu.audio.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769391/morse5_dbyybr.mp3";
    menu.pintar();

    audioPlanetas = new Audio();
    audioPlanetas.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769395/planetas_clsh8l.mp3?n=1";

    audioTerremoto = new Audio();
    audioTerremoto.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769392/terremoto_mtobua.mp3";
}

var grosorLinea;
var palabraConstelacionOpacidad;
var palabraConstelacion;

function constelacion1() {
    strokeWeight(5);
    point(0, height / 2);
    point(-width / 18, height / 3);
    strokeWeight(grosorLinea);
    line(0, height / 2, -width / 18, height / 3);

    strokeWeight(8);
    point(-width / 30, height / 4);
    strokeWeight(grosorLinea);
    line(-width / 18, height / 3, -width / 30, height / 4);

    strokeWeight(5);
    point(0, 0);
    strokeWeight(grosorLinea);
    line(-width / 30, height / 4, 0, 0);

    strokeWeight(5);
    point(-width / 4, -height / 3);
    strokeWeight(grosorLinea);
    line(0, 0, -width / 4, -height / 3);

    strokeWeight(5);
    point(-width / 8, -height / 4);
    strokeWeight(grosorLinea);
    line(-width / 4, -height / 3, -width / 8, -height / 4);

    strokeWeight(4);
    point(-width / 10, -height / 5);
    strokeWeight(grosorLinea);
    line(-width / 8, -height / 4, -width / 10, -height / 5);

    strokeWeight(4);
    point(-width / 20, -height / 5);
    strokeWeight(grosorLinea);
    line(-width / 10, -height / 5, -width / 20, -height / 5);

    strokeWeight(5);
    point(-width / 4, -height / 3);
    strokeWeight(grosorLinea);
    line(-width / 20, -height / 5, -width / 4, -height / 3);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, -width / 4, -height / 3);
}

function constelacion2() {
    strokeWeight(5);
    point(-width / 2.5, 0);
    point(-width / 4, 0);
    strokeWeight(grosorLinea);
    line(-width / 2.5, 0, -width / 4, 0);

    strokeWeight(8);
    point(0, -height / 8);
    strokeWeight(grosorLinea);
    line(-width / 4, 0, 0, -height / 8);

    strokeWeight(5);
    point(width / 4, -height / 30);
    strokeWeight(grosorLinea);
    line(0, -height / 8, width / 4, -height / 30);

    strokeWeight(5);
    point(width / 8, height / 8);
    strokeWeight(grosorLinea);
    line(width / 4, -height / 30, width / 8, height / 8);

    strokeWeight(8);
    //point(0, -height/3);	
    strokeWeight(grosorLinea);
    line(width / 8, height / 8, -width / 4, 0);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, -width / 8, 0);
}

function constelacion3() {
    var px1 = -width / 3;
    var py1 = height / 2;
    var px2 = -width / 3.5
    var py2 = height / 2.5;
    var px3 = -width / 8;
    var py3 = height / 10;
    var px4 = 0;
    var py4 = 0;
    var px5 = width / 8;
    var py5 = -height / 3;
    var px6 = width / 6;
    var py6 = -height / 4;
    var px7 = width / 6;
    var py7 = -height / 8;

    strokeWeight(5);
    point(px1, py1);
    point(px2, py2);
    strokeWeight(grosorLinea);
    line(px1, py1, px2, py2);

    strokeWeight(5);
    point(px3, py3);
    strokeWeight(grosorLinea);
    line(px2, py2, px3, py3);

    strokeWeight(9);
    point(px4, py4);
    strokeWeight(grosorLinea);
    line(px3, py3, px4, py4);

    strokeWeight(4);
    point(px5, py5);
    strokeWeight(grosorLinea);
    line(px4, py4, px5, py5);

    strokeWeight(4);
    point(px6, py6);
    strokeWeight(grosorLinea);
    line(px4, py4, px6, py6);

    strokeWeight(4);
    point(px7, py7);
    strokeWeight(grosorLinea);
    line(px4, py4, px7, py7);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, 0, 0);
}

function constelacion4() {
    var px1 = -width / 2;
    var py1 = -height / 20;
    var px2 = -width / 3
    var py2 = height / 20;
    var px3 = -width / 4;
    var py3 = height / 18;
    var px4 = 0;
    var py4 = 0;
    var px5 = 0;
    var py5 = -height / 3;
    var px6 = width / 18;
    var py6 = height / 5;
    var px7 = width / 14;
    var py7 = height / 4;
    var px8 = width / 10;
    var py8 = height / 3;
    var px9 = width / 4;
    var py9 = -height / 16;
    var px10 = width / 3;
    var py10 = -height / 7;
    var px11 = width / 3.4;
    var py11 = -height / 6;

    strokeWeight(5);
    point(px1, py1);
    point(px2, py2);
    strokeWeight(grosorLinea);
    line(px1, py1, px2, py2);

    strokeWeight(5);
    point(px3, py3);
    strokeWeight(grosorLinea);
    line(px2, py2, px3, py3);

    strokeWeight(9);
    point(px4, py4);
    strokeWeight(grosorLinea);
    line(px3, py3, px4, py4);

    strokeWeight(8);
    point(px5, py5);
    strokeWeight(grosorLinea);
    line(px4, py4, px5, py5);

    strokeWeight(4);
    point(px6, py6);
    strokeWeight(grosorLinea);
    line(px4, py4, px6, py6);

    strokeWeight(4);
    point(px7, py7);
    strokeWeight(grosorLinea);
    line(px6, py6, px7, py7);

    strokeWeight(4);
    point(px8, py8);
    strokeWeight(grosorLinea);
    line(px7, py7, px8, py8);

    strokeWeight(4);
    point(px9, py9);
    strokeWeight(grosorLinea);
    line(px4, py4, px9, py9);

    strokeWeight(4);
    point(px10, py10);
    strokeWeight(grosorLinea);
    line(px9, py9, px10, py10);

    strokeWeight(4);
    point(px10, py10);
    strokeWeight(grosorLinea);
    line(px10, py10, px11, py11);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, -width / 3.5, -height / 18);
}

function constelacion5() {
    var px1 = -width / 2;
    var py1 = -height / 20;
    var px2 = -width / 3
    var py2 = height / 20;
    var px3 = -width / 4;
    var py3 = height / 18;
    var px4 = 0;
    var py4 = 0;
    var px5 = 0;
    var py5 = -height / 3;
    var px6 = width / 18;
    var py6 = height / 5;
    var px7 = width / 14;
    var py7 = height / 4;
    var px8 = width / 10;
    var py8 = height / 3;
    var px9 = width / 4;
    var py9 = -height / 16;
    var px10 = width / 3;
    var py10 = -height / 7;
    var px11 = width / 3.4;
    var py11 = -height / 6;

    strokeWeight(5);
    point(px1, py1);
    point(px2, py2);
    strokeWeight(grosorLinea);
    line(px1, py1, px2, py2);

    strokeWeight(5);
    point(px3, py3);
    strokeWeight(grosorLinea);
    line(px2, py2, px3, py3);

    strokeWeight(9);
    point(px4, py4);
    strokeWeight(grosorLinea);
    line(px3, py3, px4, py4);

    strokeWeight(8);
    point(px5, py5);
    strokeWeight(grosorLinea);
    line(px4, py4, px5, py5);

    strokeWeight(4);
    point(px6, py6);
    strokeWeight(grosorLinea);
    line(px4, py4, px6, py6);

    strokeWeight(4);
    point(px7, py7);
    strokeWeight(grosorLinea);
    line(px6, py6, px7, py7);

    strokeWeight(4);
    point(px8, py8);
    strokeWeight(grosorLinea);
    line(px7, py7, px8, py8);

    strokeWeight(4);
    point(px9, py9);
    strokeWeight(grosorLinea);
    line(px4, py4, px9, py9);

    strokeWeight(4);
    point(px10, py10);
    strokeWeight(grosorLinea);
    line(px9, py9, px10, py10);

    strokeWeight(4);
    point(px10, py10);
    strokeWeight(grosorLinea);
    line(px10, py10, px11, py11);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, -width / 3.5, -height / 18);
}

function constelacion6() {
    var px1 = -width / 10;
    var py1 = -height / 2;
    var px2 = -width / 10;
    var py2 = -height / 3;
    var px3 = -width / 14;
    var py3 = -height / 6;
    var px4 = 0;
    var py4 = 0;
    var px5 = width / 12;
    var py5 = height / 14;
    var px6 = width / 18;
    var py6 = height / 7;
    var px7 = -width / 24;
    var py7 = height / 13;
    var px8 = 0;
    var py8 = 0;

    strokeWeight(5);
    point(px1, py1);
    point(px2, py2);
    strokeWeight(grosorLinea);
    line(px1, py1, px2, py2);

    strokeWeight(5);
    point(px3, py3);
    strokeWeight(grosorLinea);
    line(px2, py2, px3, py3);

    strokeWeight(4);
    point(px4, py4);
    strokeWeight(grosorLinea);
    line(px3, py3, px4, py4);

    strokeWeight(4);
    point(px5, py5);
    strokeWeight(grosorLinea);
    line(px4, py4, px5, py5);

    strokeWeight(4);
    point(px6, py6);
    strokeWeight(grosorLinea);
    line(px5, py5, px6, py6);

    strokeWeight(4);
    point(px7, py7);
    strokeWeight(grosorLinea);
    line(px6, py6, px7, py7);

    strokeWeight(4);
    point(px7, py7);
    strokeWeight(grosorLinea);
    line(px7, py7, px8, py8);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, 0, 0);
}

function constelacion7() {
    var px1 = -width / 8;
    var py1 = height / 3;
    var px2 = -width / 12;
    var py2 = height / 18;
    var px3 = width / 18;
    var py3 = -height / 18;
    var px4 = width / 12;
    var py4 = -height / 20;

    strokeWeight(4);
    point(px1, py1);
    point(px2, py2);
    strokeWeight(grosorLinea);
    line(px1, py1, px2, py2);

    strokeWeight(4);
    point(px3, py3);
    strokeWeight(grosorLinea);
    line(px2, py2, px3, py3);

    strokeWeight(4);
    point(px4, py4);
    strokeWeight(grosorLinea);
    line(px3, py3, px4, py4);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, -width / 13, height / 12);
}

function constelacion8() {
    var px1 = -width / 10;
    var py1 = height / 3;
    var px2 = -width / 6;
    var py2 = height / 18;
    var px3 = 0;
    var py3 = 0;
    var px4 = width / 22;
    var py4 = -height / 5;
    var px5 = width / 5;
    var py5 = -height / 3.5;

    strokeWeight(4);
    point(px1, py1);
    point(px2, py2);
    strokeWeight(grosorLinea);
    line(px1, py1, px2, py2);

    strokeWeight(4);
    point(px3, py3);
    strokeWeight(grosorLinea);
    line(px2, py2, px3, py3);

    strokeWeight(4);
    point(px4, py4);
    strokeWeight(grosorLinea);
    line(px3, py3, px4, py4);

    strokeWeight(4);
    point(px5, py5);
    strokeWeight(grosorLinea);
    line(px4, py4, px5, py5);

    fill(242, 242, 242, palabraConstelacionOpacidad);
    stroke('rgba(180, 180, 255, 1)');
    textFont(fuentWebGl);
    textSize(40);
    strokeWeight(10);
    text(palabraConstelacion, -width / 13, height / 12);
}

function pintarConstelaciones() {
    if (mouseX > (width - width / 5) || mouseX < width / 6 || zoom > 200 || zoom < -800) {
        stroke('rgba(242,242,242,0.9)');
        grosorLinea = 1.2;
        palabraConstelacionOpacidad = 232;

        if (!mostrandoConstelaciones) {
            mostrandoConstelaciones = true;

            var nR = Math.floor(random(0, palabras.length));
            palabraConstelacion = palabras[nR];
        }
    } else if (zoom < -200) {
        stroke('rgba(242,242,242,0.6)');
        grosorLinea = 0.8;
        palabraConstelacionOpacidad = 232;
    } else {
        stroke('rgba(242,242,242,0.6)');
        grosorLinea = 0.8;
        palabraConstelacionOpacidad = 0;

        mostrandoConstelaciones = false;
    }

    if (constelacionNumero == 1) {
        constelacion1();
    } else if (constelacionNumero == 2) {
        constelacion2();
    } else if (constelacionNumero == 3) {
        constelacion3();
    } else if (constelacionNumero == 4) {
        constelacion4();
    } else if (constelacionNumero == 5) {
        constelacion5();
    } else if (constelacionNumero == 6) {
        constelacion6();
    } else if (constelacionNumero == 7) {
        constelacion7();
    } else if (constelacionNumero == 8) {
        constelacion8();
    }
}

function quitarSinopsis() {
    if (!vaAObra) {
        if (audioPlanetas) {
            audioPlanetas.play();
        }
    }
    canvas.style.opacity = 1;
    divM.className = 'aparece';

    divSinopsis.className = 'desaparecerAbajo';
    videoTrailer.pause();
    videoOn = false;
    videoTrailerC.className = "desaparece";

    setTimeout(function() {
        if (!sinopsisOn) {
            videoTrailerC.style.display = 'none';
            divMidbo.style.display = 'block';
            divSinopsis.style.display = 'none';
        }

    }, 3000);

    sinopsisOn = false;
    sinopsisArriba = true;

    for (var i = 0; i < planetas.length; i++) {
        var planeta = planetas[i];

        if (planeta.tipo == menuS.tipo) {
            planeta.fondoV.loop();
        }
    }
}

function ponerExplosionIntro() {
    videoFondo.currentTime = 0;
    videoFondo.style.display = 'block';
    videoFondo.className = "aparecerFondo";
    videoFondo.play();

    audioTerremoto.volume = 0;
    audioTerremoto.play();

    window.setTimeout(function() {
        videoFondo.className = "desaparecerFondo";
        videoFondo.style.display = 'none';
        ponerParticulas = true;
        audioPlanetas.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738769395/planetas_clsh8l.mp3?n=1";
        audioPlanetas.currentTime = 0;
        audioPlanetas.play();
        audioTerremoto.volume = 1;
        divM.style.display = 'block';
        divM.className = 'aparece';
        interactividad = true;
        entranPlanetas = false;
        audioOnOff.style.display = "block";
    }, 3400);

    window.setTimeout(function() {
        videoFondo.currentTime = 0;
        videoFondo.pause();
    }, 11000);
}

function ponerNiebla() {
    videoFondo.className = "";
    videoFondo.src = "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738765608/niebla_wqjvoi.mp4";
    videoFondo.style.display = 'block';
    videoFondo.style.opacity = 0.3;
    videoFondo.play();
    videoFondo.loop = true;
}

function quitarNiebla() {
    videoFondo.className = 'desaparecerFondo';
    videoCaida = false;
    videoFondo.style.display = 'none';
}

function ponerSinopsis() {
    canvas.style.opacity = 0;
    videoTrailerC.className = "";
    videoTrailer.className = "";
    audioPlanetas.pause();

    for (var i = 0; i < planetas.length; i++) {
        var planeta = planetas[i];

        if (planeta.tipo == menuS.tipo) {
            planeta.fondoV.pause();
        }
    }

    divMidbo.style.display = 'none';
    proyectoS.fondoV.volume(0);

    divM.className = 'desaparece';

    divSinopsis.style.display = 'block';
    divSinopsis.className = 'aparecerAbajo';
    sinopsisOn = true;

    /*	videoTrailer.src = proyectoS.trailer;
    	videoTrailer.style.display = 'block';
    	videoTrailer.play();
    	videoTrailer.loop = true;*/

    videoTrailerC.style.display = 'block';
    videoTrailerC.style.opacity = 1;
    videoTrailer.src = proyectoS.trailerSrc;
    //videoTrailer.src = proyectoS.trailer.src;
    videoTrailer.style.opacity = 1;
    videoTrailer.style.display = 'block';
    videoTrailer.loop = true;
    videoTrailer.preload = "auto";
    videoTrailer.oncanplay = function() {
        videoTrailer.play();
    }

    tituloSinopsis.innerHTML = proyectoS.tSinopsis;
    textoSinopsis.innerHTML = proyectoS.sinopsis;
}

function ponerDream() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';

    /*divObras.innerHTML = '<iframe src="https://dream.nfb.ca/" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen</iframe>';	*/

    var div = cE("div", divObras);
    div.className = "infoFechas";
    div.innerHTML = "Dream no está disponible en estos momentos. Esta obra hizo parte de la muestra de la Midbo22 entre el 26 de octubre y el 15 de enero de 2020. Te inivitamos a que visites el sitio Web de la National Film Board de Canada para acceder y ver la obra de Vincent Lambert en el siguiente enlace: <a href='https://www.nfb.ca/interactive/dream/' target='_Blank'>https://www.nfb.ca/interactive/dream/</a>"
}

function revisarPais(despuesDeRevisar) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '1-scripts/ip.php');
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xhr.onreadystatechange = null;
            this.responseText;

            var codigoPais = this.responseText;

            console.log(codigoPais);

            if (listaPaises.indexOf(codigoPais) >= 0) {
                despuesDeRevisar(true);
            } else {
                despuesDeRevisar(false);
            }
        }
    };
    xhr.send();
}

function ponderDakarDespuesDeRevision(paisAdmitido) {
    var div = cE("div", divObras);
    div.className = "infoFechas";
    div.innerHTML = "The Other Dakar no está disponible en estos momentos. Esta obra hizo parte de la muestra de la Midbo22 entre el 26 de octubre y el 2 de noviembre de 2020. Te invitamos a ver la obra en el siguiente enlace: <a href='https://www.youtube.com/watch?v=2OhCMhYMazA&ab_channel=TribecaFilmInstitute' target='_Blank'>The Other Dakar</a>"

    /*if(paisAdmitido)
    {
    	divObras.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/wKfckJT3ew4?rel=0&autohide=1&showinfo=0&modestbranding=1&loop=1&playlist=wKfckJT3ew4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    else
    {
    	var div = cE("div", divObras);
    	div.className = "infoFechas";
    	div.innerHTML = "The Other Dakar no está disponible en tu país. Esta obra hizo parte de la muestra de la Midbo22 entre el 26 de octubre y el 2 de noviembre de 2020. Te invitamos a ver la obra en el siguiente enlace: <a href='https://www.youtube.com/watch?v=2OhCMhYMazA&ab_channel=TribecaFilmInstitute' target='_Blank'>The Other Dakar</a>"
    }*/
}

function ponerDakar() {
    revisarPais(ponderDakarDespuesDeRevision)

    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';
    divObras.innerHTML = "";

    /*var div = cE("div", divObras);
    div.className = "infoFechas";
    div.innerHTML = "The Other Dakar estuvo disponible durante la muestra de la Midbo22 entre el 26 de octubre y el 2 de noviembre de 2020. Te inivitamos a que visites el sitio Web de su directora Selly Rabi Kane en el siguiente enlace: <a href='https://sellyrabykane.com/' target='_Blank'>https://sellyrabykane.com/</a>"
	
    divObrasG.style.display = 'block';
    divObras.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/wKfckJT3ew4?rel=0&autohide=1&showinfo=0&modestbranding=1&loop=1&playlist=wKfckJT3ew4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';	*/

    //	divObras.innerHTML = '<iframe src="https://player.vimeo.com/video/472059493?quality=4k" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen></iframe>';	

}

function ponerJaguar() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';
    divObras.innerHTML = '<iframe src="https://www.youtube.com/embed/xyKRKYxVaq4?rel=0&autohide=1&showinfo=0&modestbranding=1&loop=1&playlist=xyKRKYxVaq4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    /*	divObras.innerHTML = '<iframe src="https://player.vimeo.com/video/472329045?quality=4k" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen></iframe>';	*/
}

function ponerVertices() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';
    divObras.innerHTML = '<iframe src="https://vertices.artesonoroenweb.com" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen</iframe>';
}

function ponerSpaceout() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';
    divObras.innerHTML = '<iframe src="https://www.youtube.com/embed/OE7IW8_xxQo?rel=0&autohide=1&showinfo=0&modestbranding=1&loop=1&playlist=OE7IW8_xxQo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


    //divObras.innerHTML = '<iframe src="https://player.vimeo.com/video/471694998?quality=4k" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen></iframe>';	
}

function ponerPromesa() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';

    divObrasG.style.display = 'block';
    divObras.innerHTML = '<iframe src="https://www.youtube.com/embed/uvv_Nww3fgQ?rel=0&autohide=1&showinfo=0&modestbranding=1&loop=1&playlist=uvv_Nww3fgQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    //divObras.innerHTML = '<iframe src="https://player.vimeo.com/video/471715549?quality=4k" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen></iframe>';
}

function ponerN8() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';

    divObras.innerHTML = '<iframe src="https://n8.cara-cara.tv/" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen</iframe>';
}

function ponerPandemic() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';

    divObras.innerHTML = '<iframe src="https://socio-graph.net/outros/Pandemic/network_subs/" frameborder="0" </iframe>';
}

function ponerParasomnias() {
    animar = false;
    quitarSinopsis();

    divObrasG.style.display = 'block';

    var div = cE("div", divObras);
    div.className = "infoFechas";
    div.innerHTML = "Videomapping, evento virtual y presencial en Medellín, Zipaquirá, Bogotá<br>" +
        "SensoLab, laboratorio de experimentación<br>" +
        "Colombia <br><br>" +
        "<span class='infoEvento2'> Esta pieza se presentará el sábado 7 de noviembre, 7:00 p.m.</span><br><br>" +
        "Transmisión en vivo en este espacio de la galería, las redes sociales de la MIDBO @MIDBODOC Facebook Live y Youtube,  y @IDARTES-  Facebook Live.";

}

function ponerVivo() {
    animar = false;
    divObrasG.style.display = 'block';

    divObras.innerHTML = '<iframe src="https://www.youtube.com/embed/GgapNUs1P-0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    //divObras.innerHTML = '<iframe src="https://www.youtube.com/embed/a6Y1H0qOP6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    /*	divObras.innerHTML = '<iframe src="https://www.youtube.com/embed/jEDYsqq-EHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';*/

    /*divObras.innerHTML = '<iframe src="https://www.youtube.com/embed/7gWCbORRo80" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';*/
}