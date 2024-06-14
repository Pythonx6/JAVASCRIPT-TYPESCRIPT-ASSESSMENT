class InvertirCadena {
  constructor() {
    this.cadenaInvertir = ""; // línea para inicializar cadenaInvertir como una cadena vacía
  }

  // Función para imprimir la cadena invertida
  imprimirInvertida() {
    // Verificar si la cadena está vacía
    if (this.cadenaInvertir === "") {
      throw new Error("La cadena está vacía"); // Lanzar un error si la cadena está vacía
    }
    // Usamos split() para dividir la cadena en un array de caracteres, reverse() para invertir el orden del array y join() para unir los caracteres nuevamente en una cadena invertida
    const cadenaInvertida = this.cadenaInvertir.split("").reverse().join("");
    console.log(cadenaInvertida); // Imprimimos la cadena invertida en la consola
  }
}

// Ejemplo de uso
const cadena = new InvertirCadena();
cadena.cadenaInvertir = "Hola mundo";
cadena.imprimirInvertida(); // Output: "odnum aloH"

// Ahora instancia la clase en un objeto que llamaremos invertirCadena.
const invertirCadena = new InvertirCadena();

// Ejecuta primero la función sin cambiar cadenaInvertir.
// La función imprimirInvertida() lanzará un error si cadenaInvertir está vacío.
try {
  invertirCadena.imprimirInvertida();
} catch (error) {
  console.error(error.message); // Capturamos el error y mostramos el mensaje en la consola
}

// Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función.
invertirCadena.cadenaInvertir = "¡Hola, mundo!";
invertirCadena.imprimirInvertida(); // Output: "!odnum ,aloH"

// Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo().
// ¿Cómo podemos hacer para que no de un error?.
if (invertirCadena.nuevoMetodo) {
  // Verificamos si el método nuevoMetodo() existe antes de llamarlo
  invertirCadena.nuevoMetodo(); // Llamamos al método nuevoMetodo() si existe
} else {
  console.log("El método nuevoMetodo() no está definido."); // Mostramos un mensaje si el método no está definido
}
