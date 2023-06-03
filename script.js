// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar links
    var navLinks = document.querySelectorAll(".navbar a");
  
    // Loop through each navbar link
    navLinks.forEach(function(link) {
      // Add click event listener to each link
      link.addEventListener("click", function(event) {
        // Prevent the default link behavior
        event.preventDefault();
  
        // Get the target page from the link's href attribute
        var targetPage = this.getAttribute("href");
  
        // Redirect to the target page
        window.location.href = targetPage;
      });
    });
  });
  