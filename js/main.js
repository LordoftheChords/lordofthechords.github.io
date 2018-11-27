// initialize an instance of lazyload
var myLazyLoad = new LazyLoad({
  elements_selector: ".lazy"
});

$(document).ready(function() {    
    // $(".faqAnswer").css("display","none");
    
    $("body").scroll(function (e) {
        $("body").scrollLeft(0);    
    });
    

    // $(".faq-collapsible").click(function(){
    //   $(this.parentNode).find(".faqAnswer").toggle();
    //   if($(this.parentNode).find(".faqAnswer").is(":visible")){
    //     $(this).find(".collapse-icon").text("-");
    //   }else{
    //     $(this).find(".collapse-icon").text("+");
    //   }
    // })

    $('.navbar-nav>li>a').on('click', function(){
        $('#navbarNav').removeClass("show");
    });

    timer();

    // leadgen tracking
    $('#mc-embedded-subscribe-form').submit(function(e){
        $.ajax({
          type: "POST",
           url: "https://lordofthechords.us19.list-manage.com/subscribe/post?u=6b7e4a798687d13a13ac848d5&amp;id=a7ac4d90f8",
           data: $(this).serialize(),
           success: function() {
              // if form is submitted successfully, send notification to fbPixel and GoogleAnalytics
              fbq('track', 'Lead');
              gtag_report_conversion();
            }
         })
    });
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




// Event snippet for Lead Generation conversion page
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-777186400/xDfyCP7iqZABEODYy_IC',
      'event_callback': callback
  });
  return false;
}

