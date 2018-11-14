$(document).ready(function() {

    //Background animate
    
    $(".faqAnswer").css("display","none");
    
    $("body").scroll(function (e) {
        $("body").scrollLeft(0);    
    });
    

    // $(".scroll-menu").hide();

    var topofDiv = $(".header-section").offset().top; //gets offset of header
    var height = $(".header-section").outerHeight(); //gets height of header

    $(window).scroll(function(){
        if($(window).scrollTop() > (topofDiv + height) - 60){
           $(".scroll-menu").show();
        }
        // else{
        //    $(".scroll-menu").hide();
        // }
    });

    

    $(".faq-collapsible").click(function(){
      $(this.parentNode).find(".faqAnswer").toggle();
      if($(this.parentNode).find(".faqAnswer").is(":visible")){
        $(this).find(".collapse-icon").text("-");
      }else{
        $(this).find(".collapse-icon").text("+");
      }
    })
});

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tab-active";
}



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('#main-menu-icon').on('click', function() {
  $('#main-menu').toggleClass("show");
});

$('#scroll-menu-icon').on('click', function() {
  $('#scroll-menu').toggleClass("show");
});

$('.menu-link').on('click', function() {
    $('#main-menu').removeClass("show");
    $('#scroll-menu').removeClass("show");
});