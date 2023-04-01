// Toggle Class Active
const navbarNav = document.querySelector(".navbar .navbar-nav");

// When Hamburger Menu OnClick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar navbar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function handleSubmit(event) {
  event.preventDefault(); // Prevents the form from submitting normally

  // Get the input values from the form
  const name = document.querySelector('input[placeholder="Name"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const phone = document.querySelector(
    'input[placeholder="Phone Number"]'
  ).value;

  // Check if all fields are filled in
  if (!name || !email || !phone) {
    alert("Please fill all fields.");
    return;
  }

  // Do something with the input values, e.g. send them to a server
  console.log(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}`);

  // Display the input values in a pop-up message
  const message = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}`;
  alert(message);

  // Reset the form after submitting
  event.target.reset();
}

// Attach the handleSubmit function to the form's submit event
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
