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
		for (const deuda in this.listaDeudas) {
			if (deuda.getNombre()===(nombre)) {
				return this.listaDeudas.indexOf(deuda);
			}
		}
		return -1;
	}

	agregarDeuda(deuda) {
		this.listaDeudas.push(deuda);
		this.balancear();
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
	balancear() {
		// for (let deuda in this.lista) {
		// 	var monto = gasto.getMonto() / gasto.getCantidadParticipantes();
		// 	var dueño = gasto.getDueño();
		// 	for (let p in gasto.getParticipantes() {
		// 		let nombre = p.getNombre();
		// 		if(!nombre === (dueño.getNombre())){
		// 			let indexDeuda = this.getDeudaDe(nombre);
		// 			if(indexDeuda =! -1) {
		// 				this.listaDeudas.get(indexDeuda).agregarDeuda(dueño, monto);
		// 			} else {
		// 				var nuevaDeuda = Deuda(nombre);
		// 				nuevaDeuda.agregarDeuda(dueño, monto);
		// 				this.listaDeudas.push(nuevaDeuda);
		// 			}
		// 		}
		// 	}
		// }
	}

}
export default Grupo;