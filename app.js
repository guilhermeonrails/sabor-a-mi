<script>
  const slides = document.querySelectorAll("#carousel-slides > div");
  const totalSlides = slides.length;
  const slidesContainer = document.getElementById("carousel-slides");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll("#carousel-dots button");

  let currentIndex = 0;

  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("opacity-100", index === currentIndex);
      dot.classList.toggle("opacity-50", index !== currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Inicializa
  updateCarousel();
</script>
