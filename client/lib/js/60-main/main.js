jQuery(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */   
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */
    
    jQuery('[data-hover="dropdown"]').dropdownHover();
    
    /* ======= Fixed header when scrolled ======= */    
    jQuery(window).on('scroll load', function() {
         
         if (jQuery(window).scrollTop() > 0) {
             jQuery('#header').addClass('scrolled');
         }
         else {
             jQuery('#header').removeClass('scrolled');
         }
    });
    
    
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    jQuery('input, textarea').placeholder();    
    
    /* ======= jQuery FitVids - Responsive Video ======= */
    /* Ref: https://github.com/davatron5000/FitVids.js/blob/master/README.md */
    
    jQuery(".video-container").fitVids();
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    jQuery(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    jQuery('.panel').on('hidden.bs.collapse', toggleIcon);
    jQuery('.panel').on('shown.bs.collapse', toggleIcon);    
    
    
    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    
// MP TODO Need to use meteor rendered here, e.g. see http://stackoverflow.com/questions/13676240/using-jquery-to-target-elements-rendered-in-meteor
// and https://atmospherejs.com/johannesma/meteor-flexslider
//    jQuery('.bg-slider').flexslider({
//        animation: "fade",
//        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
//        controlNav: false, //remove the default control-nav
//        slideshowSpeed: 8000
//    });
	
	/* ======= Stop Video Playing When Close the Modal Window ====== */
    jQuery("#modal-video .close").on("click", function() {
        jQuery("#modal-video iframe").attr("src", jQuery("#modal-video iframe").attr("src"));        
    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
     /* Ref: http://getbootstrap.com/javascript/#carousel */
    jQuery('#testimonials-carousel').carousel({
      interval: 8000 
    });
    
    
    /* ======= Style Switcher ======= */    
    jQuery('#config-trigger').on('click', function(e) {
        var jQuerypanel = jQuery('#config-panel');
        var panelVisible = jQuery('#config-panel').is(':visible');
        if (panelVisible) {
            jQuerypanel.hide();          
        } else {
            jQuerypanel.show();
        }
        e.preventDefault();
    });
    
    jQuery('#config-close').on('click', function(e) {
        e.preventDefault();
        jQuery('#config-panel').hide();
    });
    
    
    jQuery('#color-options a').on('click', function(e) { 
        var jQuerystyleSheet = jQuery(this).attr('data-style');
		jQuery('#theme-style').attr('href', jQuerystyleSheet);	
				
		var jQuerylistItem = jQuery(this).closest('li');
		jQuerylistItem.addClass('active');
		jQuerylistItem.siblings().removeClass('active');
		
		e.preventDefault();
		
	});


});