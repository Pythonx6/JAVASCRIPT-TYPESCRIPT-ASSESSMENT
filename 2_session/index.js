// Ejercicio 1

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

// Función loginWitUsername para manejar la autenticación
let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    // 'rejected' cambiado a 'reject' para mantener consistencia
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

// Función fetchData para obtener datos de una API
let fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

document.addEventListener("DOMContentLoaded", function () {
  // Event listener para el botón de loginSuccess
  document
    .getElementById("loginSuccess")
    .addEventListener("click", function () {
      // Creamos un objeto login correcto
      let login = { username: "admin", password: "passwd" };

      // Llamamos a la función loginWitUsername con los parámetros correctos
      loginWitUsername(login.username, login.password)
        .then(function (result) {
          alert(result); // Muestra alerta de "User logged in"
        })
        .catch(function (error) {
          alert(error); // En caso de error, muestra alerta de error
        });
    });

  // Event listener para el botón de loginFailure
  document
    .getElementById("loginFailure")
    .addEventListener("click", function () {
      // Creamos un objeto login con parámetros incorrectos
      let login = { username: "pepe", password: "bad" };

      // Llamamos a la función loginWitUsername con los parámetros incorrectos
      loginWitUsername(login.username, login.password)
        .then(function (result) {
          alert(result); // Si ocurre, este código no se ejecutará en caso de éxito
        })
        .catch(function (error) {
          alert(error); // Muestra alerta de error: "Error: invalid username or password"
        });
    });

  // Event listener para el botón de loginSuccessAsync
  document
    .getElementById("loginSuccessAsync")
    .addEventListener("click", async function () {
      try {
        // Creamos un objeto login correcto
        let login = { username: "admin", password: "passwd" };

        // Llamamos a la función loginWitUsername con los parámetros correctos de manera asíncrona
        let result = await loginWitUsername(login.username, login.password);
        alert(result); // Muestra alerta de "User logged in"
      } catch (error) {
        alert(error); // En caso de error, muestra alerta de error
      }
    });

  // Event listener para el botón de loginFailureAsync
  document
    .getElementById("loginFailureAsync")
    .addEventListener("click", async function () {
      try {
        // Creamos un objeto login con parámetros incorrectos
        let login = { username: "pepe", password: "bad" };

        // Llamamos a la función loginWitUsername con los parámetros incorrectos de manera asíncrona
        let result = await loginWitUsername(login.username, login.password);
        alert(result); // Si ocurre, este código no se ejecutará en caso de éxito
      } catch (error) {
        alert(error); // Muestra alerta de error: "Error: invalid username or password"
      }
    });
});

// Event listener para el botón de fetchSuccess
document
  .getElementById("fetchSuccess")
  .addEventListener("click", async function () {
    try {
      // Llamamos a la función fetchData con la URL correcta
      let data = await fetchData("https://jsonplaceholder.typicode.com/posts");
      console.log(data); // Muestra los datos en la consola
    } catch (error) {
      console.error("Error fetching data: ", error); // Muestra el error en la consola
    }
  });

// Event listener para el botón de fetchFailure
document
  .getElementById("fetchFailure")
  .addEventListener("click", async function () {
    try {
      // Llamamos a la función fetchData con una URL incorrecta
      let data = await fetchData(
        "https://jsonplaceholder.typicode.com/invalid-url"
      );
      console.log(data); // Si ocurre, este código no se ejecutará en caso de éxito
    } catch (error) {
      console.error("Error fetching data: ", error); // Muestra el error en la consola
    }
  });

// Event listener para el botón de fetchPostAsync
document
  .getElementById("fetchPostAsync")
  .addEventListener("click", async function () {
    try {
      // Llamamos a la función fetchData con la URL correcta de un post específico
      let data = await fetchData(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      console.log(data); // Muestra los datos del post en la consola
    } catch (error) {
      console.error("Error fetching post data: ", error); // Muestra el error en la consola
    }
  });

// Event listener para el botón de fetchPostFailureAsync
document
  .getElementById("fetchPostFailureAsync")
  .addEventListener("click", async function () {
    try {
      // Llamamos a la función fetchData con una URL incorrecta de un post específico
      let data = await fetchData(
        "https://jsonplaceholder.typicode.com/invalid-post-url"
      );
      console.log(data); // Si ocurre, este código no se ejecutará en caso de éxito
    } catch (error) {
      console.error("Error fetching post data: ", error); // Muestra el error en la consola
    }
  });
