import Amigo from './amigo.js';
import Grupo from './grupo.js';
import Sistema from './sistema.js';

beforeAll(() => {
    const amigo1 = new Amigo('NombreAmigo1','MetodoDePagoFavorito');
    const amigo2 = new Amigo('NombreAmigo2','MetodoDePagoFavorito');
    const grupo1 = new Grupo('Grupo1');
    grupo1.agregarAmigo(amigo1);
  });



test('setListaGrupos', () =>{
    const sistema = new Sistema();
    sistema.setListaGrupos([grupo1]);
    expect(sistema.listaGrupos).toBe([grupo1]);
});

test('getListaGrupos', () =>{
    const sistema = new Sistema();
    sistema.setListaGrupos([grupo1]);
    expect(sistema.getListaGrupos).toBe([grupo1]);
});

test('agregarGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarGrupo(grupo1);
    expect(sistema.listaGrupos[0]).toBe(grupo1);
});

test('getGrupoByName', () =>{
    const sistema = new Sistema();
    sistema.agregarGrupo(grupo1);
    expect(sistema.getAmigoByName('Grupo1')).toBe(grupo1);
});

test('eliminarGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarGrupo(grupo1);
    sistema.eliminarGrupo('grupo1');
    expect(sistema.getGrupoByName('Grupo1')).toBe(null);
});

test('agregarAmigo', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo(amigo1);
    expect(sistema.listaAmigos[0]).toBe(amigo1);
});

test('getAmigoByName', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo(amigo1);
    expect(sistema.getAmigoByName('amigo1')).toBe(amigo1);
});

test('eliminarAmigo', () =>{
    const sistema = new Sistema();
    sistema.agregarGrupo(grupo1);
    sistema.eliminarAmigo('amigo1');
    expect(sistema.getAmigoByName('amigo1')).toBe(null);
    expect(grupo1.amigoPertenece('amigo1')).toBe(false);
});

test('agregarAmigoAlGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo(amigo2);
    sistema.agregarGrupo(grupo1);
    sistema.agregarAmigoAlGrupo('amigo2','grupo1');
    expect(grupo1.amigoPertenece('amigo2')).toBe(true);
});

test('estaAmigoEnGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo(amigo2);
    sistema.agregarGrupo(grupo1);
    sistema.agregarAmigoAlGrupo('amigo2','grupo1');
    expect(sistema.estaAmigoEnGrupo('amigo2','grupo1')).toBe(true);
});


test('eliminarAmigoDelGrupo', () =>{
    const sistema = new Sistema();
    sistema.agregarAmigo(amigo2);
    sistema.agregarGrupo(grupo1);
    sistema.agregarAmigoAlGrupo('amigo2','grupo1');
    sistema.eliminarAmigoDelGrupo('amigo2','grupo1');
    expect(sistema.estaAmigoEnGrupo('amigo2','grupo1')).toBe(false);
});

