/*===== TOGGLE MENU =====*/
const navMenu = document.getElementById("nav_menu"),
  toggleMenu_Btn = document.getElementById("toggle_btn"),
  closeMenu_btn = document.getElementById("close_btn");

// SHOW MENU
toggleMenu_Btn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDE MENU
closeMenu_btn.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
const menuLinks = document.querySelectorAll(".nav_link");
function clickAction() {
  /* ==== ADD'S ('active') class to the LINK ==== */
  menuLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /* ==== AFTER CLICK REMOVE CLASS ('show') FROM 'navMenu' ==== */
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}
menuLinks.forEach((n) => n.addEventListener("click", clickAction));

// Form for Alerting User
const form = document.querySelector("#formInp");
function alertUser(e) {
  e.preventDefault();
  const name = document.querySelector("#nameInp").value;
  if (name != "") {
    alert(
      `Dear ${name},  \n\n\nPlease call us on +91 8591014774 or \nmail us at weit_hrd@yahoo.com \n\n\nThanks & Regrads\nwe-it`
    );
  } else {
    alert("Please Enter Valid Crentials");
  }
}
form.addEventListener("submit", alertUser);

// Map Initiated
let mymap = L.map("mapid").setView([19.150696406423705, 72.92783854434671], 14);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

L.marker([19.150696406423705, 72.92783854434671])
  .addTo(mymap)
  .bindPopup(
    `<div class="w-full h-full text-center text-md font-semibold "><p>We are here</p></div>`
  )
  .openPopup();
