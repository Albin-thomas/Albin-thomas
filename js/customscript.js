$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow:3,
  dots:false,
  centerMode: true,
  autoplay:true,
  responsive: [
                            {
                              breakpoint: 767,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 574,
                              settings: {
                                slidesToShow: 1
                              }
                            }
                            
                              ]
                            });
});
