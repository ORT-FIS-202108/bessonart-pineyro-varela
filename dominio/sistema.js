import Amigo from './amigo.js';
import Grupo from './grupo.js';

class Sistema {
	constructor() {
		this.listaAmigos = [];
		this.listaGrupos = [];
	}

	getListaGrupos() {
		return this.listaGrupos;
	}

	setListaGrupos(lista) {
		this.listaGrupos = lista;
	}

	agregarGrupo(nombre) {
		const encontroGrupo = this.listaGrupos.find(l => l.nombre === nombre);
		if (encontroGrupo) {
			throw Error(`Ya existe un grupo con nombre ${nombre}.`);
		} else {
			let nuevoGrupo = new Grupo(nombre);
			this.listaGrupos.push(nuevoGrupo);
		}
	}

	eliminarGrupo(nombre) {
		if (this.listaGrupos.length !== 0) {
			const encontroGrupo = this.listaGrupos.find(l => l.nombre === nombre);
			if (encontroGrupo) {
				const indexGrupo = this.listaGrupos.findIndex(l => l.nombre === nombre);
				this.listaGrupos.splice(indexGrupo, 1);
				return;
			}
		}
		throw new Error(`No existe un amigo con el nombre ${nombre}`);
	}

	agregarAmigo(nombre, favorito) {
		if (this.listaAmigos.length !== 0) {
			const encontroAmigo = this.listaAmigos.find(l => l.nombre === nombre);
			if (encontroAmigo) {
				throw Error(`Ya existe un amigo con nombre ${nombre}.`);
			}
		}
		let nuevoAmigo = new Amigo(nombre, favorito);
		this.listaAmigos.unshift(nuevoAmigo);
	}

	agregarAmigoGrupo(nombre) {
		this.grupoActual.agregarAmigo(this.getAmigoByName(nombre));
	}
	eliminarAmigoGrupo(nombre) {
		this.grupoActual.eliminarAmigo(this.getAmigoByName(nombre));
	}

	eliminarAmigoDelGrupo(namigo, ngrupo) {
		let grupo = this.getGrupoByName(ngrupo);
		let amigo = this.getAmigoByName(namigo)
		grupo.eliminarAmigo(amigo);
	}

	agregarAmigoAlGrupo(namigo, ngrupo){
		let grupo = this.getGrupoByName(ngrupo);
		let amigo = this.getAmigoByName(namigo);
		grupo.agregarAmigo(amigo);
	}

	eliminarAmigo(nombre) {
		if (this.listaAmigos.length !== 0) {
			const encontroAmigo = this.listaAmigos.find(l => l.nombre === nombre);
			if (encontroAmigo) {
				const indexAmigo = this.listaAmigos.findIndex(l => l.nombre === nombre);
				this.listaAmigos.splice(indexAmigo, 1);
				return;
			}
		}
		throw new Error(`No existe un amigo con el nombre ${nombre}`);
	}

	getListaAmigos() {
		return this.listaAmigos;
	}

	setListaAmigos(lista) {
		this.listaAmigos = lista;
	}

	getGrupoByName(nombre) {
		for (let i = 0;i<this.listaGrupos.length;i++) {
			if (this.listaGrupos[i].nombre === nombre) {
				return this.listaGrupos[i];
			}
		}
		return null;
	}

	getAmigoByName(nombre) {
		for (let i = 0;i<this.listaAmigos.length;i++) {
			if (this.listaAmigos[i].nombre === nombre) {
				return this.listaAmigos[i];
			}
		}
		return null;
	}

	getIntegrantesDelGrupo(nombre) {
		for (const grupo in this.listaGrupos) {
			if (grupo.getNombre() === nombre) {
				return grupo.listaIntegrantes;
			}
		}
		return null;
	}

	estaAmigoEnGrupo(nAmigo, nGrupo) {
		let grupo = this.getGrupoByName(nGrupo);
		grupo.amigoPertenece(nAmigo);
	}

}
export default Sistema;