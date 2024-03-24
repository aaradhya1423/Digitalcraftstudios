document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - $('.navbar').outerHeight() // Adjust for navbar height
        }, 800);
      }
    });
  
    // Form validation for the contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        // Implement form validation logic here
        // Example: Check if fields are not empty and email is valid
      });
    }
  });
  