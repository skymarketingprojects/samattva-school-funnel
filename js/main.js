
    // $(document).ready(function(){
    //     $("#customers-testimonials").owlCarousel({
    //         items: 1,
    //         loop: true,
    //         margin: 10,
    //         autoplay: true,
    //         autoplayTimeout: 3000,
    //         autoplayHoverPause: true,
    //         dots: true,
    //         nav: true,
    //         navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
    //         responsive:{
    //           0:{
    //             items:1
    //           },
    //           600:{
    //             items:3
    //           },
    //           1000:{
    //             items:3
    //           }
    //         }

    //     });
    // });

    jQuery(document).ready(function($) {
      "use strict";
      //  TESTIMONIALS CAROUSEL HOOK
      $('#customers-testimonials').owlCarousel({
          loop: true,
          center: true,
          items: 3,
          margin: 0,
          autoplayHoverPause: true,
          dots:true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1170: {
              items: 3
            }
          }
      });
      
    });
    
   
    


    
    
    $(document).ready(function() {
      $('.read-more-btn').each(function() {
          var $btn = $(this); // The "Read More" button
          var $text = $btn.prev('.testimonial-text'); // The text container
          var fullText = $text.text(); // Full text content
          var shortText = fullText.substr(0, 150) + '...'; // Shortened text
          
          // Initially set the text to the shortened version
          $text.data('full-text', fullText).text(shortText);
    
          $btn.on('click', function() {
              // Check if the button is in "Read More" or "Read Less" state
              if ($btn.data('isExpanded')) {
                  // Collapse the text
                  $text.text(shortText);
                  $btn.text('Read More').data('isExpanded', false);
              } else {
                  // Expand the text
                  $text.text($text.data('full-text'));
                  $btn.text('Read Less').data('isExpanded', true);
              }
          });
      });
    });
    $(document).ready(function(){
      $('.achievers-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:3
          }
        }
      });
    });