// selectors
const togglerBox = document.querySelector(".navbar__toggler");

// events
togglerBox.addEventListener("click", function (e) {
  e.preventDefault();
  togglerBox.classList.toggle("toggle");
});
