let hero_right = document.getElementById('hero-right');  
let hero_left = document.getElementById('hero-left-title');

window.addEventListener('scroll', function(){  
    let value = window.scrollY;  
    hero_left.style.transform = 'translateX(' + value * -0.5 + 'px)'; 
    hero_right.style.transform = 'translateX(' + value * -0.5 + 'px)';  
})

let valueDisplays = document.querySelectorAll('.num');
let interval = 400;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute('data-val'));
    let duration = Math.floor(interval/  endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
})