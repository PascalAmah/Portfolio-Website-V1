// navbar toggle
const menuIcon = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// scroll section active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header div a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header div a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('#home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('#home-image, .my-skills, .portfolio-box, #contact form', { origin: 'bottom' });
ScrollReveal().reveal('#home-content h1, #about-image', { origin: 'left' });
ScrollReveal().reveal('#home-content p, #about-content', { origin: 'right' });


// Typed Text
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Graphic Designer', 'Saxophonist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Light/Dark Mode
const lightMode = document.querySelector('.bx-sun');
const lightModeBg = document.querySelector('body');
const aboutBg = document.querySelector('.about');
const portfolioBg = document.querySelector('.portfolio');
const inputBg = document.querySelectorAll('.input-area');
const btnDark = document.querySelectorAll('.btn');
// const darkMode = document.querySelector('dark');

console.log(inputBg);

lightMode.onclick = () => {
    lightMode.classList.toggle('bxs-moon');
    lightModeBg.classList.toggle('light-mode');
    aboutBg.classList.toggle('light-mode-2');
    portfolioBg.classList.toggle('light-mode-2');
    inputBg.forEach(function(inputElement) {
        inputElement.classList.toggle('light-mode-2');
    }); 
    
    btnDark.forEach(function(btnElement) {
        btnElement.classList.toggle('light-mode-2');
    });
};