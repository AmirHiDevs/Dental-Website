/*================= VARIABLES =================*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');
let langEn = document.querySelector('#home'); // need to change id => #lang-btn

/*================= MENU CLOSE ICON =================*/
menu.onclick = () => {
    menu.classList.toggle('uil-times');
    navbar.classList.toggle('active');
}

/*================= NAVBAR COLOR CHANGE =================*/
window.onscroll = () => {
    menu.classList.remove('uil-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active')
    }
   
}

/*================= RTL & LTR CONVERSION =================*/
langEn.onclick = ()=> {
    langEn.classList.toggle('ltr')
}

/*================= SWIPER ARTICLE =================*/
 var swiperArticle = new Swiper("#article", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 75,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
/*================= SWIPER COMMENT =================*/
var swiperComment = new Swiper("#comment", {
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });



