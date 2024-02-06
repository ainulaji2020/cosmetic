// document.addEventListener("DOMContentLoaded", function () {
//   var currentSlide = 0;
//   var currentSlideTop = 0;
//   var totalSlide = document.getElementsByClassName("carousel-slide").length; // Jumlah total slide
//   var totalSlideTop = document.getElementsByClassName("carousel-slide-top").length; // Jumlah total slide
//   var slides = document.querySelector(".carousel-track-bottom");
//   var slidesTop = document.querySelector(".carousel-track");

//   function showSlide(index) {
//     currentSlide = index;
//     var translateValue = -currentSlide * 16.6667; /* Menggunakan nilai 20 karena flex: 0 0 20% pada setiap slide */
//     slides.style.transform = "translateX(" + translateValue + "%)";
//   }

//   function showSlideTop(index) {
//     currentSlideTop = index;
//     var translateValue = -currentSlideTop * 33.3333; /* Menggunakan nilai 20 karena flex: 0 0 20% pada setiap slide */
//     slidesTop.style.transform = "translateX(" + translateValue + "%)";
//   }

//   function nextSlide() {
//     // currentSlide = (currentSlide + 1) % (totalSlides * 2 - 1);
//     if (currentSlide < (totalSlide - 6)) {
//       currentSlide = currentSlide + 1;
//     } else {
//       currentSlide = 0;
//     }
//     showSlide(currentSlide);
//   }

//   function nextSlideTop() {
//     // currentSlide = (currentSlide + 1) % (totalSlides * 2 - 1);
//     if (currentSlideTop < (totalSlideTop - 5)) {
//       currentSlideTop = currentSlideTop + 1;
//     } else {
//       currentSlideTop = 0;
//     }
//     showSlideTop(currentSlideTop);
//   }

//   function prevSlide() {
//     currentSlideTop = (currentSlideTop - 1 + totalSlideTop * 2 - 1) % (totalSlideTop * 2 - 1);
//     showSlideTop(currentSlide);
//   }

//   function startAutoplay() {
//     autoplayInterval = setInterval(function () {
//       nextSlide();
//     }, 3000); // Ganti angka 3000 dengan interval (dalam milidetik) yang Anda inginkan
//   }

//   function stopAutoplay() {
//     clearInterval(autoplayInterval);
//   }

//   // Inisialisasi dan autoplay
//   showSlide(currentSlide);
//   showSlideTop(currentSlideTop);
//   startAutoplay();

//   // Tombol navigasi
//   document.getElementById("nextBtn").addEventListener("click", function () {
//     // stopAutoplay();
//     // alert('next')
//     nextSlideTop();
//   });

//   document.getElementById("prevBtn").addEventListener("click", function () {
//     // stopAutoplay();
//     // alert('prev')
//     prevSlide();
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  var currentSlideTop = 0;
  var slides = document.querySelector(".carousel-track-bottom");
  var slidesTop = document.querySelector(".carousel-track");
  var totalSlide = document.querySelectorAll(".carousel-slide").length;
  var totalSlideTop = document.querySelectorAll(".carousel-slide-top").length;

  function showSlide(index, element) {
    var translateValue = -index * (element === slides ? 16.6667 : 33.3333);
    element.style.transform = "translateX(" + translateValue + "%)";
  }

  function nextSlide(index, total, element, step) {
    index = (index + step) % (total - step + 1);
    showSlide(index, element);
    return index;
  }

  function startAutoplay() {
    autoplayInterval = setInterval(function () {
      currentSlide = nextSlide(currentSlide, totalSlide, slides, 1);
    }, 3000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  showSlide(currentSlide, slides);
  showSlide(currentSlideTop, slidesTop);
  startAutoplay();

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentSlideTop = nextSlide(currentSlideTop, totalSlideTop, slidesTop, 1);
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentSlideTop = nextSlide(currentSlideTop, totalSlideTop, slidesTop, -1);
  });
 });

