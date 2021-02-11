import $ from 'jquery';
import '../../pages/Treinamento/style.css'
import React from 'react'

// import '../../css/animate.css';

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex - 1].className += "active";
  }
  
  $(document).ready(function () {
    
      $('#button-panel-next').on('click', () => {
        plusSlides(1)
      });
    
      $('#button-panel-back').on('click', () => {
        plusSlides(-1)
      });
  
  });

















  
  // $('#button-panel-next').on('click', (i) => {
    
    //     setInterval(() => {
      
      //         $('#slide01').addClass('animated-middle fadeOutLeft');
      
      //     }, 0);
      // });
      
      // $('#button-panel-back').on('click', () => {
        
        //     setInterval(() => {
          
          //         $('#slide01').removeClass('animated-middle fadeOutLeft');
          
          //     }, 0);
          // });
          