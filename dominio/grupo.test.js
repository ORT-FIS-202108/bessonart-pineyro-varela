import Amigo from './amigo.js';
import Grupo from './grupo.js';
import Deuda from './deuda.js';

test('creación de grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	expect(nuevoGrupo.nombre).toBe('NombreGrupo');
	expect(nuevoGrupo.listaIntegrantes.length).toBe(0);
	expect(nuevoGrupo.listaDeudas.length).toBe(0);
});

test('obtener grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	nuevoGrupo.setNombre('OtroGrupo');
	const grupoEsperado = {nombre: 'OtroGrupo', listaIntegrantes: [], listaDeudas: []};
	expect(nuevoGrupo.getGrupo()).toStrictEqual(grupoEsperado);
});

test('obtener nombre de grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	expect(nuevoGrupo.getNombre()).toBe('NombreGrupo');
});

test('cambiar nombre de grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	nuevoGrupo.setNombre('OtroNombre');
	expect(nuevoGrupo.getNombre()).toBe('OtroNombre');
});

test('obtener lista integrantes del grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	const amigo2 = new Amigo('Pedro','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	nuevoGrupo.agregarAmigo(amigo2);
	expect(nuevoGrupo.getListaIntegrantes().length).toBe(2);
});

test('agregar amigo al grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	expect(nuevoGrupo.getListaIntegrantes().length).toBe(1);
});

test('obtener cantidad de integrantes del grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	expect(nuevoGrupo.cantidadIntegrantes()).toBe(1);
});

test('obtener la cantidad deudas del grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	nuevoGrupo.agregarDeuda(amigo1.getNombre(),1200);
	expect(nuevoGrupo.getCantidadDeudas()).toBe(1);
});

test('obtener las deudas de un amigo en el grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	const amigo2 = new Amigo('Luis','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	nuevoGrupo.agregarAmigo(amigo2);
	nuevoGrupo.agregarDeuda(amigo1.getNombre(),1200);
	expect(nuevoGrupo.getDeudaDe(amigo2)).toBe(1);
});

test('verificar si un amigo pertenece al grupo: FALSE', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	expect(nuevoGrupo.amigoPertenece('Juan')).toBeFalsy();
});

test('verificar si un amigo pertenece al grupo: TRUE', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	expect(nuevoGrupo.amigoPertenece('Raul')).toBeTruthy();
});

test('eliminar amigo del grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	nuevoGrupo.eliminarAmigo(amigo1);
	expect(nuevoGrupo.amigoPertenece('Raul')).toBeFalsy();
});

test('agregar deuda al grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	const amigo2 = new Amigo('Luis','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	nuevoGrupo.agregarAmigo(amigo2);
	nuevoGrupo.agregarDeuda(amigo1.getNombre(),1200);
	nuevoGrupo.agregarDeuda(amigo2.getNombre(),1500);
	expect(nuevoGrupo.listaDeudas.length).toBe(2);
});

test('eliminar deuda del grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	const amigo2 = new Amigo('Luis','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	nuevoGrupo.agregarAmigo(amigo2);
	nuevoGrupo.agregarDeuda(amigo1.getNombre(),1200);
	nuevoGrupo.eliminarDeuda(amigo2, 0);
	expect(nuevoGrupo.listaDeudas.length).toBe(0);
});

test('balancear', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new Amigo('Raul','Efectivo');
	const amigo2 = new Amigo('Luis','Efectivo');
	const amigo3 = new Amigo('Juan','Efectivo');
	const amigo4 = new Amigo('Pedro','Efectivo');
	nuevoGrupo.agregarAmigo(amigo1);
	nuevoGrupo.agregarAmigo(amigo2);
	nuevoGrupo.agregarAmigo(amigo3);
	nuevoGrupo.agregarAmigo(amigo4);
	nuevoGrupo.agregarDeuda(amigo1.getNombre(),1200);
	nuevoGrupo.agregarDeuda(amigo2.getNombre(),1200);
	nuevoGrupo.balancear();
	expect(nuevoGrupo.listaDeudas.length).toBe(2);
});



