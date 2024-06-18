var slidePosition = 1;
SlideShow(slidePosition);

// Vooruit/terug controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

// Afbeeldingen controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("containers"); // Haal alle elementen met class "containers" op
  var circles = document.getElementsByClassName("dots"); // Haal alle elementen met class "dots" op
  if (n > slides.length) { slidePosition = 1 } // Als de huidige positie groter is dan het aantal slides, ga naar de eerste slide
  if (n < 1) { slidePosition = slides.length } // Als de huidige positie kleiner is dan 1, ga naar de laatste slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Verberg alle slides
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", ""); // Verwijder de "enable" class van alle stippen
  }
  slides[slidePosition - 1].style.display = "block"; // Toon de huidige slide
  circles[slidePosition - 1].className += " enable"; // Voeg de "enable" class toe aan de huidige stip
}
