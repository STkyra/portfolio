// Wanneer de gebruiker scrolt, voer de myFunction functie uit
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar"); // Haal het navbar element op
var sticky = navbar.offsetTop; // Bewaar de offset positie van de navbar

function myFunction() {
  // Controleer of de pagina verticaal is verschoven tot voorbij de offset positie van de navbar
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky"); // Voeg de "sticky" class toe aan de navbar
  } else {
    navbar.classList.remove("sticky"); // Verwijder de "sticky" class van de navbar
  }
}
