import Amigo from './amigo.js';
import Grupo from './grupo.js';

class Sistema {
	constructor() {
		this.listaAmigos = [];
		this.listaGrupos = [];
	}

	getListaGrupos(){
		return this.listaGrupos;
	}

	setListaGrupos(lista){
		this.listaGrupos = lista;
	}

	agregarGrupo(nombre,listaIntegrantes){
		const encontroGrupo = this.listaGrupo.find(l => l.nombre === nombre);
		if(encontroGrupo){
			throw Error(`Ya existe un grupo con nombre ${nombre}.`);
		} else {
			let nuevoGrupo= new Grupo(nombre,listaIntegrantes);
			this.listaGrupo.push(nuevoGrupo);
		}
	}

	eliminarGrupo(nombre){
		const encontroGrupo = this.listaGrupos.find(l => l.nombre === nombre);
		if(encontroGrupo){
			const indexGrupo = this.listaGrupos.findIndex(l => l.nombre === nombre);
			this.listaGrupos.splice(indexGrupo, 1);
		} else {
			throw new Error(`No existe un grupo con el nombre ${nombre}`);
		}
	}

	agregarAmigo(nombre, favorito){
		const encontroAmigo = this.listaAmigos.find(l => l.nombre === nombre);
		if(encontroAmigo){
			throw Error(`Ya existe un amigo con nombre ${nombre}.`);
		} else {
			let nuevoAmigo= new Amigo(nombre,favorito);
			this.listaAmigos.unshift(nuevoAmigo);
		}
	}

	eliminarAmigo(nombre){
		const encontroAmigo = this.listaAmigos.find(l => l.nombre === nombre);
		if(encontroAmigo){
			const indexAmigo = this.listaAmigos.findIndex(l => l.nombre === nombre);
			this.listaAmigos.splice(indexAmigo,1);
		} else {
			throw new Error(`No existe un amigo con el nombre ${nombre}`);
		}
	}

	getListaAmigos(){
		return this.listaAmigos;
	}

	setListaAmigos(lista){
		this.listaAmigos = lista;
	}

}
export default Sistema;