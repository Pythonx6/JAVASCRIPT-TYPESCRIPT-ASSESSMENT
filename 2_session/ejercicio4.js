// Clase Login
class Login {
  // Definimos la clase Login
  constructor(username, password) {
    // Constructor de la clase, recibe username y password como parámetros
    this.username = username; // Inicializa el atributo username con el valor pasado
    this.password = password; // Inicializa el atributo password con el valor pasado
  }

  login() {
    // Método login para verificar las credenciales
    if (this.username === "admin" && this.password === "passwd") {
      // Verifica si las credenciales son correctas
      alert("User logged in"); // Muestra una alerta si el usuario está logeado correctamente
    } else {
      // Si las credenciales son incorrectas
      alert("User or passwd incorrect"); // Muestra una alerta indicando que el usuario o la contraseña son incorrectas
    }
  }
}

// Ejemplo de uso
let login = new Login("admin", "passwd"); // Crea una instancia de la clase Login con credenciales correctas
login.login(); // Llama al método login, debe mostrar la alerta "User logged in"

let logbad = new Login("pepe", "bad"); // Crea una instancia de la clase Login con credenciales incorrectas
logbad.login(); // Llama al método login, debe mostrar la alerta "User or passwd incorrect"
