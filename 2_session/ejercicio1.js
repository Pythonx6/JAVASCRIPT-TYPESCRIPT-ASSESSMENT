// Definimos la arrow function
const getObjectProperties = (obj) => {
  // Utilizamos Object.keys para obtener un array con las propiedades del objeto
  return Object.keys(obj);
};

// Ejemplo de uso con el objeto proporcionado
let person = {
  name: "Alexander",
  age: 30,
  profession: "Student",
};

// Llamamos a la función
const properties = getObjectProperties(person);

// Mostramos el resultado en la consola
console.log(properties); // [ 'name', 'age', 'profession' ]

// Mostramos el resultado en la página web
document.getElementById("result").textContent = properties.join(", ");
