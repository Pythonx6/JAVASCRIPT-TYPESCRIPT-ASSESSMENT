"use strict";
var person = {
    name: "Alexander",
    age: 30,
    displayName: function () {
        console.log(this.name);
    },
    talk: function (phrase) {
        console.log(phrase);
    },
    isAdult: function () {
        return this.age >= 18;
    },
    getInfoArray: function () {
        return [this.name, this.age, this.isAdult() ? "Adulto" : "No adulto"];
    },
};
var personInfoArray = person.getInfoArray();
console.log(personInfoArray); // Debería imprimir ["Alexander", 30, "Adulto"]
var studentName = "Pepe"; // Be careful, use with precaution
studentName = 23; // It will work great
