// slideshow 1

const slides_one = document.querySelectorAll('.home-portfolio-slideshow img');

  console.log(slides_one);
  let currentIndex_one = 0;

  setInterval(() => {
    slides_one[currentIndex_one].classList.remove('active');
    currentIndex_one = (currentIndex_one + 1) % slides_one.length;
    slides_one[currentIndex_one].classList.add('active');
  }, 3000);

// slideshow 2

const slides = document.querySelectorAll('.home-personal-portfolio-slideshow img');

  console.log(slides);
  let currentIndex = 0;

  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 3000);