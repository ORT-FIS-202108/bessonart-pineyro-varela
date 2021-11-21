class Deuda {
	constructor(nombre) {
		this.nombre = nombre;
		this.amigos = [];
		this.montos = [];
	}

	getNombre() {
		return this.nombre;
	}

	getAmigos() {
		return this.amigos;
	}

	getMontos() {
		return this.montos;
	}

	agregarDeuda(amigo, monto) {
		this.amigos.push(amigo);
		this.montos.push(monto);
	}
}
export default Deuda;