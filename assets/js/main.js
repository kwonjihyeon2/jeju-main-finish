
AOS.init();

const navi=document.querySelector('.right-menu');
const menuBtn=document.querySelector('.menu-btn');

menuBtn.addEventListener('click',()=>{
    navi.classList.toggle('gnb-btn');
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//top button
$(window).scroll(function(){
    if($(window).scrollTop() > 500){
        $('.top').fadeIn();
    } else{
        $('.top').fadeOut();
    }
});