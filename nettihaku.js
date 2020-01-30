const fetch = require('node-fetch'); //Noden vaatima moduuli, jolla fetch tehdään
 
const fetchUrl = async () => { 
    try {
    //Verkosta haku täytyy tehdä asynkronisesti
 const response = await fetch('https://jsonplaceholder.typicode.com/users/5'); 
 const json = await response.json();
console.log("Nimi: " + json.name);
console.log("Käyttäjä: " + json.username);
console.log("Kaupunki: " + json.address.city); 
} catch (error) {
console.log('Ei onnistunut haku. Kokeile uudestaan.');
console.log('Koodauksen onnea. Nauti!'); }
  }
fetchUrl();