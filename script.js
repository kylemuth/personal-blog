"use strict";

const openModal = document.querySelectorAll(".openModal");

// basic functions
const openModals = function () {
  document.querySelector(".hero-wrapper").classList.add("blur");
  document.querySelector(".modal").classList.toggle("hide");
};
const closeModals = function () {
  document.querySelector(".hero-wrapper").classList.remove("blur");
  document.querySelector(".modal").classList.toggle("hide");
};

// opening modals
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", openModals);
}

// closing  modals
document.querySelector(".hero-wrapper").addEventListener("click", function () {
  if (document.querySelector(".hero-wrapper").classList.contains("blur")) {
    closeModals();
  }
});

