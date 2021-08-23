// selectors
const togglerBox = document.querySelector(".nav__toggler");
const togglerIcon = document.querySelector(".nav__toggler--icon");

// events
togglerBox.addEventListener("click", function (e) {
  e.preventDefault();
  togglerBox.classList.toggle("toggle");
});
