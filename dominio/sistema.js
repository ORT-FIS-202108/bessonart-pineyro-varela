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
		const g = new Grupo(nombre,listaIntegrantes);
		this.listaGrupos.push(g);
	}

	agregarAmigo(nombre, favorito){
		const a = new Amigo(nombre,favorito);
		this.listaAmigos.push(a);
	}

	getListaAmigos(){
		return this.listaAmigos;
	}

	setListaAmigos(lista){
		this.listaAmigos = lista;
	}

}
export default Sistema;