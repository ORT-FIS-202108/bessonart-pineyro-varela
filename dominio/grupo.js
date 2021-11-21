import Deuda from '../../dominio/deuda.js';

class Grupo {
	constructor(nombre,listaIntegrantes) {
		this.nombre = nombre;
		this.listaIntegrantes = listaIntegrantes;
		this.listaDeudas = [];
	}

	getGrupo(){
		return {
			nombre : this.nombre,
			listaIntegrantes: this.listaIntegrantes,
			listaDeudas: this.listaDeudas,
		};
	}

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre){
		this.nombre = nombre;
	}

	getListaDeudas(){
		return this.listaDeudas;
	}

	setListaDeudas(lista){
		this.listaDeudas = lista;
	}

	getListaIntegrantes(){
		return this.listaIntegrantes;
	}

	setListaIntegrantes(lista){
		this.listaIntegrantes = lista;
	}

	cantidadIntegrantes(){
		return this.listaIntegrantes.length;
	}

	getCantidadDeudas() {
		return this.listaDeudas.length;
	}

	getDeudaDe(nombre){
		for (const deuda in this.listaDeudas) {
			if (deuda.getNombre()===(nombre)) {
				return this.listaDeudas.indexOf(deuda);
			}
		}
		return -1;
	}

	agregarDeuda(nombre, monto) {
		monto /= this.cantidadIntegrantes();
		let tieneDeudas = this.getDeudaDe(nombre);
		if(tieneDeudas !== -1) {
			let deudaNombre = this.listaDeudas[getDeudaDe(nombre)];
			let amigos = deudaNombre.getAmigos();
			let montos = deudaNombre.getMontos();
			for(let i = 0; i < amigos.length; i++) {
				if(montos[i] > monto) {
					montos[i] -= monto;
				} else if(montos[i] < monto) {
					deudaNombre.eliminarDeuda(i);
					let pos = this.getDeudaDe(amigos[i]);
					if(pos !== -1) {
						this.listaDeudas[pos].agregarDeuda(nombre, monto);
					} else {
						let nuevaDeuda = new Deuda(amigos[i], [nombre], [monto]);
						this.listaDeudas.push(nuevaDeuda);
					}
				} else {
					deudaNombre.eliminarDeuda(i);
				} 
			}
			for(let amigo in this.getListaIntegrantes()) {
				if(!(amigos.include(amigo))){
					let pos = this.getDeudaDe(amigo);
					if(pos !== -1) {
						this.listaDeudas[pos].agregarDeuda(nombre, monto);
					} else {
						let nuevaDeuda = new Deuda(amigo, [nombre], [monto]);
						this.listaDeudas.push(nuevaDeuda);
					}
				}
			}
		} else {
			for (let amigo in this.getListaIntegrantes()) {
				let nombreAmigo = amigo.getNombre();
				if(nombreAmigo !== nombre) {
					let pos = this.getDeudaDe(nombreAmigo);
					if(pos !== -1) {
						this.listaDeudas[pos].agregarDeuda(nombre, monto);
					} else {
						let nuevaDeuda = new Deuda(nombreAmigo, [nombre], [monto]);
						this.listaDeudas.push(nuevaDeuda);
					}
				}
			}
		}
	}

	balancear() {
		for(let deuda1 in this.listaDeudas){
			let amigos = deuda1.getAmigos();
			let montos = deuda1.getMontos();
			for(let i = 0; i < amigos.length; i++) {
				let amigo = amigos[i];
				let monto = monto[i];
				let pos = this.getDeudaDe(amigo);
				if(pos !== -1) {
					let deuda2 = this.listaDeudas[pos];
					let amigos2 = deuda2.getAmigos();
					let montos2 = deuda2.getMontos();
					for(let j = 0; j < amigos2.length; j++) {
						if(monto > montos2[j]) {
							monto[i] -= montos2[j];
							deuda1.agregarDeuda(amigos2[j], montos2[j]);
							deuda2.eliminarDeuda(j);
						} else if(monto < montos2[j]){
							deuda1.agregarDeuda(amigos2[j], monto);
							deuda1.eliminarDeuda(i);
							deuda2.modificarDeuda(j, montos2[j] - monto);
						}
						else {
							deuda1.agregarDeuda(amigos2[j], montos2[j]);
							deuda2.eliminarDeuda(j);
						}
					}
				} 
			}
		}
	}

}
export default Grupo;