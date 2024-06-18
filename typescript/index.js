// Ejercicio 1
// Objeto `personaInfo` que implementa la interfaz `Person`
var personInfo = {
    name: "Alexander",
    age: 30,
    profession: "Estudiante del Master Full Stack",
    displayName: function () {
        console.log(this.name); // Implementación del método displayName: muestra el nombre de la persona
    },
    talk: function (phrase) {
        console.log(phrase);
    },
    isAdult: function () {
        return this.age >= 18;
    },
    getInfoArray: function () {
        return [this.name, this.age, this.profession];
    },
    speak: function (phrase) {
        console.log("".concat(this.name, " speaks: ").concat(phrase));
    },
};
// Usando la función `getInfoArray` para obtener un array de las propiedades del objeto `personaInfo`
var personaInfoArray = personInfo.getInfoArray();
console.log(personaInfoArray); // Debería imprimir ["Alexander", 30, "Estudiante del Master Full Stack"]
// Llamadas a los métodos del objeto `personaInfo`
personInfo.displayName(); // Debería imprimir "Alexander"
personInfo.talk("Hola a todos"); // Debería imprimir "Hola a todos"
console.log(personInfo.isAdult()); // Debería imprimir true o false según la edad
// Ejercicio 2
function sumaOrConcatenate(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else if (typeof param1 === "string" && typeof param2 === "string") {
        return "".concat(param1, "-").concat(param2);
    }
    else {
        return "".concat(param1, ":").concat(param2);
    }
}
// Ejemplos de uso
console.log(sumaOrConcatenate(4, 3)); // --> 7
console.log(sumaOrConcatenate(4, "hello")); // --> 4:hello
console.log(sumaOrConcatenate("hello", "world")); // --> hello-world
// Función que verifica si un objeto es un Car
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
// Función que acepta un parámetro que puede ser Car o Motorcycle
function handleVehicle(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
}
// Ejemplos de uso
var myCar = {
    tires: 4,
    turnOnEngine: function () { return console.log("Car engine started"); },
    pressPedal: function () { return console.log("Car is moving"); },
};
var myMotorcycle = {
    tires: 2,
    turnOnEngine: function () { return console.log("Motorcycle engine started"); },
    openThrottle: function () { return console.log("Motorcycle is moving fast"); },
};
handleVehicle(myCar); // Debería imprimir "Car engine started" y "Car is moving"
handleVehicle(myMotorcycle); // Debería imprimir "Motorcycle engine started" y "Motorcycle is moving fast"
// Ejercicio 4
// Función genérica que remueve el primer elemento de un array
function removeFirstEntry(array) {
    return array.slice(1);
}
// Ejemplos de uso
var strArray = [
    "Hello",
    "World",
    "Im",
    "a",
    "Full",
    "Stack",
    "Developer",
];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ["Hello", "I", "have", 3, "tasks"];
// const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22]; // No se puede usar con tipos no primitivos
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
