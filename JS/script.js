// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });                
        };
    });

    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// scroll reveal

ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'E-Sport Player', 'Game Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// contact form js
const scriptURL = 'https://script.google.com/macros/s/AKfycbxsWjTNU04lGM7fOdUF15UiWlSwSyQmiFPJm2n5TO1BysjhmlcfukRv9ET_ezRi53Y/exec';
const form = document.forms['contact-form'];
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Show loading message
    statusMessage.innerHTML = 'Submitting form...';
    
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        statusMessage.innerHTML = 'Thank you! Form has been submitted successfully.';
        form.reset(); // Clear the form
        setTimeout(() => {
            window.location.reload();
        }, 2000); // Reload after 2 seconds
    })
    .catch(error => {
        console.error('Error!', error.message);
        statusMessage.innerHTML = 'Error submitting form. Please try again.';
    });
});

// snowfall effect

// function createSnowflake() {
//     const snowflake = document.createElement('div');
//     snowflake.className = 'snowflake';
//     snowflake.innerHTML = '❅';
    
//     snowflake.style.left = Math.random() * 100 + 'vw';
//     snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
//     snowflake.style.opacity = Math.random();
//     snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    
//     document.body.appendChild(snowflake);
    
//     snowflake.addEventListener('animationend', () => {
//       snowflake.remove();
//     });
//   }

//   setInterval(createSnowflake, 100);

// celebration effect

// function createCelebration() {
//     const elements = ['𝟸𝟶𝟸𝟻','𝓗𝓪𝓹𝓹𝔂 𝓝𝓮𝔀 𝓨𝓮𝓪𝓻','🎉', '✨', '🎊', '🌟'];
//     const item = document.createElement('div');
//     item.className = 'celebration-item';
//     item.innerHTML = elements[Math.floor(Math.random() * elements.length)];
    
//     item.style.left = Math.random() * 100 + 'vw';
//     item.style.animationDuration = Math.random() * 3 + 2 + 's';
//     item.style.opacity = Math.random();
//     item.style.fontSize = (Math.random() * 10 + 10) + 'px';
    
//     document.body.appendChild(item);
    
//     item.addEventListener('animationend', () => {
//       item.remove();
//     });
//   }
  
//   setInterval(createCelebration, 200);