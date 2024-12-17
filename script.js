// script.js

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust for header height if needed
      behavior: "smooth",
    });
  });
});

// Contact form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Extract form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    this.reset(); // Clear the form
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
