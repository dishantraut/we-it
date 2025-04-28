/*===== SCROLL REVEAL ANIMATION =====*/
ScrollReveal({
  origin: "left",
  distance: "70px",
  duration: 500,
  reset: false,
}).reveal(".hero", { delay: 500 });

ScrollReveal({
  origin: "right",
  distance: "70px",
  duration: 700,
  reset: false,
}).reveal(".info", { delay: 700 });

ScrollReveal({
  origin: "left",
  distance: "70px",
  duration: 1000,
  reset: false,
}).reveal(".services", { delay: 800 });

ScrollReveal({
  origin: "right",
  distance: "70px",
  duration: 1200,
  reset: false,
}).reveal(".works", { delay: 1000 });

/*===== GSAP ANIMATION =====*/
gsap.from(".logo", { opacity: 0, y: "-100px", delay: 0.5, duration: 1 });
gsap.from(".list_item", {
  opacity: 0,
  y: "-100px",
  duration: 0.5,
  delay: 1,
  stagger: 0.2,
});
