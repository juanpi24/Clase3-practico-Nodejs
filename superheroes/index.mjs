// Importamos la función leerSuperheroes desde utils.mjs
import { leerSuperheroes} from "./utils.mjs";

// Leer y mostrar la lista actualizada de superhéroes ordenada
const superHeroes = leerSuperheroes("./superheroes.txt");
console.log("Superhéroes Ordenados:");
console.log(superHeroes);