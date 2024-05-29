// Usando var
let ejercicio4Resultado = "Resultado usando var:<br>";
for (var i = 0; i < 101; i++) {
  // Aquí podrías imprimir o realizar alguna acción con los números divisibles por 7.
}
ejercicio4Resultado += `Valor de i usando var: ${i}<br>`;
console.log(`Valor de i usando var: ${i}`); // Mostrar en consola

// Usando let
ejercicio4Resultado += "Resultado usando let:<br>";
for (let j = 0; j < 101; j++) {
  // Aquí podrías imprimir o realizar alguna acción con los números divisibles por 7.
}
try {
  ejercicio4Resultado += `Valor de j usando let: ${j}<br>`; // Esto causará un error porque j no está definida fuera del bucle
  console.log(`Valor de j usando let: ${j}`); // Mostrar en consola
} catch (error) {
  ejercicio4Resultado += `Error al intentar acceder a j fuera del bucle usando let: ${error.message}<br>`;
  console.log(
    `Error al intentar acceder a j fuera del bucle usando let: ${error.message}`
  ); // Mostrar en consola
}

// Mostrar el resultado en el div correspondiente al ejercicio 4
