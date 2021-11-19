import { MDCTabBar } from '@material/tab-bar';
import { MDCDialog } from '@material/dialog';
import { MDCSnackbar } from '@material/snackbar';
import { MDCSelect } from '@material/select';
import { MDCRipple } from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';

import Amigo from '../../dominio/amigo.js';
import Grupo from '../../dominio/grupo.js';
import Sistema from '../../dominio/sistema.js';

import { cleanNode, createData, getImagenProd } from './utils';

// Creacion de datos.

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
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
function showDialog(title, content, callback) {
	const dialogTitle = document.querySelector('#alertDialogTitle');
	const dialogContent = document.querySelector('#alertDialogContent');
	const dialogCallback = document.querySelector('#alertDialogButton');

	cleanNode(dialogContent);

	dialogTitle.innerHTML = title;
	content.style = 'margin-top: 20px;';
	dialogContent.appendChild(content);
	dialogCallback.onclick = callback;
	dialog.open();
}


// Snackbar
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
function showSnackbar(texto) {
	document.querySelector('#snackBarText').innerHTML = texto;
	snackbar.open();
	setTimeout(() => { snackbar.close(); }, 3000);
}

//--------------------------------------------------------------------------------------------------------------------
//AgregarAmigo
const fabAmigo = new MDCRipple(document.getElementById('botonAgregarAmigo'));
fabAmigo.listen('click', () => { showDialogAmigo(); });

const dialogAmigo = new MDCDialog(document.getElementById('amigoDialog'));
function showDialogAmigo() {
	dialogAmigo.open();

	//Implementacion select dialogo amigos
	const select = new MDCSelect(document.getElementById('selectFavorito'));

	select.listen('MDCSelect:change', () => {
		alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
	});
}



//-------------------------------------------------------------------------------------------------------------------------

// Editar nombre de lista en Lista principal
function editarLista(nombreLista) {
	const input = document.createElement('input');
	input.id = 'inputDialogNombreLista';
	input.type = 'text';
	input.style = 'width: 200px; height: 25px;';
	input.value = nombreLista;

	const label = document.createElement('label');
	label.innerHTML = 'Nombre:';
	label.style = 'padding-right: 15px;';

	const dialogContent = document.createElement('div');
	dialogContent.appendChild(label);
	dialogContent.appendChild(input);
	document.querySelector('.mdc-snackbar').style = 'z-index: 1000;';

	const callback = () => {
		try {
			let nuevoNombre = input.value;
			if (nuevoNombre.trim() === '') {
				showSnackbar('Nombre es un campo requerido.');
			} else {
				usuario.cambiarNombreLista(nombreLista, nuevoNombre);
				listaActual = usuario.getListaPrincipal()[0];
				setListaActual(listaActual);
				dibujarListaPrincipal();
				showSnackbar(`Se edito correctamente la lista`);
			}
		} catch (error) {
			showSnackbar(error.message);
		}
	};
	showDialog('Editar Lista', dialogContent, callback);
}

// Agregar lista nueva a lista principal
function crearLista() {
	const input = document.createElement('input');
	input.id = 'inputDialogNombreLista';
	input.type = 'text';
	input.style = 'width: 200px; height: 25px;';

	const label = document.createElement('label');
	label.innerHTML = 'Nombre:';
	label.style = 'padding-right: 15px;';

	const dialogContent = document.createElement('div');
	dialogContent.appendChild(label);
	dialogContent.appendChild(input);
	document.querySelector('.mdc-snackbar').style = 'z-index: 1000;';

	const callback = () => {
		try {
			let nuevoNombre = input.value;
			if (nuevoNombre.trim() === '') {
				showSnackbar('No se puede crear una lista sin nombre.');
			} else {
				try {
					usuario.añadirListaAListaPrincipal(input.value);
					dibujarListaPrincipal();
					showSnackbar(`Se creo ${input.value} correctamente`);
				} catch (error) {
					showSnackbar(error.message);
				}
			}
		} catch (error) {
			showSnackbar(error.message);
		}
	};
	showDialog('Crear Lista', dialogContent, callback);
}


function eliminarListaDeListaPrincipal(nombreLista) {
	if (usuario.listaPrincipal.length <= 1) {
		showSnackbar('Error: Debe tener al menos una lista');
	} else {
		usuario.eliminarListaDeListaPrincipal(nombreLista);
		listaActual = usuario.getListaPrincipal()[0];
		setListaActual(listaActual);
		dibujarListaPrincipal();
	}
}

function dibujarListaPrincipal() {
	cleanNode(document.querySelector('#lista-listas'));
	listaPrincipal = usuario.getListaPrincipal();
	listaPrincipal.forEach(item => { agregarListaAListaPrincipal(item.nombre); });
}

const botonAgregarLista = document.querySelector('#botonAgregarLista');
botonAgregarLista.addEventListener('click', crearLista);


//Ventana modal
const ventanaModal = (producto, imagen) => {
	const modal = document.getElementById('tvesModal');
	const span = document.getElementsByClassName('close')[0];
	const body = document.getElementsByTagName('body')[0];
	const btnAniadir = document.getElementById('btn-aniadir-modal');
	const btnDescartar = document.getElementById('btn-descartar-modal');

	modal.style.display = 'block';
	body.style.position = 'static';
	body.style.height = '100%';
	body.style.overflow = 'hidden';

	//Mostrar nombre del producto seleccionado.
	const nombreProducto = document.getElementById('nombreProducto');
	cleanNode(nombreProducto);
	const nombreProd = document.createTextNode(producto.nombre);
	nombreProducto.appendChild(nombreProd);

	//Mostrar imagen del producto seleccionado.
	const imgProducto = document.getElementById('imagenProducto');
	imgProducto.src = imagen;
	imgProducto.style = 'height: 80px; width: 80px;';

	//Mostrar descripcion del producto seleccionado.
	const descProducto = document.getElementById('descripcion-producto');
	cleanNode(descProducto);
	const descProd = document.createTextNode(producto.descripcion);
	descProducto.appendChild(descProd);

	//Obtener cantidad del producto
	const cantidad = document.getElementById('cantidadProducto');
	cantidad.value = 0;
	let cantidadActual = 0;
	cantidad.addEventListener('input', (e) => {
		cantidadActual = parseInt(e.currentTarget.value);
		document.querySelector('#cantidadProducto').style = 'border: 1px solid grey;';
	});
	const selectProv = document.getElementById('selectProveedores');
	cleanNode(selectProv);
	const optionDefault = document.createElement('option');
	const optionTextDefault = document.createTextNode('Seleccionar proveedor');
	optionDefault.appendChild(optionTextDefault);
	optionDefault.value = '';
	selectProv.appendChild(optionDefault);
	producto.proveedores.map(pr => {
		const option = document.createElement('option');
		const optionText = document.createTextNode(pr.nombre);
		option.appendChild(optionText);
		option.value = pr.nombre;
		selectProv.appendChild(option);
	});

	//Obtener precio del producto segun proveedor seleccionado
	const precio = document.querySelector('#precio-producto');
	precio.textContent = '$0';
	const selectElementCant = document.querySelector('#cantidadProducto');
	selectElementCant.addEventListener('change', (event) => {
		const cantidadProd = `${event.target.value}`;
		const selectElementProv = document.querySelector('#selectProveedores');
		selectElementProv.addEventListener('change', (event) => {
			document.querySelector('#selectProveedores').style = 'border: 1px solid grey;';
			const proveedorS = proveedores.find(pr => pr.nombre === `${event.target.value}`);
			const productoEnProv = proveedorS.productos.find(p => p.producto.nombre === producto.nombre);
			const precioProdProv = parseInt(productoEnProv.precio);
			const pNuevo = document.querySelector('#precio-producto');
			pNuevo.textContent = '$' + cantidadProd * precioProdProv;
		});
	});

	const selectElementProv = document.querySelector('#selectProveedores');
	selectElementProv.addEventListener('change', (event) => {
		const proveedorS = proveedores.find(pr => pr.nombre === `${event.target.value}`);
		const productoEnProv = proveedorS.productos.find(p => p.producto.nombre === producto.nombre);
		const precioProdProv = parseInt(productoEnProv.precio);
		const selectElementCant = document.querySelector('#cantidadProducto');
		selectElementCant.addEventListener('change', (event) => {
			const cantidadProd = `${event.target.value}`;
			const pNuevo = document.querySelector('#precio-producto');
			pNuevo.textContent = '$' + cantidadProd * precioProdProv;
		});
	});

	btnAniadir.onclick = function () {
		const proveedor = proveedores.find(pr => pr.nombre === selectProv.value);
		try {
			if (cantidadActual <= 0) {
				showSnackbar('La cantidad a agregar debe ser mayor a 0.');
				document.querySelector('#cantidadProducto').style = 'border: 2px solid red;';
			} else {
				if (!proveedor) {
					showSnackbar('Debes elegir un proveedor para poder agregar el producto.');
					document.querySelector('#selectProveedores').style = 'border: 2px solid red;';
				} else {
					listaActual.setProducto(producto, cantidadActual, proveedor);
					setListaActual(listaActual);
					showSnackbar(`Se agrego el producto ${producto.nombre} a la lista ${listaActual.nombre}`);
					btnDescartar.click();
				}
			}
		} catch (error) {
			showSnackbar(error.message);
		}
	};

	btnDescartar.onclick = function () {
		modal.style.display = 'none';
		body.style.position = 'inherit';
		body.style.height = 'auto';
		body.style.overflow = 'visible';
	};

	span.onclick = function () {
		modal.style.display = 'none';
		body.style.position = 'inherit';
		body.style.height = 'auto';
		body.style.overflow = 'visible';
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
			body.style.position = 'inherit';
			body.style.height = 'auto';
			body.style.overflow = 'visible';
		}
	};
};

setListaActual(listaActual);
dibujarListaPrincipal();
dibujarListaProductosTotales(productos);


