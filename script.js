// Navbar

let menu = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

 

menu.onclick = () => {

    navbar.classList.toggle('active');

}

 

window.onscroll = () => {

    navbar.classList.remove('active');

}



 

// Scroll Reveal

const sr = ScrollReveal ({

    origin: 'top',

    distance: '40px',

    duration: 2000,

    reset: true

});

 
sr.reveal(`.home-text, .home-img,

            .about-img, .about-text,

            .box, .s-box,

            .btn, .connect-text,

            .contact-box`, {

    interval: 200

})