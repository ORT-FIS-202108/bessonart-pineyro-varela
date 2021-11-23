import Amigo from './amigo.js';
import Grupo from './grupo.js';

class Sistema {
	constructor() {
		this.listaAmigos = [new Amigo('YO', '')];
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
		throw new Error(`No existe un amigo con el nombre ${nombre}.`);
	}

	agregarAmigo(nombre, favorito) {
		if (this.listaAmigos.length !== 0) {
			const encontroAmigo = this.listaAmigos.find(l => l.nombre === nombre);
			if (encontroAmigo) {
				throw Error(`Ya existe un amigo con nombre ${nombre}.`);
			}
		}
		let nuevoAmigo = new Amigo(nombre, favorito);
		this.listaAmigos.push(nuevoAmigo);
	}

	eliminarAmigoDelGrupo(namigo, ngrupo) {
		let grupo = this.getGrupoByName(ngrupo);
		let amigo = this.getAmigoByName(namigo);
		grupo.eliminarAmigo(amigo);
	}

	agregarAmigoAlGrupo(namigo, ngrupo) {
		let grupo = this.getGrupoByName(ngrupo);
		let amigo = this.getAmigoByName(namigo);
		if (amigo == null) {
			throw new Error(`No existe un amigo con el nombre ${namigo}.`);
		} else if (grupo == null) {
			throw new Error(`No existe un grupo con el nombre ${ngrupo}.`);
		} else {
			grupo.agregarAmigo(amigo);
		}
	}

	eliminarAmigo(nombre) {
		if (this.listaAmigos.length !== 0) {
			const encontroAmigo = this.listaAmigos.find(l => l.nombre === nombre);
			if (encontroAmigo) {
				const indexAmigo = this.listaAmigos.findIndex(l => l.nombre === nombre);
				for (let i = 0; i < this.listaGrupos.length; i++) {
					if (this.listaGrupos[i].amigoPertenece(nombre)) {
						this.listaGrupos[i].eliminarAmigo(nombre);
					}
				}
				this.listaAmigos.splice(indexAmigo, 1);
				return;
			}
		}
		throw new Error(`No existe un amigo con el nombre ${nombre}.`);
	}

	getGrupoByName(nombre) {
		for (let i = 0; i < this.listaGrupos.length; i++) {
			if (this.listaGrupos[i].nombre === nombre) {
				return this.listaGrupos[i];
			}
		}
		return null;
	}

	getAmigoByName(nombre) {
		for (let i = 0; i < this.listaAmigos.length; i++) {
			if (this.listaAmigos[i].nombre === nombre) {
				return this.listaAmigos[i];
			}
		}
		return null;
	}


	estaAmigoEnGrupo(nAmigo, nGrupo) {
		let grupo = this.getGrupoByName(nGrupo);
		return (grupo.amigoPertenece(nAmigo));
	}

}
export default Sistema;