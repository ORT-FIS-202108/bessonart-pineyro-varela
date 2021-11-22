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
sistema.agregarGrupo("Friends");
let grupoActivo = sistema.getListaGrupos()[0];
grupoActivo.setListaIntegrantes(["Sofi", "Andi", "Luca", "Flor"]);
//grupoActivo.agregarDeuda("sofi", 2000);
//grupoActivo.agregarDeuda("andi", 1000);

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
	if (sistema.listaAmigos.length < 1) {
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
			showSnackbar('Se editó correctamente la lista de amigos');
		}
	} catch (error) {
		showSnackbar(error.message);
	} finally {
		textNombreAmigo.value = '';
		textFavoritoAmigo.value = '';
		mostrarAmigos();
	}
});

//Grupos
const nuevoGrupo = new MDCRipple(document.getElementById('botonGrupoDialago'));
const dialogoGrupo = new MDCDialog(document.getElementById('grupoDialog'));
const dialogoGrupo2 = new MDCDialog(document.getElementById('grupoDialog2'));
nuevoGrupo.listen('click', () => { dialogoGrupo.open(); });


const botonAgregarGrupo = new MDCRipple(document.getElementById('botonAgregarGrupo'));
const textNombreGrupo = new MDCTextField(document.getElementById('textNombreGrupo'));

botonAgregarGrupo.listen('click', () => {
	let nombre = textNombreGrupo.value;
	try {
		if (nombre.trim() === '') {
			showSnackbar('Nombre es un campo requerido.');
		} else {
			sistema.agregarGrupo(nombre, ['hola']);
		}
	} catch (error) {
		showSnackbar(error.message);
	} finally {
		mostrarGrupos();
	}
});

// function borrarGrupo(nombre) {
// 	if (sistema.listaGrupos.length < 1) {
// 		showSnackbar('Error: Debe tener al menos un Grupo');
// 	} else {
// 		sistema.eliminarGrupo(nombre);
// 		cleanNode(document.getElementById('lista-amigos'));
// 		mostrarGrupos();
// 	}
// }
// //>>>>>>> 0671cecd4eb018cd8ef6d10fe53ee5d3709a7ac7
// /*
// const grupoSeleccionado =((grupo) => {
// 	grupoActivo = grupo;
// 	document.querySelector('#nombreGrupo').innerHTML = '${grupo.getNombre()}: Deudas';
// 	const listaDeudas = document.querySelector('#lista-deudas');
// 	for (const deuda in grupo.getDeudas()) {
// 		let nombre = deuda.getNombre();
// 		for (let i = 0; i < deuda.getAmigos().length; i++) {
// 			let amigo = deuda.getAmigos()[i];
// 			let monto = deuda.getMontos()[i];
// 			listaDeudas.insertAdjacentHtml('beforeend', 
// 			`<li class="mdc-list-item" aria-selected="false" data-value="deudas" role="option" onclick=mostrarDeuda(grupo, nombre, i)>
// 				<span class="mdc-list-item__ripple"></span>
// 				<span class="mdc-list-item__text">${nombre} -> ${amigo}: $${monto}</span>
// 			</li>`);
// 		}
// 	}
// });

// const dialogDeuda = new MDCDialog(document.getElementById('deudaDialog'));
// function showDialogDeuda() {
// 	dialogDeuda.open();
// 	document.querySelector('#botonAgregarGasto').classList.remove("sample-content--hidden");
// }

// const mostrarDeuda = ((grupo, nombre, pos) => {
// 	let amigo = deuda.getAmigos()[i];
// 	let monto = deuda.getMontos()[i];
// 	document.querySelector('#deudaDialogContent').innerHTML = '${nombre} -> ${amigo}: $${monto}';
// 	showDialogDeuda();
// });
// */
// //Menu Deudas
// const menu = new MDCMenu(document.querySelector('.mdc-menu'));

// const textDescripcionGasto = new MDCTextField(document.getElementById('descripcionGasto'));
// const textMontoGasto = new MDCTextField(document.getElementById('montoGasto'));
// const dueño = document.querySelector('.mdc-menu-item--selected').value;
// const participantes = [];
// $('input:checkbox:checked').each(function () {
// 	participantes.push($(this).value);
// });
// /*for(let persona in participantes) {
	
// }*/
// const agregarGastoButton = new MDCRipple(document.getElementById('botonAgregarGasto'));
// agregarGastoButton.listen('click', () => {
// 	cargarListaIntegrantes;
// 	cargarCheckBox;
// 	//cargarChips;
// });

// const cargarListaIntegrantes = (() => {
// 	let lista = document.querySelector('#menuIntegrantes');
// 	for (let persona in grupoActivo.getListaIntegrantes()) {
// 		lista.insertAdjacentHtml('beforeend',
// 			`<li class="mdc-list-item" role="menuitem">
//             <span class="mdc-list-item__ripple"></span>
//             <span class="mdc-list-item__text">${persona.getNombre()}</span>
//         </li>`);
// 	}
// 	menu.open = true;
// });

// const cargarCheckBox = (() => {
// 	let lista = document.querySelector('#listaIntegrantes');
// 	let i = 0;
// 	for (let persona in grupoActivo.getListaIntegrantes()) {
// 		lista.insertAdjacentHtml('beforeend',
// 			`<div class="mdc-checkbox">
// 			<input type="checkbox" class="mdc-checkbox__native-control" id="cb-${i}"/>
// 			<div class="mdc-checkbox__background">
// 				<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"> <path class="mdc-checkbox__checkmark-path"
// 					fill="none"
// 					d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
// 				</svg>
// 				<div class="mdc-checkbox__mixedmark"></div>
// 			</div>
// 			<div class="mdc-checkbox__ripple"></div>
// 		</div>
// 		<label for="checkbox-1">persona.getNombre()</label>`);
// 		i++;
// 	}
// });

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

	//Edit integrantes icon
	let icon2 = document.createElement('i');
	icon2.setAttribute('class', 'material-icons mdc-button__icon');
	icon2.innerHTML = 'edit';
	icon2.classList.add('hoverIcon');
	icon2.style.setProperty('position', 'absolute');
	icon2.style.setProperty('top', '5px');
	icon2.style.setProperty('right', '29px');
	icon2.addEventListener('click', function (event) {
		event.stopPropagation();
		editarIntegrantes(nombre);
	});

	card.appendChild(icon);
	card.appendChild(icon2);
	li.appendChild(card);
	document.getElementById('lista-grupos').appendChild(li);
}

function mostrarGrupos() {
	cleanNode(document.getElementById('lista-grupos'));
	if (sistema.listaGrupos.length < 1) {
		cleanNode(document.getElementById('lista-grupos'));
		let h4 = document.createElement('h4');
		h4.innerText = 'No tienes ningún grupo';
		document.getElementById('lista-grupos').appendChild(h4);
	} else {
		sistema.listaGrupos.forEach(item => { agregarGrupo(item.nombre); });
	}
}

function borrarGrupo(nombre) {
	if (sistema.listaGrupos.length < 1) {
		showSnackbar('Error: Debe tener al menos un Grupo');
	} else {
		sistema.eliminarGrupo(nombre);
		cleanNode(document.getElementById('lista-amigos'));
		mostrarGrupos();
	}
}

function showDialogIntegrantes() {
	dialogoGrupo2.open();
}

function agregarIntegrantes(nAmigo, nGrupo) {
	let li = document.createElement('li');
	li.setAttribute('class', 'mdc-list-item');
	let card = document.createElement('div');
	card.setAttribute('class', 'mdc-card');
	card.innerHTML = nAmigo;
	let actions = document.createElement('div');
	actions.setAttribute('class', 'mdc-card__actions');

	if (sistema.estaAmigoEnGrupo(nAmigo, nGrupo)) {
		//cambiar color de fondo de la card

		// Delete icon
		let icon = document.createElement('i');
		icon.setAttribute('class', 'material-icons mdc-button__icon');
		icon.innerHTML = 'delete_outline';
		icon.classList.add('hoverIcon');
		icon.style.setProperty('position', 'absolute');
		icon.style.setProperty('top', '5px');
		icon.style.setProperty('right', '5px');
		const callback = () => {
			sistema.eliminarAmigoDelGrupo(nAmigo, nGrupo);
			showSnackbar(`Se elimino a ${nAmigo} del grupo ${nGrupo}`);
		};
		icon.addEventListener('click', function (event) {
			event.stopPropagation();
			let content = document.createElement('p');
			content.innerHTML = `¿Está seguro que desea eliminar a ${nAmigo} del grupo ${nGrupo}?`;
			showDialog('Eliminar Amigo', content, callback);
		});
		card.appendChild(icon);
	} else {
		// Plus icon
		let icon = document.createElement('i');
		icon.setAttribute('class', 'material-icons mdc-button__icon');
		icon.innerHTML = 'add';
		icon.classList.add('hoverIcon');
		icon.style.setProperty('position', 'absolute');
		icon.style.setProperty('top', '5px');
		icon.style.setProperty('right', '5px');
		const callback = () => {
			sistema.agregarAmigoAlGrupo(nAmigo, nGrupo);
			showSnackbar(`Se agrego a ${nAmigo} al grupo ${nGrupo}`);
		};
		icon.addEventListener('click', function (event) {
			event.stopPropagation();
			let content = document.createElement('p');
			content.innerHTML = `¿Está seguro que desea agregar a ${nAmigo} al grupo ${nGrupo}?`;
			showDialog('Agregar Integrante', content, callback);
		});
		card.appendChild(icon);
	}

	li.appendChild(card);
	document.getElementById('lista-amigos-checkbox').appendChild(li);
}

function editarIntegrantes(nombre) {
	cleanNode(document.getElementById('lista-amigos-checkbox'));
	if (sistema.listaAmigos.length < 1) {
		let h4 = document.createElement('h4');
		h4.innerText = 'No tienes ningún amigo';
		document.getElementById('lista-amigos-checkbox').appendChild(h4);
	} else {
		sistema.listaAmigos.forEach(item => { agregarIntegrantes(item.nombre, nombre); });
	}
	showDialogIntegrantes();
}

function cargarCardsDeudas() {
	const listaDeudas = document.querySelector('#lista-deudas');	
	listaDeudas.innerHTML='';
	for (let i = 0; i < grupoActivo.getListaDeudas().length; i++) {
		let deuda = grupoActivo.getListaDeudas()[i];
		let nombre = deuda.getNombre();
		for (let i = 0; i < deuda.getAmigos().length; i++) {
			let amigo = deuda.getAmigos()[i];
			let monto = deuda.getMontos()[i];
			listaDeudas.insertAdjacentHTML('beforeend', 
			`<div class="mdc-card" style="margin: 10px;height: 5em;display: flex;justify-content: space-evenly;">
				<li class="mdc-list-item" aria-selected="false" data-value="deudas" role="option" onclick=mostrarDeuda(grupo, nombre, i)>
					<span class="mdc-list-item__ripple"></span>
					<span class="mdc-list-item__text">${nombre.toUpperCase()} a ${amigo.toUpperCase()}: $${monto}</span>
				</li>
			</div>`);
		}
	}	
};

const grupoSeleccionado =((grupo) => {
	grupoActivo = grupo;
	document.querySelector('#nombreGrupo').innerHTML = grupo.getNombre();
	document.querySelector('#botonAgregarGasto').classList.remove("sample-content--hidden");
	cargarCardsDeudas();
});

//Deudas
const dialogDeuda = new MDCDialog(document.getElementById('deudaDialog'));
function showDialogDeuda() {
	dialogDeuda.open();
}

const mostrarDeuda = ((grupo, nombre, pos) => {
	let deuda = grupo.getListaDeudas()[grupo.getDeudaDe(nombre)];
	let amigo = deuda.getAmigos()[pos];
	let monto = deuda.getMontos()[pos];
	document.querySelector('#deudaDialogContent').innerHTML = '${nombre} -> ${amigo}: $${monto}';
	showDialogDeuda();
});

const dialogGasto = new MDCDialog(document.getElementById('gastoDialog'));
function showDialogGasto() {
	dialogGasto.open();
}

const descripcion = new MDCTextField(document.getElementById('descripcionGasto'));
const gasto = new MDCTextField(document.getElementById('montoGasto'));

const agregarGastoButton = new MDCRipple(document.getElementById('botonAgregarGasto'));
agregarGastoButton.listen('click', () => {
	showDialogGasto();
	cargarListaIntegrantes();
});

const gastoAgregarButton = new MDCRipple(document.getElementById('gastoAgregarButton'));
gastoAgregarButton.listen('click', () => {
	let nombre = document.querySelector('input[name="integrantes"]:checked').id;
	let monto = gasto.value;
	try {
		if (monto.trim() === '') {
			showSnackbar('Debe indicar el monto total');
		} else  if(descripcion.value.trim() === ''){
			showSnackbar('Debe ingresar una descripción');
		} else{
			grupoActivo.agregarDeuda(nombre, monto);
			showSnackbar('Se agregó correctamente el gasto');
		}
	} catch (error) {
		showSnackbar(error.message);
	} finally {
		descripcion.value='';
		gasto.value='';
		cargarCardsDeudas();
	}
});


function cargarListaIntegrantes() {
	let lista = document.getElementById('lista-pago');
	lista.innerHTML='';
	let listaPersonas = grupoActivo.getListaIntegrantes();
	for (let i = 0; i < listaPersonas.length; i++) {
		lista.insertAdjacentHTML('beforeend', `
		<div style="display: flex;">
			<div class="mdc-radio">
				<input class="mdc-radio__native-control" type="radio" id="${listaPersonas[i]}" name="integrantes">
				<div class="mdc-radio__background">
					<div class="mdc-radio__outer-circle"></div>
					<div class="mdc-radio__inner-circle"></div>
				</div>
				<div class="mdc-radio__ripple"></div>
			</div>
			<label for="${listaPersonas[i]}" style="margin-left: 10px;">${listaPersonas[i]}</label>
		</div>`);	
		if(i === 0) {
			document.getElementById(listaPersonas[i]).checked = true;
		}
	}
};
