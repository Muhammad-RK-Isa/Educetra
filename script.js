// change navbar background color when scrolling downwards

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', scrollY > 100);
});


// ===========================show or hide nav menu in tablet or mobile devices==========================

const navMenu = document.getElementsByClassName('nav__menu')[0];
const openMenuBtn = document.getElementsByClassName('open-menu-btn')[0];
const closeMenuBtn = document.getElementsByClassName('close-menu-btn')[0];
const header = document.getElementsByTagName('header')[0];


const NavBtnToggler = x => {
    if (x.matches) {
        openMenuBtn.style.display = 'inline-block';
        navMenu.style.display = 'none';
        console.log(`It's 600px or less`)
    }
    else {
        console.log(`It's higher than 600px`);
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'none';
        navMenu.style.display = 'flex';
    };
};

let windowWidthMatcher = window.matchMedia("(max-width: 1024px)");
NavBtnToggler(windowWidthMatcher);
windowWidthMatcher.addEventListener('change', NavBtnToggler)

openMenuBtn.addEventListener('click', () => {
    navMenu.style.display = 'flex';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
});

const closeNavMenu = (e) => {
    navMenu.style.display = 'none';
    openMenuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'none';
};

closeMenuBtn.addEventListener('click', closeNavMenu);

