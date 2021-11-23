import Amigo from './amigo.js';
import Grupo from './grupo.js';
import Sistema from './sistema.js';

beforeAll(() => {
	const amigo1 = new Amigo('amigo1', 'MetodoDePagoFavorito');
	const amigo2 = new Amigo('amigo2', 'MetodoDePagoFavorito');
	const grupo1 = new Grupo('grupo1');
	grupo1.agregarAmigo(amigo1);
});

test('constructor', () => {
	const sistema = new Sistema();
	const yo = new Amigo('YO', '');
	expect(sistema.listaAmigos).toStrictEqual([yo]);
	expect(sistema.listaGrupos).toStrictEqual([]);
});

test('setListaGrupos', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.setListaGrupos([grupo1]);
	expect(sistema.listaGrupos).toStrictEqual([grupo1]);
});

test('getListaGrupos', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.setListaGrupos([grupo1]);
	expect(sistema.getListaGrupos()).toStrictEqual([grupo1]);
});

test('agregarGrupo sin nombre ya ingresado', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	expect(sistema.listaGrupos[0]).toStrictEqual(grupo1);
});

test('agregarGrupo con nombre ya ingresado', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	expect(() => { sistema.agregarGrupo('grupo1'); }).toThrow('Ya existe un grupo con nombre grupo1.');
});

test('getGrupoByName cuando existe el grupo', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	expect(sistema.getGrupoByName('grupo1')).toStrictEqual(grupo1);
});

test('getGrupoByName cuando no existe el grupos', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	expect(sistema.getGrupoByName('grupo1')).toBeNull();
});

test('getGrupoByName cuando existen varios grupo', () => {
	const grupo1 = new Grupo('grupo1');
	const grupo2 = new Grupo('grupo2');
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	sistema.agregarGrupo('grupo2');
	expect(sistema.getGrupoByName('grupo2')).toStrictEqual(grupo2);
});

test('eliminarGrupo', () => {
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	sistema.eliminarGrupo('grupo1');
	expect(sistema.getGrupoByName('grupo1')).toBeNull();
});

test('eliminarGrupo cuando no hay grupos', () => {
	const sistema = new Sistema();
	expect(() => { sistema.eliminarGrupo('grupo1'); }).toThrow('No existe un amigo con el nombre grupo1.');
});

test('eliminarGrupo cuando hay grupos pero no el que voy a eliminar', () => {
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	expect(() => { sistema.eliminarGrupo('grupo2'); }).toThrow('No existe un amigo con el nombre grupo2.');
});

test('agregarAmigo sin nombre ya ingresado', () => {
	const amigo1 = new Amigo('amigo1', 'MetodoDePagoFavorito');
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito');
	expect(sistema.listaAmigos[1]).toStrictEqual(amigo1);
});

test('agregarAmigo sin nombre ya ingresado, existiendo amigos con otros nombres', () => {
	const amigo1 = new Amigo('amigo1', 'MetodoDePagoFavorito');
	const amigo2 = new Amigo('amigo2', 'MetodoDePagoFavorito2');
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito');
	sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito2');
	expect(() => { sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito2'); }).toThrow('Ya existe un amigo con nombre amigo2.');
});

test('agregarAmigo con nombre ya ingresado', () => {
	const amigo1 = new Amigo('amigo1', 'MetodoDePagoFavorito');
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito');
	expect(() => { sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito'); }).toThrow('Ya existe un amigo con nombre amigo1.');
});

test('getAmigoByName', () => {
	const amigo1 = new Amigo('amigo1', 'MetodoDePagoFavorito');
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito');
	expect(sistema.getAmigoByName('amigo1')).toStrictEqual(amigo1);
});

test('eliminarAmigo que esta en el sistema y no en un grupo', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito');
	sistema.agregarGrupo('grupo1');
	sistema.eliminarAmigo('amigo1');
	expect(sistema.getAmigoByName('amigo1')).toBeNull();
	expect(grupo1.amigoPertenece('amigo1')).toBeFalsy();
});

test('eliminarAmigo que esta en el sistema y en un grupo', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito');
	sistema.agregarGrupo('grupo1');
	sistema.agregarAmigoAlGrupo('amigo1', 'grupo1');
	sistema.eliminarAmigo('amigo1');
	expect(sistema.getAmigoByName('amigo1')).toBeNull();
	expect(grupo1.amigoPertenece('amigo1')).toBeFalsy();
});

test('eliminarAmigo que NO esta en el sistema y esta solo "Yo" en la lista', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	expect(() => { sistema.eliminarAmigo('amigo1'); }).toThrow('No existe un amigo con el nombre amigo1.');
});

test('eliminarAmigo que NO esta en el sistema y el largo de la lista de amigos es mayor a 1', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito');
	expect(() => { sistema.eliminarAmigo('amigo1'); }).toThrow('No existe un amigo con el nombre amigo1.');
});

test('eliminarAmigo que esta en el sistema y no en un grupo', () => {
	const grupo1 = new Grupo('grupo1');
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo1', 'MetodoDePagoFavorito');
	sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito');
	sistema.agregarGrupo('grupo1');
	sistema.eliminarAmigo('amigo2');
	expect(sistema.getAmigoByName('amigo2')).toBeNull();
	expect(grupo1.amigoPertenece('amigo2')).toBeFalsy();
});

test('agregarAmigoAlGrupo cuando existe amigo y grupo', () => {
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito');
	sistema.agregarGrupo('grupo1');
	sistema.agregarAmigoAlGrupo('amigo2', 'grupo1');
	expect(sistema.getGrupoByName('grupo1').amigoPertenece('amigo2')).toBeTruthy();
});

test('agregarAmigoAlGrupo cuando no existe amigo y existe grupo', () => {
	const sistema = new Sistema();
	sistema.agregarGrupo('grupo1');
	expect(() => { sistema.agregarAmigoAlGrupo('amigo2', 'grupo1'); }).toThrow('No existe un amigo con el nombre amigo2.');
});

test('agregarAmigoAlGrupo cuando existe amigo y no existe grupo', () => {
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito');
	expect(() => { sistema.agregarAmigoAlGrupo('amigo2', 'grupo1'); }).toThrow('No existe un grupo con el nombre grupo1.');
});

test('estaAmigoEnGrupo', () => {
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito');
	sistema.agregarGrupo('grupo1');
	sistema.agregarAmigoAlGrupo('amigo2', 'grupo1');
	expect(sistema.estaAmigoEnGrupo('amigo2', 'grupo1')).toBeTruthy();
});


test('eliminarAmigoDelGrupo', () => {
	const sistema = new Sistema();
	sistema.agregarAmigo('amigo2', 'MetodoDePagoFavorito');
	sistema.agregarGrupo('grupo1');
	sistema.agregarAmigoAlGrupo('amigo2', 'grupo1');
	sistema.eliminarAmigoDelGrupo('amigo2', 'grupo1');
	expect(sistema.estaAmigoEnGrupo('amigo2', 'grupo1')).toBe(false);
});

