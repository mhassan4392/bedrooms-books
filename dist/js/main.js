// navbar function

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-header").classList.add('navbar-scroll');
    document.getElementById("main-header").classList.remove('navbar-first');
    // document.querySelector('.brand-img').setAttribute('src','images/logo.png');
    // document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("main-header").classList.remove('navbar-scroll');
    document.getElementById("main-header").classList.add('navbar-first');
    // document.querySelector('.brand-img').setAttribute('src','images/logo.png');
    // document.getElementById("myBtn").style.display = "none";
  }
}

// show navbar and close navbar functions
let navbarBtn = document.querySelector('.navbar-btn');
let closeNavbarBtn = document.querySelector('.navbar-close-btn');
let navbarMenu = document.querySelector('.navbar-menu');
if(navbarBtn){
    navbarBtn.addEventListener('click', function(){
        navbarMenu.classList.add('show');
    });

    navbarMenu.addEventListener('click', function(e){
      if(e.target.classList.contains('navbar-menu')){
        navbarMenu.classList.remove('show');
      }
    });
}

if(closeNavbarBtn){
    closeNavbarBtn.addEventListener('click', function(){
        navbarMenu.classList.remove('show');
    });
}




//showcase slider

let sliderImages = document.querySelectorAll(".slide");

if(sliderImages){
  let arrowLeft = document.querySelector("#left-arrow"),
  arrowRight = document.querySelector("#right-arrow"),
  current = 0;
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

// Show prev
function slideLeft() {
  reset();
  current--;

  if(current < 0){
    current = sliderImages.length - 1;
}
  sliderImages[current].style.display = "block";
  
}

// Show next
function slideRight() {
  reset();
  current++;
  if(current == sliderImages.length){
    current = 0;
  }
  sliderImages[current].style.display = "block";

  
}
 function slides() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  };

startSlide();

setInterval(slides, 15000);

}


let sendMsgCard = document.querySelector('.send-msg .card');
let consult = document.querySelector('.consult-btn');
let consultCloseBtn = document.querySelector('.consult-close');

if(consult){
  consult.addEventListener('click', function(){
    sendMsgCard.classList.toggle('show');
  })
}

if(consultCloseBtn){
  consultCloseBtn.addEventListener('click', function(){
    sendMsgCard.classList.remove('show');
  })
}

