window.addEventListener("scroll", function() {
  var menu = document.getElementById("menu");
  var color = menu.querySelectorAll("#nav a");

  if (window.pageYOffset > 0) {
    menu.style.backgroundColor = "white";
    menu.classList.add("fixed");

    for (var i = 0; i < color.length; i++) {
      color[i].style.color = "#000";
    }
  } else {
    menu.style.backgroundColor = "transparent";
    menu.classList.remove("fixed");

    for (var i = 0; i < color.length; i++) {
      color[i].style.color = "#fff"; 
    }
  }
});



$(function(){
  $('#feedback-slide .container-slide').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});