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
    }
    else {
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



// ======================================================FAQ========================+-+-+-

// const faqArticles = () => {
//     const faqs = document.getElementsByClassName('faq');
//     for (let i = 0; i < faqs.length; i++) {
//         const faq = faqs[i];
//         faq.addEventListener('click', expandFaq);
//     };
// };

// const expandFaq = (e) => {
//     individualFaq = e.target;
//     const answer = individualFaq.getElementsByClassName('answer')[0];
    // const minusBtn = individualFaq.getElementsByClassName('minus__icon')[0];
    // const plusBtn = individualFaq.getElementsByClassName('plus__icon')[0];
    // minusBtn.style.display = 'inline-block'
    // plusBtn.style.display = 'none'
//     answer.style.display = 'block';
// };

// faqArticles();

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('expanded__faq')
        const answer = faq.getElementsByClassName('answer')[0];
        answer.classList.toggle('show__answer');

        //toggle plus and minus icon
        const icon = faq.querySelector('.icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
            console.log(icon)
        }
        else{
            icon.className = 'uil uil-plus';
        };
    });
});


