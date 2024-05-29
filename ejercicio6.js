// Define el objeto formatter
const formatter = {
  prefix: "Hello ",
  append: function (str) {
    console.log(this.prefix + str);
  },
};

// Añadir el método toLowerString al prototipo de formatter
formatter.__proto__.toLowerString = function (str) {
  console.log(str.toLowerCase());
};

// Pruebas
formatter.append("World"); // Resultado: Hello World
formatter.toLowerString("I'm Alexander"); // Resultado: i'm Alexander

// Mostrar los resultados en la página web
const ejercicio6Resultado = document.getElementById("ejercicio6Resultado");
ejercicio6Resultado.innerHTML +=
  'formatter.append("World"); // Resultado: Hello World<br>';
ejercicio6Resultado.innerHTML +=
  "formatter.toLowerString(\"I'm Alexander\"); // Resultado: i'm Alexander<br>";
