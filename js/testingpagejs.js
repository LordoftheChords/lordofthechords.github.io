

$(document).ready(function() {    
    $('.navbar-nav>li>a').on('click', function(){
        $('#navbarNav').removeClass("show");
    });
    timer();
    // leadGen tracking
    // initialize ga instance
    ga('create', 'UA-129405868-1', 'auto');

    // var form = $('#mc-embedded-subscribe-form');
    var form = $('#embedForm');
    var milestoneWidget = $('#milestoneWidget');
    //when the campaign boots
    campaign.addHook("boot", function() {
      //if we have a logged in user
      if (campaign.user && campaign.user.referralCode) {
          // location.href = "https://mypage.com/referral-dashboard" + "?userCode=" + campaign.user.referralCode + "&autoDetect=1";
          //show the widgets
          milestoneWidget.show();
      }
    });

    // work in progress
    form.submit(function(e){
      // 
      // if user submits the same email it will still count
      if (!$('.mce_inline_error').is(':visible')){   
          //get the form data
          var data = form.serializeArray();
          
          campaign.identify({
              // firstname: data[0].value,
              email: data[0].value
          }, function() {
              //optional callback
              //you can hide the form here and show the widgets
              form.hide();
              milestoneWidget.show();
          });
        
        // fbpixel
        fbq('track', 'Lead');
        // google Adwords
        gtag_report_conversion();
        //google analytics
        ga('send', {
          hitType: 'event',
          eventCategory: 'LeadGen',
          eventAction: 'sign up',
          eventLabel: 'Pre-KS-Campaign'
        });
      }
      
    })
    
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
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var ks_timer = 'kickstarter-timer';    
    document.getElementById(ks_timer).textContent = days;
    // document.getElementById(ks_timer).textContent = days + "d " + hours + "h "
    // + minutes + "m ";
    // document.getElementById(ks_timer_s).textContent = " " + seconds + "s "

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(ks_timer).innerHTML = "WE ARE LIVE HERE: ";
        document.getElementById(ks_timer_s).innerHTML = "[link]";
      }
  }, 1000);
}




// Conversion for Google Adwords
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

