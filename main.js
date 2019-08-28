const animatedElem = document.querySelector(".animated-element");

const texts = document.querySelectorAll(".text");

const textTwoRect = texts[1].getBoundingClientRect();

window.addEventListener("scroll", function() {
  let scroll = window.scrollY;

  if (scroll >= textTwoRect.top) {
    animatedElem.style.height = `${200}%`;
    texts[1].style.opacity = 1;
    texts[1].style.transform = `translateY(${0}px)`;
  } else {
    animatedElem.style.height = `${100}%`;
    texts[1].style.opacity = 0;
    texts[1].style.transform = `translateY(${150}px)`;
  }
});
