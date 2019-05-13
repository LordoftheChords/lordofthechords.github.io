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
  var countDownDate = new Date(Date.UTC(2020, 01, 12, 13, 00, 00, 00)).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    var ks_timer = 'kickstarter-timer';    
    document.getElementById(ks_timer).textContent = days + " DAYS " + hours + " HOURS " + minutes + " MINS";
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(ks_timer).innerHTML = "WE ARE LIVE HERE: ";
        document.getElementById(ks_timer_s).innerHTML = "[link]";
      }
  }, 1000);
}

