$(document).ready(function(){
  
 
document.documentElement.className = "js";		
		
		
		if ($.browser.msie  && parseInt($.browser.version) <= 8) {
 $(function() {$("#wrapper").css("display", "block");
    			}); 
} else {
 $(function() {$("#wrapper").css("display", "none");
    			});
}
		if ($.browser.msie  && parseInt($.browser.version) <= 8) {
 $(function() {$("#bgpanel").css("display", "block");
    			}); 
} else {
 $(function() {$("#bgpanel").css("display", "none");
    			});
}
    
//local Scroll plugin
		
$.localScroll.defaults.axis = 'x';
// Scroll the content inside the #scroll-container div
$('#nav').localScroll({
      target:'#innerright',
	   hash: false,
	   easing: 'easeInOutCubic',
	   duration: 1000
 });


//BX SLIDER INNER PAGE SCROLLERS////////////////////////  
     	
		$('#aboutscroller').bxSlider({
   	mode: 'vertical',
	easing: 'easeInOutQuint',
	auto: false,
    controls: true,
	prevImage:'images/up.png',
	nextImage:'images/down.png',
	infiniteLoop: false,
	hideControlOnEnd: true,
	pager: true,
	pagerType:'short',
	pagerShortSeparator:'of',
	speed:800,
	
	

  });


		$('#resumescroller').bxSlider({
   	mode: 'vertical',
	easing: 'easeInOutQuint',
	auto: false,
    controls: true,
	prevImage:'images/up.png',
	nextImage:'images/down.png',

	
	
	
	infiniteLoop: false,
    hideControlOnEnd: true,
		pager: true,
	pagerType:'short',
	pagerShortSeparator:'of',
	speed:800,
	

  });


		$('#portfolioscroller').bxSlider({
   	mode: 'vertical',
	easing: 'easeInOutQuint',
	auto: false,
    controls: true,
	prevImage:'images/up.png',
	nextImage:'images/down.png',
	infiniteLoop: false,
    hideControlOnEnd: true,
		pager: true,
	pagerType:'short',
	pagerShortSeparator:'of',
	
	speed:800,
	
	

  });


		$('#contactscroller').bxSlider({
   	mode: 'vertical',
	easing: 'easeInOutQuint',
	auto: false,
    controls: true,
	prevImage:'images/up.png',
	nextImage:'images/down.png',
	infiniteLoop: false,
    hideControlOnEnd: false,
	pager: true,
	pagerType:'short',
	pagerShortSeparator:'of',
	speed:800,
	
	

  });		



//END BX SLIDER INNER PAGE SCROLLERS/////////////////  



//FANCY BOX/////////////////////////////////////////
$("a[rel=example_group]").fancybox({
				'transitionIn'		: 'jswing',
				'transitionOut'		: 'jswing'


});

$(".iframe").fancybox()

//ANIMAITE PORTFOLIO IMAGES ON HOVER/////////////////////////////////////////
$("ul.thumb li").hover(function() {
	$(this).css({'z-index' : '11'}); /*Add a higher z-index value so this image stays on top*/ 
	$(this).find('img').addClass("hover").stop() /* Add class of "hover", then stop animation queue buildup*/
		.animate({
			marginTop: '', /* The next 4 lines will vertically align this image */ 
			marginLeft: '',
			top: '0',
			left: '-5px',
			width: '87px', /* Set new width */
			height: '73px', /* Set new height */
			padding: '3px'
			
			
		}, 200); /* this value of "200" is the speed of how fast/slow this hover animates */

	} , function() {
	$(this).css({'z-index' : '0'}); /* Set z-index back to 0 */
	$(this).find('img').removeClass("hover").stop()  /* Remove the "hover" class , then stop animation queue buildup*/
		.animate({
			marginTop: '0', /* Set alignment back to default */
			marginLeft: '0',
			top: '0',
			left: '0',
			width: '77px', /* Set width back to default */
			height: '63px', /* Set height back to default */
			padding: '3px'
		}, 800);
});

// CONTACT INFORMATION CARD
$('.open').click(
	function(event)
	{
		event.preventDefault();
 	 $('#card').animate({
   	 opacity:1,
    	left: '50%',
		top: '50%'
    
	 }, 500);

	});

	$('.close').click(
	function(event)
	{
 	 event.preventDefault();
 	 $('#card').animate({
   	 opacity:0,
   	 right: '450px',
	top: '-500px'
    
 }, 1000);


});

//veagus

  $.vegas({
    src:'images/bg.jpg',
	fade:1000,
	complete:function() {
		
		$("#wrapper").fadeIn(1000);
  		$("#bgpanel").fadeIn(1000);
		$('#mainslide').crossSlide({
      	speed: 15,
     	 fade: 1
    	}, [
		//ENTER YOUR MAIN SLIDESHOW IMAGES HERE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		{ src: 'images/slides/1.jpg' , dir: 'up' },
      	{ src: 'images/slides/2.jpg' , dir: 'down' },
      	{ src: 'images/slides/3.jpg' , dir: 'up' },
      	{ src: 'images/slides/4.jpg' , dir: 'down' }
    	]) 
  
    	
		$('#homeslides').bxSlider({
    	mode: 'fade',
		auto: true,
    	controls:false,
		speed:1000,
		pause:5000
  		});

//UNCOMMENT BELOW FOR BACKGROUND IMAGE SLIDESHOW  		
$( function() { 
    var slideshowRunning = false,
        backgroundList = [];

    // Build the background list with href of links
    $( '#menu a' ).each( function() { 
        backgroundList.push( { 
            src: $( this ).attr( 'href' ),
			align: 'center',
			valign:'center',
            fade: 600,
			loading:false,

			
			load:function() {
$("#bgloader").fadeOut(500);
}
    
	
	     } );
     } );
        
    // Define a slideshow with overlay and pause it
    $.vegas( backgroundList[0] )
    ( 'overlay', {
        opacity: 0.5
    })
    ( 'pause' );

    // A short demo
    $( '#menu a' ).click( function() { 
   $("#bgloader").fadeIn(500);
        // If the SlideShow link is clicked
        if ( $( this ).is( '#slideshow' ) ) { 
        
            // Start the SlideShow
            if ( slideshowRunning == false ) { 
                slideshowRunning = true;
                
                $( '#pause' )
                    .show()
                    .css( 'opacity', 0.5 )
                    .html( 'PAUSE' );
                    
                $.vegas( 'slideshow', { 
                    delay: 5000,
                    backgrounds: backgroundList,
                })
                
            // Pause the SlideShow
             } else { 
                slideshowRunning = false;
                
                $( '#pause' )
                    .show()
                    .css( 'opacity', 0.5 )
                    .html( 'PLAY' );
                    
                $.vegas( 'pause' );  
             }
            
           // If a standard Thumbnail is clicked
         } else { 
            slideshowRunning = false;
            
            $( '#pause' ).hide();
            $( '#thumbnail' ).attr( 'src', 'images/slideshow.gif' );

            var idx = $( this ).parent( 'li' ).index();
            $.vegas( 'stop' )( backgroundList[idx] );
         }
         
         return false;
     } );
     
    // Apply a border to the right thumbnail when a background is loaded
    $( 'body' ).bind( 'vegasload', function( e, bg ) {        
        var src = $( bg ).attr( 'src' ).replace( 'background', 'thumbnail' );
        

    });
    
    // Display the right thumbnail instead of the slideshow animated gif when the slideshow is running
    $( 'body' ).bind( 'vegaswalk', function( e, bg ) {
        var src = $( bg ).attr( 'src' ).replace( 'background', 'thumbnail' );
        
        $( '#thumbnail' ).attr( 'src', src );
    });
 } );


}

});	

}); 


//contact Form
$(function() {
	$('form').submit(function() {
        $('#main').append('<img src="images/loader.gif" class="loaderIcon" alt="Loading..." />');

        var name = $('input#name').val();
        var email = $('input#email').val();
        var comments = $('textarea#comments').val();

        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email + '&comments=' + comments,

            success: function(results) {
                $('#main img.loaderIcon').fadeOut(1000);
                $('#response').html(results);
            }
        }); // end ajax
		
		return false;
		
    });
});
		
function initOverLabels () {
 if (!document.getElementById) return;

 var labels, id, field;
 labels = document.getElementsByTagName('label');
 for (var i = 0; i < labels.length; i++) {

 if (labels[i].className == 'overlabel') {

 id = labels[i].htmlFor || labels[i].getAttribute('for');
 if (!id || !(field = document.getElementById(id))) {
 continue;
 }

 labels[i].className = 'overlabel-apply';

 if (field.value !== '') {
 hideLabel(field.getAttribute('id'), true);
 }

 field.onfocus = function () {
 hideLabel(this.getAttribute('id'), true);
 };
 field.onblur = function () {
 if (this.value === '') {
 hideLabel(this.getAttribute('id'), false);
 }
 };

 labels[i].onclick = function () {
 var id, field;
 id = this.getAttribute('for');
 if (id && (field = document.getElementById(id))) {
 field.focus();
 }
 };

 }
 }
};

function hideLabel (field_id, hide) {
 var field_for;
 var labels = document.getElementsByTagName('label');
 for (var i = 0; i < labels.length; i++) {
 field_for = labels[i].htmlFor || labels[i].getAttribute('for');
 if (field_for == field_id) {
 labels[i].style.textIndent = (hide) ? '-1000px' : '0px';
 return true;
 }
 }
}

window.onload = function () {
 setTimeout(initOverLabels, 50);

}; 


        


