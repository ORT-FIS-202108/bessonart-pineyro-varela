import Amigo from './amigo.js';

test('creación de amigo', () => {
	const nuevoAmigo = new Amigo('NombreAmigo','MetodoDePagoFavorito');
	expect(nuevoAmigo.nombre).toBe('NombreAmigo');
	expect(nuevoAmigo.favorito).toBe('MetodoDePagoFavorito');
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
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	expect(nuevoUsuario.getEmail()).toBe('NombreUsuario@gmail.com');
});

test('cambiar email de usuario', () => {
	const nuevoAmigo = new Amigo('NombreAmigo','MetodoDePagoFavorito');
	nuevoAmigo.setEmail('OtroMetodo');
	expect(nuevoAmigo.getFavorito()).toBe('OtroMetodo');
});
