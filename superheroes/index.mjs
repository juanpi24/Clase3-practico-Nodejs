// Importamos la función leerSuperheroes desde utils.mjs
import { leerSuperheroes, agregarSuperheroes} from "./utils.mjs";

const archivoOriginal = "./superheroes.txt";
const archivoNuevos = "./agregarSuperheroes.txt";

// Agregar nuevos superhéroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista actualizada de superhéroes ordenada
const superHeroes = leerSuperheroes("./superheroes.txt");
console.log("Superhéroes Ordenados:");
console.log(superHeroes);