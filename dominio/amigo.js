class Amigo {
	constructor(nombre, favorito) {
		this.nombre = nombre;
		this.favorito = favorito;
	}

	getAmigo(){
		return {
			nombre : this.nombre,
			favorito : this.favorito,
		};
	}

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre){
		this.nombre = nombre;
	}

	getFavorito(){
		return this.favorito;
	}

	setFavorito(favorito){
		this.favorito = favorito;
	}

}
export default Amigo;