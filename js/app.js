var imgs = [
  'http://www.gigasmiley.com/assets/img/produit/GigaSmiley.4c4207c44e5fa18f4fbbdff8c355a3f0.jpg',
  'http://38.media.tumblr.com/avatar_8f1ac442d592_128.png',
  'http://papillonvolant.p.a.pic.centerblog.net/s1vh7z1n.jpg',
  'https://33.media.tumblr.com/avatar_17135998b3f5_128.png',
  'https://33.media.tumblr.com/avatar_52e80e3ad564_128.png',
  'http://38.media.tumblr.com/avatar_1d84667d2b3a_128.png',
  'http://38.media.tumblr.com/avatar_77caa9553877_128.png',
  'http://ediogames.com/uploaded_files/avatars/a54b5695412c7e55d449f1146cd2a6ab128.png'
];

// récupérer les balises img et button par leur ID
var balise_img   = $('#slider') ;
var bouton_suiv  = $('#nextBtn') ;
var bouton_prec  = $('#prevBtn') ;
var bouton_start = $('#startBtn') ;
//var bouton_stop  = $('#stopBtn') ;

var numero_image = 0;

function gestionClickSuivant() {
	// augmenter de 1 le numéro de l'image en cours
	if ( numero_image < imgs.length-1 ) {
		numero_image++;
	} else {
		// mettre le numero de l'image en cours à la 1ere image
		numero_image = 0 ;
	}
	// afficher l'image en cours
	// console.log("numero_image : " + numero_image);
	balise_img.attr('src', imgs[numero_image]);
}

function gestionClickPrecedent() {
	// diminue de 1 le numéro de l'image en cours
	if ( numero_image > 0 ) {
		numero_image--;
	} else {
		// mettre le numero de l'image en cours à la derniere image
		numero_image = imgs.length-1 ;
	}
	// afficher l'image en cours
	// console.log("numero_image : " + numero_image);
	balise_img.attr('src', imgs[numero_image]);
}

var id_timer; // var id_timer = 0

function gestionClickStart() {
	if ( !id_timer ) { // if ( id_timer == 0)
		id_timer = window.setInterval(gestionClickSuivant,500);
		console.log("id_timer : " + id_timer);
	}
}

function gestionClickStop() {
	window.clearInterval(id_timer);
	id_timer = undefined ; // id_timer = 0
}

// affiche la 1ere image
balise_img.attr('src', imgs[0]);

// abonnements des fonctions aux clicks sur les boutons
bouton_suiv.on('click', gestionClickSuivant);
bouton_prec.click(gestionClickPrecedent);
bouton_start.on('click', gestionClickStart);
$('#stopBtn').click(gestionClickStop);
