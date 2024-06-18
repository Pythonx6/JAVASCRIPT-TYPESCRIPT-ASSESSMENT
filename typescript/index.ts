// Ejercicio 1

interface Person {
  name: string;
  age: number;
  profession: string;
  displayName(): void;
  talk(phrase: string): void;
  isAdult(): boolean;
  getInfoArray(): (string | number)[];
  speak(phrase: string): void;
}

// Objeto `personaInfo` que implementa la interfaz `Person`
const personInfo: Person = {
  name: "Alexander",
  age: 30,
  profession: "Estudiante del Master Full Stack",
  displayName() {
    console.log(this.name); // Implementación del método displayName: muestra el nombre de la persona
  },
  talk(phrase: string) {
    console.log(phrase);
  },
  isAdult() {
    return this.age >= 18;
  },
  getInfoArray() {
    return [this.name, this.age, this.profession];
  },
  speak(phrase: string) {
    console.log(`${this.name} speaks: ${phrase}`);
  },
};

// Usando la función `getInfoArray` para obtener un array de las propiedades del objeto `personaInfo`
const personaInfoArray = personInfo.getInfoArray();
console.log(personaInfoArray); // Debería imprimir ["Alexander", 30, "Estudiante del Master Full Stack"]

// Llamadas a los métodos del objeto `personaInfo`
personInfo.displayName(); // Debería imprimir "Alexander"
personInfo.talk("Hola a todos"); // Debería imprimir "Hola a todos"
console.log(personInfo.isAdult()); // Debería imprimir true o false según la edad

// Ejercicio 2
function sumaOrConcatenate(
  param1: number | string,
  param2: number | string
): number | string {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    return `${param1}-${param2}`;
  } else {
    return `${param1}:${param2}`;
  }
}
// Ejemplos de uso
console.log(sumaOrConcatenate(4, 3)); // --> 7
console.log(sumaOrConcatenate(4, "hello")); // --> 4:hello
console.log(sumaOrConcatenate("hello", "world")); // --> hello-world

// Ejercicio 3
interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}

interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}
// Función que verifica si un objeto es un Car
function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Car).pressPedal !== undefined;
}

// Función que acepta un parámetro que puede ser Car o Motorcycle
function handleVehicle(vehicle: Car | Motorcycle): void {
  vehicle.turnOnEngine();
  if (isCar(vehicle)) {
    vehicle.pressPedal();
  } else {
    vehicle.openThrottle();
  }
}

// Ejemplos de uso
const myCar: Car = {
  tires: 4,
  turnOnEngine: () => console.log("Car engine started"),
  pressPedal: () => console.log("Car is moving"),
};

const myMotorcycle: Motorcycle = {
  tires: 2,
  turnOnEngine: () => console.log("Motorcycle engine started"),
  openThrottle: () => console.log("Motorcycle is moving fast"),
};

handleVehicle(myCar); // Debería imprimir "Car engine started" y "Car is moving"
handleVehicle(myMotorcycle); // Debería imprimir "Motorcycle engine started" y "Motorcycle is moving fast"

// Ejercicio 4
// Función genérica que remueve el primer elemento de un array
function removeFirstEntry<T>(array: T[]): T[] {
  return array.slice(1);
}

// Ejemplos de uso
const strArray: string[] = [
  "Hello",
  "World",
  "Im",
  "a",
  "Full",
  "Stack",
  "Developer",
];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ["Hello", "I", "have", 3, "tasks"];
// const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22]; // No se puede usar con tipos no primitivos

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
