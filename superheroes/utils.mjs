// Importar el módulo fs (Fil System) de Node.js
// Permite leer y escribir archivos en el sistema
import fs from "fs";

// Clase para representear un superhéroe.
class Superheroe {
    constructor(
        id,
        nombreSuperheroe,
        nombreReal,
        nombreSociedad,
        edad,
        planetaOrigen,
        debilidad,
        poder,
        habilidadEspecial,
        aliado,
        enemigo,
    ) {
        // Se crea un objeto con las propiedades
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}


// Función para leer y ordenar los superhéroes
// Recibe como parámetro la ruta del archivo TXT que contiene los superhéroes

export function leerSuperheroes(ruta) {
    /* readFileSync lee el contenido de un archivo de manera asicrona y bloqueante.
    Que sea bloqueante significa que la ejecución del hilo principal se detiene y espera a que finalice esta operación. */
    const datos = fs.readFileSync(ruta, "utf8");
    //Convierte a JSON
    const superheroesArray = JSON.parse(datos);

    
    // Convertir a instancias de Superhéroes
    const superHeroes = superheroesArray.map(
        (hero) =>
            new Superheroe(
                hero.id,
                hero.nombreSuperheroe,
                hero.nombreReal,
                hero.nombreSociedad,
                hero.edad,
                hero.planetaOrigen,
                hero.debilidad,
                hero.poder,
                hero.habilidadEspecial,
                hero.aliado,
                hero.enemigo,
            ),
    );

    ///// Ordenar por nombre de Superhéroes/////
    /* Método sort() ordena los elementos de una array*/
    /* localCompare() comprara los strings respetando las reglas del idioma*/
    superHeroes.sort((a, b) =>
        a.nombreSuperheroe.localeCompare(b.nombreSuperheroe),
    );
    return superHeroes;
}

