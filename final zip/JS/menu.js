const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Apalancar el Nav
    burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //Animar los Links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        //Probando si toma todos los li
        //console.log(index / 5);

    });
}


navSlide();