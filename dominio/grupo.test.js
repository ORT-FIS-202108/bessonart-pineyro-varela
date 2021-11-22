import Amigo from './amigo.js';

test('creación de grupo', () => {
	const nuevoGrupo = new Grupo('NombreGrupo');
	expect(nuevoGrupo.nombre).toBe('NombreGrupo');
	expect(nuevoGrupo.listaIntegrantes.length).toBe(0);
	expect(nuevoGrupo.listaDeudas.length).toBe(0);
});

test('obtener amigo', () => {
	const nuevoAmigo = new Amigo('NombreAmigo','MetodoDePagoFavorito');
	nuevoAmigo.setNombre('amigo');
	nuevoAmigo.setFavorito('favorito');
	const amigoEsperado = {nombre: 'amigo', favorito: 'favorito'};
	expect(nuevoAmigo.getAmigo()).toStrictEqual(amigoEsperado);
});

test('obtener nombre de amigo', () => {
	const nuevoAmigo = new Amigo('NombreAmigo','MetodoDePagoFavorito');
	expect(nuevoAmigo.getNombre()).toBe('NombreAmigo');
});

test('cambiar nombre de amigo', () => {
	const nuevoAmigo = new Amigo('NombreAmigo','MetodoDePagoFavorito');
	nuevoAmigo.setNombre('OtroNombre');
	expect(nuevoAmigo.getNombre()).toBe('OtroNombre');
});

test('obtener metodo de pago favorito del amigo', () => {
	const nuevoAmigo = new Amigo('NombreAmigo','MetodoDePagoFavorito');
	expect(nuevoAmigo.getFavorito()).toBe('MetodoDePagoFavorito');
});