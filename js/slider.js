document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  var currentSlideTop = 0;
  var slides = document.querySelector(".carousel-track-bottom");
  var slidesTop = document.querySelector(".carousel-track");
  var totalSlide = document.querySelectorAll(".carousel-slide").length;
  var totalSlideTop = document.querySelectorAll(".carousel-slide-top").length;
  var autoplayInterval;

  function showSlide(index, element) {
    var translateValue = -index * (element === slides ? 16.6667 : 33.3333);
    element.style.transform = "translateX(" + translateValue + "%)";
  }

  function nextSlide(index, total, element, step) {
    index = (index + step + total) % total;
    showSlide(index, element);
    return index;
  }

  function startAutoplay() {
    autoplayInterval = setInterval(function () {
      currentSlideTop = nextSlide(currentSlideTop, totalSlideTop, slidesTop, 1);
    }, 3000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  showSlide(currentSlide, slides);
  showSlide(currentSlideTop, slidesTop);
  startAutoplay();

  slidesTop.addEventListener("mouseenter", stopAutoplay);
  slidesTop.addEventListener("mouseleave", startAutoplay);

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentSlideTop = nextSlide(currentSlideTop, totalSlideTop, slidesTop, -1);
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentSlideTop = nextSlide(currentSlideTop, totalSlideTop, slidesTop, 1);
  });

  // Infinite Carousel Autoplay
  function autoplay() {
    if (currentSlide >= totalSlide - 1) {
      currentSlide = 0;
      showSlide(currentSlide, slides);
    } else {
      currentSlide++;
      showSlide(currentSlide, slides);
    }
  }

  setInterval(autoplay, 1000);

  // Pause autoplay on mouse enter
  slides.addEventListener("mouseenter", function () {
    clearInterval(autoplayInterval);
  });

  // Resume autoplay on mouse leave
  slides.addEventListener("mouseleave", function () {
    autoplayInterval = setInterval(autoplay, 3000);
  });
});
