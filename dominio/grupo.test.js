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
	const amigo1 = Amigo('Raul','Efectivo');
	const amigo2 = Amigo('Pedro','Efectivo');
	const listaIntegrantes = [];
	listaIntegrantes.push(amigo1);
	listaIntegrantes.push(amigo2);
	nuevoGrupo.setListaIntegrantes(listaIntegrantes);
	expect(nuevoGrupo.getListaIntegrantes().length).toBe(2);
});

test('cambiar lista integrantes del grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	const amigo1 = new  Amigo('Raul','Efectivo');
	const amigo2 = new Amigo('Pedro','Efectivo');
	const listaIntegrantes = [];
	listaIntegrantes.push(amigo1);
	listaIntegrantes.push(amigo2);
	nuevoGrupo.setListaIntegrantes(listaIntegrantes);
	const amigo3 = Amigo ('George','Efectivo');
	listaIntegrantes.push(amigo3);
	nuevoGrupo.setListaIntegrantes(listaIntegrantes);
	expect(nuevoGrupo.getListaIntegrantes().length).toBe(3);
});

