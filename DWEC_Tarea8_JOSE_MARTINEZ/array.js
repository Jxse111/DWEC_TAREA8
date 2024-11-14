// Lista de países inicial
let paises = ["España", "Francia", "Italia", "Alemania", "Portugal"];

// 1. Mostrar el número de elementos del array
function mostrarNumeroElementos() {
    document.write("Número de elementos: " + paises.length + "<br>");
}

// 2. Mostrar todos los elementos del array
function mostrarTodosElementos() {
    document.write("Elementos: " + paises.join(", ") + "<br>");
}

// 3. Muestra los elementos del array en sentido inverso
function mostrarElementosInverso() {
    document.write("Inverso: " + paises.slice().reverse().join(", ") + "<br>");
}

// 4. Muestra los elementos del array ordenados alfabéticamente (sin modificar el original)
function mostrarOrdenAlfabetico() {
    document.write("Alfabético: " + paises.slice().sort().join(", ") + "<br>");
}

// 5. Añadir un elemento al principio del array
function anadirAlPrincipio(elemento) {
    paises.unshift(elemento);
    document.write(`Añadido al principio: ${elemento}<br>`);
}

// 6. Añadir un elemento al final del array
function anadirAlFinal(elemento) {
    paises.push(elemento);
    document.write(`Añadido al final: ${elemento}<br>`);
}

// 7. Borrar un elemento al principio del array
function borrarAlPrincipio() {
    document.write(`Eliminado del principio: ${paises.shift()}<br>`);
}

// 8. Borrar un elemento al final del array
function borrarAlFinal() {
    document.write(`Eliminado del final: ${paises.pop()}<br>`);
}

// 9. Muestra el elemento que se encuentra en una posición que el usuario indica
function mostrarElementoEnPosicion(posicion) {
    document.write(paises[posicion] ? `En posición ${posicion}: ${paises[posicion]}<br>` : "Posición fuera de rango.<br>");
}

// 10. Muestra la posición en la que se encuentra un elemento
function mostrarPosicionDeElemento(elemento) {
    let posicion = paises.indexOf(elemento);
    document.write(posicion !== -1 ? `Posición de "${elemento}": ${posicion}<br>` : `"${elemento}" no se encuentra.<br>`);
}

// 11. Muestra los elementos en un intervalo dado
function mostrarElementosEnIntervalo(inicio, fin) {
    document.write(inicio >= 0 && fin < paises.length && inicio <= fin
        ? "Intervalo: " + paises.slice(inicio, fin + 1).join(", ") + "<br>"
        : "Intervalo fuera de rango.<br>");
}

