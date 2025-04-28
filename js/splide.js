document.addEventListener("DOMContentLoaded", function () {
  new Splide(".our_team_slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    gap: "2rem",
    breakpoints: {
      640: {
        perPage: 2,
        gap: "1rem",
      },
      480: {
        perPage: 1,
        gap: "1rem",
      },
    },
  }).mount();

  new Splide(".testimonials_slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    gap: "2rem",
    breakpoints: {
      640: {
        perPage: 2,
        gap: "1rem",
      },
      480: {
        perPage: 1,
        gap: "1rem",
      },
    },
  }).mount();
});
