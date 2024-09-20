let hero_title = document.getElementById('title-hero');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    hero_title.style.transform = 'translateX(' + value * -0.5 + 'px)';
})