$(document).ready(function () {
	// Fire LocalScroll
	$('body').localScroll();

	// Size Content to Window
	$('.object, .swipe-wrap img, .info-block').css({height:$(window).height()-100});
	//$('.swipe-wrap img').css({height:$(window).height()-100});
	//$('.object').css({'padding-top':$(window).height()-$('.swipe-wrap img').height()-50});
	//$('.object').css({'padding-bottom':$(window).height()-$('.swipe-wrap img').height()-50});
	//$('.info-block').css({height:$(window).height()-100});
	
	
	// Fire Swipe Action with jQuery
	window.Williams = $('#Williams').Swipe().data('Swipe');
	window.DaCorte = $('#DaCorte').Swipe().data('Swipe');
	window.Carlson = $('#Carlson').Swipe().data('Swipe');
	window.Evey = $('#Evey').Swipe().data('Swipe');
	window.Rolu = $('#Rolu').Swipe().data('Swipe');
	window.Timmins = $('#Timmins').Swipe().data('Swipe');
	window.Credits = $('#Credits').Swipe().data('Swipe');

// Swap Text Descriptions on Scroll to New Div	
    $(window).on("scroll resize", function () {
        var pos = $('#desc').offset();
        $('.object').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                $('#desc').html($(this).find('.description').html()); //or any other way you want to get the desc
                return; //break the loop
            }
        });
    });
    $(window).trigger('scroll'); // init the value
	
	// Background Color Variables	 
	 var colors = [
	   [255, 255, 255], 	// White
	   [67, 66, 255],   	// Blue
	   [0, 255, 175],   	// Seafoam
	   [254, 36, 0],    	// Red
	   [174, 165, 255], 	// Purple
	   [252, 219, 0],   	// Yellow
	   [255, 255, 255]  	// White
	 ];
	 var height = $('body').height(); //- window.innerHeight;

	 // Shift Background Color on Scroll	
	 $(document).scroll(function() {
	    var body = $("body");
	    var steps = Math.floor(height / colors.length);
	    var position = $(this).scrollTop();
	    var currentStep = Math.floor(position / steps);
	    if ( currentStep === colors.length ) currentStep = colors.length - 1;
	    var rgb = $("body").css('background-color').replace('rgb(','').replace(')','').replace(/\s/g, '').split(',');     
	    var previousColor = colors[currentStep] || colors[0];
	    var nextColor = colors[currentStep+1] || colors[colors.length-1];
	    var percentFromThisStep = ( position - ( currentStep * steps ) ) / steps;
	    if ( percentFromThisStep > 1 ) percentFromThisStep = 1;

	    var newRgb = [
	      Math.floor(previousColor[0] + ( ( nextColor[0] - previousColor[0] ) * percentFromThisStep )),
	      Math.floor(previousColor[1] + ( ( nextColor[1] - previousColor[1] ) * percentFromThisStep )),
	      Math.floor(previousColor[2] + ( ( nextColor[2] - previousColor[2] ) * percentFromThisStep ))
	    ];

	    $("body").css('background-color', 'rgb('+ newRgb.join(',') +')');
	 });
});

$("#first-object").load(function () {
	$('.info-block').css({width:$('#first-object').width()});
});

$(window).resize(function() {
	// Resize Objects to Window Adjustments
	$('.object').css({height:$(window).height()-100});
	$('.swipe-wrap img').css({height:$(window).height()-100});
	$('.info-block').css({height:$(window).height()-100});
	$('.info-block').css({width:$('.swipe-wrap img').width()});
	$('.object').css({'padding-top':$(window).height()-$('.swipe-wrap img').height()-50});
	$('.object').css({'padding-bottom':$(window).height()-$('.swipe-wrap img').height()-50});
 	
	// Reset Background Color Shifting	 
   	 var colors = [
   	   [255, 255, 255], 	// White
   	   [67, 66, 255],   	// Blue
   	   [0, 255, 175],   	// Seafoam
   	   [254, 36, 0],    	// Red
   	   [174, 165, 255], 	// Purple
   	   [252, 219, 0],   	// Yellow
	   [255, 255, 255]  	// White
   	 ];
   	 var height = $('body').height(); //- window.innerHeight;
   	 $(document).scroll(function() {
   	    var body = $("body");
   	    var steps = Math.floor(height / colors.length);
   	    var position = $(this).scrollTop();
   	    var currentStep = Math.floor(position / steps);
   	    if ( currentStep === colors.length ) currentStep = colors.length - 1;
   	    var rgb = $("body").css('background-color').replace('rgb(','').replace(')','').replace(/\s/g, '').split(',');     
   	    var previousColor = colors[currentStep] || colors[0];
   	    var nextColor = colors[currentStep+1] || colors[colors.length-1];
   	    var percentFromThisStep = ( position - ( currentStep * steps ) ) / steps;
   	    if ( percentFromThisStep > 1 ) percentFromThisStep = 1;

   	    var newRgb = [
   	      Math.floor(previousColor[0] + ( ( nextColor[0] - previousColor[0] ) * percentFromThisStep )),
   	      Math.floor(previousColor[1] + ( ( nextColor[1] - previousColor[1] ) * percentFromThisStep )),
   	      Math.floor(previousColor[2] + ( ( nextColor[2] - previousColor[2] ) * percentFromThisStep ))
   	    ];

   	    $("body").css('background-color', 'rgb('+ newRgb.join(',') +')');
   	 });
 	});	