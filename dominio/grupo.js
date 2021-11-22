import Deuda from './deuda.js';

class Grupo {
	constructor(nombre) {
		this.nombre = nombre;
		this.listaIntegrantes = [];
		this.listaDeudas = [];
	}

	getGrupo(){
		return {
			nombre : this.nombre,
			listaIntegrantes: this.listaIntegrantes,
			listaDeudas: this.listaDeudas,
		};
	}

	agregarAmigo(amigo){
		this.listaIntegrantes.push(amigo);
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
		for (let i = 0; i < this.listaDeudas.length; i++) {
			let deuda = this.listaDeudas[i];
			if (deuda.getNombre()===(nombre)) {
				return this.listaDeudas.indexOf(deuda);
			}
		}
		return -1;
	}

	AmigoPertenece(nombre) {
		for (const amigo in this.listaIntegrantes) {
			if (amigo.getNombre() === nombre) {
				return true;
			}
		}
		return false;
	}
	
	eliminarAmigo(nombre){
		if(this.listaIntegrantes.length !== 0) {
			const encontroAmigo = this.listaIntegrante.find(l => l.nombre === nombre);
			if(encontroAmigo){
				const indexAmigo = this.listaIntegrante.findIndex(l => l.nombre === nombre);
				this.listaIntegrante.splice(indexAmigo,1);
				return;
			}
		}
		throw new Error(`No existe un amigo con el nombre ${nombre}`);
	}
	
	agregarDeuda(nombre, monto) {
		monto /= this.cantidadIntegrantes();
		for(let i = 0; i < this.listaIntegrantes.length; i++) {
			let amigo = this.listaIntegrantes[i];
			if(amigo != nombre) {
				let pos = this.getDeudaDe(amigo);
				if(pos !== -1) {
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

	balancear() {
		for(let k = 0; k < this.listaDeudas.length; k++){
			let deuda1 = this.listaDeudas[k];
			let amigos = deuda1.getAmigos();
			let montos = deuda1.getMontos();
			for(let i = 0; i < amigos.length; i++) {
				let amigo = amigos[i];
				let monto = montos[i];
				let pos = this.getDeudaDe(amigo);
				if(pos !== -1) {
					let deuda2 = this.listaDeudas[pos];
					let amigos2 = deuda2.getAmigos();
					let montos2 = deuda2.getMontos();
					for(let j = 0; j < amigos2.length; j++) {
						if(amigos2[j] == deuda1.getNombre()){
							if(monto == montos2[j]) {
								deuda1.eliminarDeuda(i);
								deuda2.eliminarDeuda(j);
							} else if (monto > montos2[j]) {
								deuda1.modificarDeuda(i, monto - montos2[j]);
								deuda2.eliminarDeuda(j);
							} else {
								deuda2.modificarDeuda(j, montos2[j] - monto);
								deuda1.eliminarDeuda(i);
							}
						} else {
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

}
export default Grupo;