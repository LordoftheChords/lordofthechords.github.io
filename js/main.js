$(document).ready(function () {
  $(".navbar-nav>li>a").on("click", function () {
    $("#navbarNav").removeClass("show");
  });
  timer();
  // leadGen tracking
});

$("form#mc-embedded-subscribe-form").submit(function (e) {
  //Your event goes here ex. dataLayer.push({'event':'eventname'});
  fbq("track", "Sign Up 2");
  ga("send", "event", {
    eventCategory: "Lead",
    eventAction: "Submit",
    eventLabel: "Top Signup Form",
  });
  return true;
});

function timer() {
  // Set the date we're counting down to
  var countDownDate = new Date(
    Date.UTC(2020, 08, 22, 21, 00, 00, 00)
  ).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var ks_timer = "kickstarter-timer";
    // document.getElementById(ks_timer).textContent = days + " DAYS " + hours + " HOURS " + minutes + " MINS";
    document.getElementById(ks_timer).textContent = days + " DAYS ";
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(ks_timer).innerHTML = "WE ARE LIVE HERE: ";
      document.getElementById(ks_timer_s).innerHTML = "[link]";
    }
  }, 1000);
}
