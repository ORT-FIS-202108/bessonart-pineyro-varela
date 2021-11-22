class Deuda {
	constructor(nombre,id) {
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
        if(this.amigos.includes(amigo)) {
            this.montos[this.amigos.indexOf(amigo)] += monto;
        } else {
            this.amigos.push(amigo);
		    this.montos.push(monto);
        }		
	}

    eliminarDeuda(posicion) {
        this.amigos.splice(posicion, 1);
        this.montos.splice(posicion, 1);
    }

    modificarDeuda(posicion, monto) {
        this.montos[posicion] = monto;
    }
}
export default Deuda;