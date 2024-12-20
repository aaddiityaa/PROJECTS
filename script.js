// Add interactivity to the "Learn More" button
document.getElementById("cta-button").addEventListener("click", function() {
    alert("Welcome! Here's more about us.");
  });
  
  // Handle the contact form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for your message!");
      // Reset form
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  // Smooth scroll to sections
  document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });