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

}
export default Grupo;