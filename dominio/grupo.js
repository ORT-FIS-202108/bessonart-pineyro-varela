import Deuda from './deuda.js';

class Grupo {
	constructor(nombre) {
		this.nombre = nombre;
		this.listaIntegrantes = [];
		this.listaDeudas = [];
	}

	getGrupo() {
		return {
			nombre: this.nombre,
			listaIntegrantes: this.listaIntegrantes,
			listaDeudas: this.listaDeudas,
		};
	}

	agregarAmigo(amigo) {
		this.listaIntegrantes.push(amigo);
	}

	getNombre() {
		return this.nombre;
	}

	setNombre(nombre) {
		this.nombre = nombre;
	}

	getListaIntegrantes() {
		return this.listaIntegrantes;
	}

	cantidadIntegrantes() {
		return this.listaIntegrantes.length;
	}

	getCantidadDeudas() {
		return this.listaDeudas.length;
	}

	getDeudaDe(nombre) {
		let pos = -1;
		for (let i = 0; i < this.listaDeudas.length; i++) {
			let deuda = this.listaDeudas[i];
			if (deuda.getNombre().getNombre() === nombre) {
				pos = this.listaDeudas.indexOf(deuda);
			}
		}
		return pos;
	}

	amigoPertenece(nAmigo) {
		for (let i = 0; i < this.listaIntegrantes.length; i++) {
			if (this.listaIntegrantes[i].nombre === nAmigo) {
				return true;
			}
		}
		return false;
	}

	eliminarAmigo(amigo) {
		let index = this.listaIntegrantes.indexOf(amigo);
		this.listaIntegrantes.splice(index, 1);
	}

	agregarDeuda(nombre, monto) {
		monto /= this.cantidadIntegrantes();
		for (let i = 0; i < this.listaIntegrantes.length; i++) {
			let amigo = this.listaIntegrantes[i];
			if (amigo.getNombre() != nombre) {
				let pos = this.getDeudaDe(amigo.nombre);
				if (pos !== -1) {
					this.listaDeudas[pos].agregarDeuda(nombre, monto);
				} else {
					let nuevaDeuda = new Deuda(amigo);
					nuevaDeuda.agregarDeuda(nombre, monto);
					this.listaDeudas.push(nuevaDeuda);
				}
			}
		}
		this.balancear();
	}

	eliminarDeuda(nombre, pos) {
		let deuda = this.listaDeudas[this.getDeudaDe(nombre.nombre)];
		deuda.eliminarDeuda(pos);
		this.balancear();
	}

	balancear() {
		for (let k = 0; k < this.listaDeudas.length; k++) {
			let deuda1 = this.listaDeudas[k];
			let amigos = deuda1.getAmigos();
			let montos = deuda1.getMontos();
			for (let i = 0; i < amigos.length; i++) {
				let amigo = amigos[i];
				let monto = montos[i];
				let pos = this.getDeudaDe(amigo);
				if (pos !== -1) {
					let deuda2 = this.listaDeudas[pos];
					let amigos2 = deuda2.getAmigos();
					let montos2 = deuda2.getMontos();
					for (let j = 0; j < amigos2.length; j++) {
						if (amigos2[j] == deuda1.getNombre().getNombre()) {
							if (monto == montos2[j]) {
								deuda1.eliminarDeuda(i);
								deuda2.eliminarDeuda(j);
							} else if (monto > montos2[j]) {
								deuda1.modificarDeuda(i, monto - montos2[j]);
								deuda2.eliminarDeuda(j);
							} else {
								deuda2.modificarDeuda(j, montos2[j] - monto);
								deuda1.eliminarDeuda(i);
							}
						}
					}
				}
			}
		}
	}
}
export default Grupo;