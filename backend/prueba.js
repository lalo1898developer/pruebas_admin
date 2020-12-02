const modulosPorSistema = [
    { _id: 1, nombre: "1", idSystem: 1 }, 
    { _id: 2, nombre: "2", idSystem: 1, idModule: 1 }, 
    { _id: 3, nombre: "3", idSystem: 1, idModule: 1 }, 
    { _id: 4, nombre: "4", idSystem: 1 },
    { _id: 5, nombre: "5", idSystem: 1 },
    { _id: 6, nombre: "6", idSystem: 1, idModule: 2 }
];

const submodulos = [];

/**
 * [
 *   { _id: 1, nombre: "1", idSystem: 1, submodulos: 
 *      [
 *        { _id: 2, nombre: "2", idSystem: 1, idModule: 1 }, 
 *        { _id: 3, nombre: "3", idSystem: 1, idModule: 1 }
 *      ] 
 *    },
 *    { _id: 4, nombre: "4", idSystem: 1 },
 *    { _id: 5, nombre: "5", idSystem: 1 },
 *    { _id: 6, nombre: "6", idSystem: 1 }
 * ]
 */

const moduloUno = modulosPorSistema.map( modulo => {

    if(modulo.idModule == 1) { 
        return modulo;
    }

}).filter(modulo => typeof modulo === 'object');

console.log(modulos);
