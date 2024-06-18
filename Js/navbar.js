// When the user scrolls, execute the myFunction function
window.onscroll = function() { myFunction() }; 

var navbar = document.getElementById("navbar"); // Get the navbar element
var sticky = navbar.offsetTop; // Store the offset position of the navbar

function myFunction() { // Define the myFunction function


  // Check if the page has scrolled vertically past the offset position of the navbar
  if (window.pageYOffset >= sticky) { 
    navbar.classList.add("sticky"); // Add the "sticky" class to the navbar
  } 

  // If not, remove the "sticky" class from the navbar
  else { 
    navbar.classList.remove("sticky"); // Remove the "sticky" class from the navbar
  }
}
