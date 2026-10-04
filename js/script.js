/*===== TOGGLE MENU =====*/
const navMenu = document.getElementById("nav_menu"),
  toggleMenu_Btn = document.getElementById("toggle_btn"),
  closeMenu_btn = document.getElementById("close_btn");
const mobileNavQuery = window.matchMedia("(max-width: 991px)");

function setMenuOpen(isOpen) {
  navMenu.classList.toggle("show", isOpen);
  toggleMenu_Btn.setAttribute("aria-expanded", String(isOpen));
  toggleMenu_Btn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  navMenu.inert = mobileNavQuery.matches && !isOpen;
}

setMenuOpen(false);

// SHOW MENU
toggleMenu_Btn.addEventListener("click", () => {
  setMenuOpen(toggleMenu_Btn.getAttribute("aria-expanded") !== "true");
});

// HIDE MENU
closeMenu_btn.addEventListener("click", () => {
  setMenuOpen(false);
  toggleMenu_Btn.focus();
});

mobileNavQuery.addEventListener("change", ({ matches }) => {
  navMenu.classList.remove("show");
  toggleMenu_Btn.setAttribute("aria-expanded", "false");
  toggleMenu_Btn.setAttribute("aria-label", "Open navigation menu");
  navMenu.inert = matches;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggleMenu_Btn.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    toggleMenu_Btn.focus();
  }
});

/*===== ACTIVE AND REMOVE MENU =====*/
const menuLinks = document.querySelectorAll(".nav_link");
function clickAction() {
  /* ==== ADD'S ('active') class to the LINK ==== */
  menuLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  setMenuOpen(false);
  if (mobileNavQuery.matches) toggleMenu_Btn.focus();
}
menuLinks.forEach((n) => n.addEventListener("click", clickAction));

/*===== FOOTER YEAR =====*/
document.getElementById("current_year").textContent = new Date().getFullYear();
