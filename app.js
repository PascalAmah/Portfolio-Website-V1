// // loader logo
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingContainer = document.querySelector('.loader');
        loadingContainer.style.animation = 'fadeOut 1s forwards';

        
        // scroll reveal
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
    }, 3000);
});


// navbar toggle
const menuIcon = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

window.addEventListener('click', (event) => {
    if (navbar.classList.contains('active') && !navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});



// scroll section active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header div a');

window.addEventListener('scroll', () => {
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
});


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
const topHeaderMode = document.querySelector('.top-header');
const logoLight = document.querySelector('.logo-icon');
const navbarLight = document.querySelector('.navbar');
const navbarMode = document.querySelectorAll('.navbar-item');
const footerMode = document.querySelector('.footer');

lightMode.addEventListener('click', () => {
    lightMode.classList.toggle('bxs-moon');
    lightModeBg.classList.toggle('light-mode');
    aboutBg.classList.toggle('light-mode-2');
    portfolioBg.classList.toggle('light-mode-2');
    topHeaderMode.classList.toggle('light-mode-2'); 
    navbarLight.classList.toggle('light-mode-2');
    footerMode.classList.toggle('light-mode-2');
    
    // form input mode
    inputBg.forEach(function(inputElement) {
        inputElement.classList.toggle('light-mode-2');
    }); 
    
    // buttons mode
    btnDark.forEach(function(btnElement) {
        btnElement.classList.toggle('light-mode-2');
    });

    // navbar mode
    navbarMode.forEach(function(navbarItem) {
        navbarItem.classList.toggle('light-mode-2');
    });

    // logo mode
    if (lightMode.classList.toggle('bx-sun')) {
        logoLight.style.background = "url('images/logo.png')";
        logoLight.style.backgroundSize = 'contain';  
    }
    else {
        logoLight.style.background = "url('images/logo-dark.png')";
        logoLight.style.backgroundSize = 'contain';
    }
});


// ReadMore Button for about
const toggleReadMore = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

toggleReadMore.addEventListener('click', () => {
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        toggleReadMore.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        toggleReadMore.innerHTML = "Read More";
    }
});



// // elevation pitch modal
// const modalBtn = document.querySelector('.elevator-btn');
// const modalPop = document.querySelector('.elevation-modal');
// const modalClose = document.querySelector('.modal-exit');

// // elevator video stop
// const iframe = document.querySelector('#elevator-video');
// const url = iframe.src;

// modalBtn.onclick = () => {
//     iframe.src = url;
//     modalPop.style.display = 'block';
//     modalPop.style.transition = '3s ease';
// }

// modalClose.onclick = () => {
//     modalPop.style.display = 'none';
//     iframe.src = '';
// }