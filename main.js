// Dark and light theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');

    localStorage.setItem("saved-theme", getcurrentTheme());
    localStorage.setItem("saved-icon", getcurrentIcon());

});
const  getcurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark" : "light";
const  getcurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moom";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");
if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
// ===================change background haeder
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ====================================Services Modal
const modalViews = document.querySelectorAll(".services__modal");
const  modalBtns = document.querySelectorAll(".services__button");
const  modalClose = document.querySelectorAll(".services__modal-close");
var modal = function(modalClick){
    modalViews[modalClick].classList.add('active');

}     
modalBtns.forEach((mb, i)=>{
    mb.addEventListener('click', () =>{
        modal(i)
    });
});
modalClose.forEach((mc)=>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
         mv.classList.remove('active');
        });
    });
});
// =====================================mixitup filter portfolio
let mixerPortfolio = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
//---------------------active work
const linkWork = document.querySelectorAll(".work__item");
function activeWork(){
    linkWork.forEach(l=> l.classList.remove("active-work"))
    this.classList.add("active-work")
}
linkWork.forEach(l=> l.addEventListener('click', activeWork)) 
// =======================swiper testimonial
var swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    autoplay: true,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });
 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
 const sections = document.querySelectorAll('section[id]')

 function scrollActive(){
     const scrollY = window.pageYOffset
 
     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id')
 
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
         }else{
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
         }
     })
 }
 window.addEventListener('scroll', scrollActive)
 /*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
//============================================Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset : true,
})
sr.reveal(`.home_data`)
sr.reveal(`.home_handle`, {delay: 700})
sr.reveal(`.home_social, .home_scroll`, {delay: 900, origin: 'bottom'}) 

