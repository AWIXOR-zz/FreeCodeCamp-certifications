/*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {

    },
  };

  // bind filter button click
  $('#filter-btn').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


/**wow**/
new WOW().init();
/*******************************************SCROLL MAGIC*******************************************/

/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#welcome-section", duration: $("#welcome-section").height()}).setClassToggle("#home-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about", duration: $("#about").height() + 100}).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#Ressources", duration: $("#Ressources").height()}).setClassToggle("#ressources-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#projects", duration: $("#projects").height()}).setClassToggle("#services-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact", duration: $("#contact").height()}).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/

$(document).ready(function(){

  var controller2 = new ScrollMagic.Controller();

  //Progress bars
  var progress_bar_scene = new ScrollMagic.Scene({

    triggerElement: '.about-resume',
    triggerHook: .7,

  })
  .setClassToggle('.inner-percent', 'inner-percent-animate')
  .reverse(false)
  .addTo(controller);
    
  //Icons in Services
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: .7
  })
  .setClassToggle('.icon', 'ressource-icon-animate')
  .reverse(false)
  .addTo(controller2);
    
});

/*******************************************MOBILE NAV*******************************************/
$('.mobile-menu').click(function(){
  if($('#main-header').hasClass('open-nav')){
     $('#main-header').removeClass('open-nav');
  }else{
    $('#main-header').addClass('open-nav');
  }
});

/*******************************************NAV SCROLL*******************************************/
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/*******************************************PRELOAD*******************************************/
var overlay = document.getElementById("preload-overlay");

window.addEventListener('load', function(){
  overlay.style.display = "none";
})

/***********************Particles*************/
jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },4000);
  });
});
/*********************************** Back-to-Top functionality ****************************************/

//hide it so it won't show on load
$('a.back-to-top').hide()
//scroll
$(document).ready($(window).scroll(function(){
  if($(window).scrollTop()<500){
    $('a.back-to-top').fadeOut('slow');
  }
  else{
    $('a.back-to-top').fadeIn('slow');
  }
}))
//click
$(document).ready($('a.back-to-top, #welcome-section').click(function(){
  $('html, body').animate({
    scrollTop:0
  },'slow');
  return false;
}))
//mouse hovering effects
$(document).ready($('a.back-to-top').mouseleave(function(){
  $('a.back-to-top').animate({opacity:'0.5'},'fast');}))
$(document).ready($('a.back-to-top').mouseenter(function(){
  $('a.back-to-top').animate({opacity:'0.9'},'fast');}))


/*********************************** Go Down ****************************************/