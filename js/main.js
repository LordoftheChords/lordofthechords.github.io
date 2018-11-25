$(document).ready(function() {

    //Background animate
    
    $(".faqAnswer").css("display","none");
    
    $("body").scroll(function (e) {
        $("body").scrollLeft(0);    
    });
    

    $(".faq-collapsible").click(function(){
      $(this.parentNode).find(".faqAnswer").toggle();
      if($(this.parentNode).find(".faqAnswer").is(":visible")){
        $(this).find(".collapse-icon").text("-");
      }else{
        $(this).find(".collapse-icon").text("+");
      }
    })

    $('.navbar-nav>li>a').on('click', function(){
        $('#navbarNav').removeClass("show");
    });


    timer();


});


function timer(){
  // Set the date we're counting down to
  var countDownDate = new Date("Feb 12, 2019 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var viewport = $( window ).width();
    //full menu
    if (viewport > 768){
      var ks_timer = 'kickstarter-timer';
      var ks_timer_s = 'kickstarter-timer-seconds';
    }
    //collapsible menu
    else {
      var ks_timer = 'kickstarter-timer-collapsible';
      var ks_timer_s = 'kickstarter-timer-seconds-collapsible';
    }
        document.getElementById(ks_timer).textContent = days + "d " + hours + "h "
        + minutes + "m ";
        document.getElementById(ks_timer_s).textContent = " " + seconds + "s "

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(ks_timer).innerHTML = "WE ARE LIVE HERE: ";
        document.getElementById(ks_timer_s).innerHTML = "[link]";
      }
  }, 1000);
}