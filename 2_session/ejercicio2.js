// Ejercicio 2: Enumera los distintos valores que puede tener "this" y pon un ejemplo de cada uno.

// Global context example
function globalContext() {
  console.log("Global context:", this);
}

// Method context example
const obj = {
  methodContext: function () {
    console.log("Method context:", this);
  },
};

// Constructor context example
function ConstructorContext() {
  console.log("Constructor context:", this);
}

// Explicit context example
const explicitContext = {
  name: "Explicit context",
};

function showExplicitContext() {
  console.log("Explicit context:", this);
}

// Arrow function context example
const arrowFunctionContext = {
  arrow: () => {
    console.log("Arrow function context:", this);
  },
};

// Add an event listener to the window load event
window.addEventListener("load", () => {
  // Global context example
  globalContext();

  // Method context example
  obj.methodContext();

  // Constructor context example
  new ConstructorContext();

  // Explicit context example
  showExplicitContext.call(explicitContext);

  // Arrow function context example
  arrowFunctionContext.arrow();

  // Show results on the webpage
  const resultDiv = document.getElementById("ejercicio-2-output");
  if (resultDiv) {
    resultDiv.innerHTML = `
            <p>Check the console for different 'this' context examples:</p>
            <ul>
                <li>Global context: Check the console</li>
                <li>Method context: Check the console</li>
                <li>Constructor context: Check the console</li>
                <li>Explicit context: Check the console</li>
                <li>Arrow function context: Check the console</li>
            </ul>
        `;
  }
});
