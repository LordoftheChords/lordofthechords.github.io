$(document).ready(function() { 
    $('.navbar-nav>li>a').on('click', function(){
        $('#navbarNav').removeClass("show");
    });
    timer();
    // leadGen tracking
    // initialize ga instance
    ga('create', 'UA-129405868-1', 'auto');
    })

function timer(){
  // Set the date we're counting down to
  var countDownDate = new Date("Feb 12, 2019 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    var ks_timer = 'kickstarter-timer';    
    document.getElementById(ks_timer).textContent = days;
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(ks_timer).innerHTML = "WE ARE LIVE HERE: ";
        document.getElementById(ks_timer_s).innerHTML = "[link]";
      }
  }, 1000);
}

