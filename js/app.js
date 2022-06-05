$(document).ready(function(){
    $('.food-slider').slick({
      dots: false,
      infinite: true,
      autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
 
    });
 
    $('.nav-trigger').click(function(){
       $(".site-content-wrapper").css("overflow","hidden")
       $(".site-content-wrapper").toggleClass("scaled");
    })
 });