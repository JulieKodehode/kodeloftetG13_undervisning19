// Flat array
const movies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "Pulp Fiction",
];

console.log(movies);
console.log(movies[2]);

//
//

// Object with arrays
const groceries = {
  fruits: ["apples", "bananas", "oranges"],
  vegetables: ["carrots", "broccoli", "spinach"],
  dairy: ["milk", "cheese", "yogurt"],
};

console.log(groceries);
console.log(groceries.fruits[0]);
console.log(groceries.vegetables[2]);
console.log(groceries.dairy[1]);

//
//

// Array with objects
const onlineStore = [
  {
    name: "Laptop",
    price: 1200,
    inStock: true,
  },
  {
    name: "Phone",
    price: 800,
    inStock: false,
  },
  {
    name: "Headphones",
    price: 150,
    inStock: true,
  },
];

console.log(onlineStore);
console.log(onlineStore[0].name);
console.log(onlineStore[2].price);
console.log(onlineStore[0].inStock);

//
//
//

const handleliste = [];
/*
handleliste.push("Melk");
handleliste.push("Smør");
handleliste.push("Egg");
handleliste.push("Ketchup");
*/

// Oppgagve 1: Bruk variabelen handleliste og legg til 4 verdier med .push()-metoden

//
//
// Første knapp push
const pushButton = document.querySelector("#pushButton");

pushButton.addEventListener("click", function () {
  console.log("Knapp er trykket!");

  const userInput = document.querySelector("#userInput").value;
  console.log(userInput);

  handleliste.push(userInput);
  console.log(handleliste);

  const displayOutput = document.querySelector("#displayOutput");
  displayOutput.textContent = handleliste;
});

const popButton = document.querySelector("#popButton");
popButton.addEventListener("click", function () {
  handleliste.pop();

  const displayOutput = document.querySelector("#displayOutput");
  displayOutput.textContent = handleliste;
});

// Andre knapp pop
/*
1. Lag en knapp i HTML og gi det en ID
2. Hent knappen til JS med å bruke ID-navnet og .value for å hente verdi
3. Bruk handeliste og .pop() metoden for å fjerne siste element i array
*/
