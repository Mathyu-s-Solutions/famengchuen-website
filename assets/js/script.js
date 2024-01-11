document.addEventListener("DOMContentLoaded", function () {
  fetch("components/Header/Header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;
    });
  fetch("components/Sections/Home.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("home-container").innerHTML = html;
    });
  fetch("components/Sections/About.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("about-container").innerHTML = html;
    });
  fetch("components/Sections/Services.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("services-container").innerHTML = html;
    });
  fetch("components/Sections/Members.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("members-container").innerHTML = html;
    });
  fetch("components/Sections/Contact.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("contact-container").innerHTML = html;
    });
  fetch("components/Footer/Footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    });
});
