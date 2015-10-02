/* Fade in Welcome Text on load */

$('.welcome-text').hide().fadeIn(1000);

/* Fade in Welcome Text on load */

$('.project').hide().fadeIn(1000);



/* Animate social icons in the bottom section on scroll */
$(function() {
    $(window).scroll( function(){
        $('.social').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "50" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 0;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $('#instagram').addClass('animate');
                $('#mail').addClass('animate');
                    
            }
        }); 
    
    });
});