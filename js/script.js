// Parallax
let hero_right = document.getElementById("hero-right");
let hero_left = document.getElementById("hero-left-title");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  hero_left.style.transform = "translateX(" + value * -0.5 + "px)";
  hero_right.style.transform = "translateX(" + value * -0.5 + "px)";
});

// Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 400;

const startCounting = (valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue)
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = startValue
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      valueDisplays.forEach(startCounting)
      observer.unobserve(entry.target)
    }
  });
};

const observer = new IntersectionObserver(observerCallback, options);

valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay)
});

