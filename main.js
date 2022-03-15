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


