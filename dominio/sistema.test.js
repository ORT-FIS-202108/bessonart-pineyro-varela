import Amigo from './amigo.js';
import Grupo from './grupo.js';
import Sistema from './sistema.js';

beforeAll(() => {
    const amigo1 = new Amigo('amigo1','MetodoDePagoFavorito');
    const amigo2 = new Amigo('amigo2','MetodoDePagoFavorito');
    const grupo1 = new Grupo('grupo1');
    grupo1.agregarAmigo(amigo1);
  });



test('setListaGrupos', () =>{
    const grupo1 = new Grupo('grupo1');
    const sistema = new Sistema();
    sistema.setListaGrupos([grupo1]);
    expect(sistema.listaGrupos).toStrictEqual([grupo1]);
});

test('getListaGrupos', () =>{
    const grupo1 = new Grupo('grupo1');
    const sistema = new Sistema();
    sistema.setListaGrupos([grupo1]);
    expect(sistema.getListaGrupos()).toStrictEqual([grupo1]);
});

test('agregarGrupo', () =>{
    const grupo1 = new Grupo('grupo1');
    const sistema = new Sistema();
    sistema.agregarGrupo('grupo1');
    expect(sistema.listaGrupos[0]).toStrictEqual(grupo1);
});

test('getGrupoByName', () =>{
    const grupo1 = new Grupo('grupo1');
    const sistema = new Sistema();
    sistema.agregarGrupo('grupo1');
    expect(sistema.getGrupoByName('grupo1')).toStrictEqual(grupo1);
});

test('eliminarGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarGrupo('grupo1');
    sistema.eliminarGrupo('grupo1');
    expect(sistema.getGrupoByName('grupo1')).toBe(null);
});

test('agregarAmigo', () =>{
    const amigo1 = new Amigo('amigo1','MetodoDePagoFavorito');
    const sistema = new Sistema();
    sistema.agregarAmigo('amigo1','MetodoDePagoFavorito');
    expect(sistema.listaAmigos[0]).toStrictEqual(amigo1);
});

test('getAmigoByName', () =>{
    const amigo1 = new Amigo('amigo1','MetodoDePagoFavorito');
    const sistema = new Sistema();
    sistema.agregarAmigo('amigo1','MetodoDePagoFavorito');
    expect(sistema.getAmigoByName('amigo1')).toStrictEqual(amigo1);
});

test('eliminarAmigo', () =>{
    const amigo1 = new Amigo('amigo1','MetodoDePagoFavorito');
    const grupo1 = new Grupo('grupo1');
    const sistema = new Sistema();
    sistema.agregarAmigo('amigo1','MetodoDePagoFavorito')
    sistema.agregarGrupo('grupo1');
    sistema.eliminarAmigo('amigo1');
    expect(sistema.getAmigoByName('amigo1')).toBe(null);
    expect(grupo1.amigoPertenece('amigo1')).toBe(false);
});

test('agregarAmigoAlGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo('amigo2','MetodoDePagoFavorito');
    sistema.agregarGrupo('grupo1');
    sistema.agregarAmigoAlGrupo('amigo2','grupo1');
    expect(sistema.getGrupoByName('grupo1').amigoPertenece('amigo2')).toBe(true);
});

test('estaAmigoEnGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo('amigo2','MetodoDePagoFavorito');
    sistema.agregarGrupo('grupo1');
    sistema.agregarAmigoAlGrupo('amigo2','grupo1');
    expect(sistema.estaAmigoEnGrupo('amigo2','grupo1')).toBe(true);
});


test('eliminarAmigoDelGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo('amigo2','MetodoDePagoFavorito');
    sistema.agregarGrupo('grupo1');
    sistema.agregarAmigoAlGrupo('amigo2','grupo1');
    sistema.eliminarAmigoDelGrupo('amigo2','grupo1');
    expect(sistema.estaAmigoEnGrupo('amigo2','grupo1')).toBe(false);
});

