var typed = new Typed(".text", {
    strings: [" Front end developer", "Database enthusiast", "web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// Smooth scrolling function
document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});