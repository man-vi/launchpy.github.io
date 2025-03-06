document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    //
  
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    }
  
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-links") && !e.target.closest(".hamburger")) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle("active");
        header.classList.toggle("active");
        const icon = header.querySelector(".accordion-icon i");
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");
      });
    });
  
    // Testimonials slider
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".dot");
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.opacity = "0";
        slide.style.transform = "translateX(100%)";
        dots[i].classList.remove("active");
      });
      slides[index].style.opacity = "1";
      slides[index].style.transform = "translateX(0)";
      dots[index].classList.add("active");
    };
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    };
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
    });
    showSlide(currentSlide);
  
    // Modal functionality
    const scheduleDemoBtn = document.getElementById("scheduleDemo");
    const scheduleModal = document.getElementById("scheduleModal");
    const closeModal = document.querySelector(".close-modal");
    scheduleDemoBtn.addEventListener("click", () => {
      scheduleModal.classList.add("active");
    });
    closeModal.addEventListener("click", () => {
      scheduleModal.classList.remove("active");
    });
    window.addEventListener("click", (e) => {
      if (e.target === scheduleModal) {
        scheduleModal.classList.remove("active");
      }
    });
  });
  