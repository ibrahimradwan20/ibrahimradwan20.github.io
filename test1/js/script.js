let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let colorBtn = document.querySelector('#color-btn');
let themeBtn = document.querySelector('#theme-btn');
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let colorsPalette = document.querySelector('.colors-palette');

menuBtn.onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  colorsPalette.classList.remove('active');
}

searchBtn.onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  colorsPalette.classList.remove('active');
}

colorBtn.onclick = () =>{
  colorsPalette.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  colorsPalette.classList.remove('active');
}

document.querySelectorAll('.colors-palette .color').forEach(btn =>{
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color',color);
  }
});

themeBtn.onclick = () => {
  themeBtn.classList.toggle('fa-sun');
  if(themeBtn.classList.contains('fa-sun')){
    document.body.classList.add('active');
  }else{
    document.body.classList.remove('active');
  }
}
var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 1000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});

VanillaTilt.init(document.querySelectorAll('.tilt'),{
  max:30
});


 function loader(){
   document.querySelector('.loader-container').classList.add('fade-out');
 }

 function fadeOut(){
   setInterval(loader,3000);
 }
 
 window.onload = fadeOut();



