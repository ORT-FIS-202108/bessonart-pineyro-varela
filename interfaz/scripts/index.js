import { MDCTabBar } from '@material/tab-bar';
import { MDCDialog } from '@material/dialog';
import { MDCSnackbar } from '@material/snackbar';
import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTextField } from '@material/textfield';

import Sistema from '../../dominio/sistema.js';

import { cleanNode } from './utils';

// Creacion de datos.
const sistema = new Sistema();

// Setea valores iniciales para mostrar

//Top Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

//Tab Bar
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
	document.querySelectorAll('.content').forEach((element, index) => {
		if (index === activatedEvent.detail.index) {
			element.classList.remove('sample-content--hidden');
		} else {
			element.classList.add('sample-content--hidden');
		}
	});
});


// Dialog
const alertDialog = new MDCDialog(document.getElementById('alertDialog'));
function showDialog(title, content, callback) {
	const dialogTitle = document.querySelector('#alertDialogTitle');
	const dialogContent = document.querySelector('#alertDialogContent');
	const dialogCallback = document.querySelector('#alertDialogButton');

	cleanNode(dialogContent);

	dialogTitle.innerHTML = title;
	content.style = 'margin-top: 20px;';
	dialogContent.appendChild(content);
	dialogCallback.onclick = callback;
	alertDialog.open();
}


// Snackbar
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
function showSnackbar(texto) {
	document.querySelector('#snackBarText').innerHTML = texto;
	snackbar.open();
	setTimeout(() => { snackbar.close(); }, 3000);
}


//Amigo
const fabAmigo = new MDCRipple(document.getElementById('botonAgregarAmigo'));
fabAmigo.listen('click', () => { showDialogAmigo(); });

const dialogAmigo = new MDCDialog(document.getElementById('amigoDialog'));
function showDialogAmigo() {
	dialogAmigo.open();
}

function mostrarAmigos() {
	cleanNode(document.getElementById('lista-amigos'));
	if (sistema.listaAmigos.length < 1 ) {
		cleanNode(document.getElementById('lista-amigos'));
		let h4 = document.createElement('h4');
		h4.innerText = 'No tienes ningún amigo';
		document.getElementById('lista-amigos').appendChild(h4);
	} else {
		sistema.listaAmigos.forEach(item => { agregarAmigo(item.nombre); });
	}
}



function borrarAmigo(nombre) {
	if (sistema.listaAmigos.length < 1) {
		showSnackbar('Error: Debe tener al menos un amigo');
	} else {
		sistema.eliminarAmigo(nombre);
		cleanNode(document.getElementById('lista-amigos'));
		mostrarAmigos();
	}
}

function agregarAmigo(nombre) {
	let li = document.createElement('li');
	li.setAttribute('class', 'mdc-list-item');
	let card = document.createElement('div');
	card.setAttribute('class', 'mdc-card');
	card.innerHTML = nombre;
	console.log(nombre);
	let actions = document.createElement('div');
	actions.setAttribute('class', 'mdc-card__actions');

	// Delete icon
	let icon = document.createElement('i');
	icon.setAttribute('class', 'material-icons mdc-button__icon');
	icon.innerHTML = 'delete_outline';
	icon.classList.add('hoverIcon');
	icon.style.setProperty('position', 'absolute');
	icon.style.setProperty('top', '5px');
	icon.style.setProperty('right', '5px');
	const callback = () => {
		borrarAmigo(nombre);
		showSnackbar(`Se elimino a ${nombre} de tus amigos`);
	};
	icon.addEventListener('click', function (event) {
		event.stopPropagation();
		let content = document.createElement('p');
		content.innerHTML = `¿Está seguro que desea eliminar a ${nombre}?`;
		showDialog('Eliminar Amigo', content, callback);
	});

	card.appendChild(icon);
	li.appendChild(card);
	document.getElementById('lista-amigos').appendChild(li);
}

const textNombreAmigo = new MDCTextField(document.getElementById('textNombreAmigo'));
const textFavoritoAmigo = new MDCTextField(document.getElementById('textFavoritoAmigo'));
const amigoAgregarButton = new MDCRipple(document.getElementById('amigoAgregarButton'));


amigoAgregarButton.listen('click', () => {
	let nombre = textNombreAmigo.value;
	let favorito = textFavoritoAmigo.value;
	try {
		if (nombre.trim() === '') {
			showSnackbar('Nombre es un campo requerido.');
		} else {
			if (favorito.trim() === '') {
				favorito = 'Ninguno';
			}
			sistema.agregarAmigo(nombre, favorito);
			showSnackbar('Se edito correctamente la lista de amigos');
		}
	} catch (error) {
		showSnackbar(error.message);
	} finally {
		textNombreAmigo.value='';
		textFavoritoAmigo.value='';
		mostrarAmigos();
	}
});
//Grupos
const nuevoGrupo = new MDCRipple(document.getElementById('botonGrupoDialago'));
const dialogoGrupo = new MDCDialog(document.getElementById('grupoDialog'));
nuevoGrupo.listen('click', () => { dialogoGrupo.open(); });


const botonAgregarGrupo = new MDCRipple(document.getElementById('botonAgregarGrupo'));
const textNombreGrupo = new MDCTextField(document.getElementById('textNombreGrupo'));

botonAgregarGrupo.listen('click', () => {
	let nombre = textNombreGrupo.value;
	try {
		if (nombre.trim() === '') {
			showSnackbar('Nombre es un campo requerido.');
		} else {	
			sistema.agregarGrupo(nombre,['hola']);
		}
	} catch (error) {
		showSnackbar(error.message);
	} finally {
		mostrarGrupos();
	}
});

function borrarGrupo(nombre) {
	if (sistema.listaGrupos.length < 1) {
		showSnackbar('Error: Debe tener al menos un Grupo');
	} else {
		sistema.eliminarGrupo(nombre);
		cleanNode(document.getElementById('lista-amigos'));
		mostrarGrupos();
	}
}



function agregarGrupo(nombre) {
	let li = document.createElement('li');
	li.setAttribute('class', 'mdc-list-item');
	let card = document.createElement('div');
	card.setAttribute('class', 'mdc-card');
	card.innerHTML = nombre;
	console.log(nombre);
	let actions = document.createElement('div');
	actions.setAttribute('class', 'mdc-card__actions');

	// Delete icon
	let icon = document.createElement('i');
	icon.setAttribute('class', 'material-icons mdc-button__icon');
	icon.innerHTML = 'delete_outline';
	icon.classList.add('hoverIcon');
	icon.style.setProperty('position', 'absolute');
	icon.style.setProperty('top', '5px');
	icon.style.setProperty('right', '5px');
	const callback = () => {
		borrarGrupo(nombre);
		showSnackbar(`Se elimino a ${nombre} de tus grupos`);
	};
	icon.addEventListener('click', function (event) {
		event.stopPropagation();
		let content = document.createElement('p');
		content.innerHTML = `¿Está seguro que desea eliminar  ${nombre}?`;
		showDialog('Eliminar Grupo', content, callback);
	});

	card.appendChild(icon);
	li.appendChild(card);
	document.getElementById('lista-grupos').appendChild(li);
}
function mostrarGrupos() {
	cleanNode(document.getElementById('lista-grupos'));
	if (sistema.listaGrupos.length < 1 ) {
		cleanNode(document.getElementById('lista-grupos'));
		let h4 = document.createElement('h4');
		h4.innerText = 'No tienes ningún grupo';
		document.getElementById('lista-grupos').appendChild(h4);
	} else {
		sistema.listaGrupos.forEach(item => { agregarGrupo(item.nombre); });
	}
}