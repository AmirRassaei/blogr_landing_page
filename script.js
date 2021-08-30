"use strict";

// global variables
let navIsActive = false;

// selectors
const burger = document.querySelector(".navbar__toggler");
const navigation = document.querySelector(".navbar__collapse");
const navLinks = document.querySelector(".navbar__nav");
const subMenus = document.querySelectorAll(".nav__sub-menu");
const navArrows = document.querySelectorAll(".nav__link-arrow");

// events
const activateNav = () => {
  burger.addEventListener("click", function (e) {
    e.preventDefault();
    navIsActive = !navIsActive;
    // toggler animation
    burger.classList.toggle("toggler-active");

    // open the nav
    navigation.classList.toggle("nav-active");

    // resetting menu style when it is closed
    // close sub-menu when the menu was closed
    if (!navigation.classList.contains("nav-active")) {
      subMenus.forEach((subMenu) => {
        subMenu.classList.remove("sub-menu-active");
      });
      navArrows.forEach((arrow) => {
        arrow.classList.remove("rotate-arrow");
      });
    }
  });

  // open the sub-menu
  navLinks.addEventListener("click", (e) => {
    // stop the event on desktop version
    if (navIsActive && e.target.parentElement.children[1]) {
      e.target.parentElement.children[1].classList.toggle("sub-menu-active");
      e.target.children[0].classList.toggle("rotate-arrow");
    }
  });

  //close other sub menu
};

const app = () => {
  activateNav();
};

app();

