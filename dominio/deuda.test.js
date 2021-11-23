import Deuda from './deuda.js';
import Amigo from './amigo.js';

test('creación de deuda', () => {
	const nuevaDeuda = new Deuda('NombreDeudor');
	expect(nuevaDeuda.nombre).toBe('NombreDeudor');
    expect(nuevaDeuda.amigos.length).toBe(0);
    expect(nuevaDeuda.montos.length).toBe(0)
});

test('obtener nombre de deudor', () => {
	const nuevaDeuda = new Deuda('NombreDeudor');
	expect(nuevaDeuda.getNombre()).toBe('NombreDeudor');
});

test('obtener lista amigos de la deuda', () => {
	const nuevaDeuda = new Deuda('NombreDeudor');
	const amigo1 = new Amigo('Juan','Efectivo');
	const amigo2 = new Amigo('Pedro','Efectivo');
	const listaAmigos = [];
	listaAmigos.push(amigo1);
	listaAmigos.push(amigo2);
	nuevaDeuda.amigos = listaAmigos;
	expect(nuevaDeuda.getAmigos().length).toBe(2);
});

test('obtener lista montos de la deuda', () => {
	const nuevaDeuda = new Deuda('NombreDeudor');
	const monto1 = 50;
	const monto2 = 100;
	const listaMontos = [];
	listaMontos.push(monto1);
	listaMontos.push(monto2);
	nuevaDeuda.montos = listaMontos;
	expect(nuevaDeuda.getMontos().length).toBe(2);
});

test('agregar deuda', () => {
	const nuevaDeuda = new Deuda('NombreDeudor');
	const amigo1 = new Amigo('Juan','Efectivo');
	const amigo2 = new Amigo('Pedro','Efectivo');
    const monto1 = 50;
	const monto2 = 100;
    nuevaDeuda.agregarDeuda(amigo1, monto1);
    nuevaDeuda.agregarDeuda(amigo2, monto2);
	nuevaDeuda.agregarDeuda(amigo2, monto2 + monto1);
	expect(nuevaDeuda.getAmigos().length).toBe(2);
	expect(nuevaDeuda.getMontos().length).toBe(2);
});


test('eliminar deuda', () => {
	const nuevaDeuda = new Deuda('NombreDeudor');
	const amigo1 = new Amigo('Juan','Efectivo');
	const amigo2 = new Amigo('Pedro','Efectivo');
    const listaAmigos = [];
	listaAmigos.push(amigo1);
	listaAmigos.push(amigo2);
	nuevaDeuda.amigos = listaAmigos;
    const monto1 = 50;
	const monto2 = 100;
    const listaMontos = [];
	listaMontos.push(monto1);
	listaMontos.push(monto2);
	nuevaDeuda.montos = listaMontos;
    nuevaDeuda.eliminarDeuda(0);
	expect(nuevaDeuda.getAmigos().length).toBe(1);
	expect(nuevaDeuda.getMontos().length).toBe(1);
});

test('modificar deuda', () => {
	const nuevaDeuda = new Deuda('NombreDeudor');
	const amigo1 = new Amigo('Juan','Efectivo');
	const amigo2 = new Amigo('Pedro','Efectivo');
    const listaAmigos = [];
	listaAmigos.push(amigo1);
	listaAmigos.push(amigo2);
	nuevaDeuda.amigos = listaAmigos;
    const monto1 = 50;
	const monto2 = 100;
    const monto3 = 150;
    const listaMontos = [];
	listaMontos.push(monto1);
	listaMontos.push(monto2);
	nuevaDeuda.montos = listaMontos;
    nuevaDeuda.modificarDeuda(0,monto3);
	expect(nuevaDeuda.getAmigos().length).toBe(2);
	expect(nuevaDeuda.getMontos().length).toBe(2);
    expect(nuevaDeuda.getMontos()[0]).toBe(monto3);
});

