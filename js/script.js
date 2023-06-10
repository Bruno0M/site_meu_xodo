addEventListener("scroll", function () {
  var menu = document.getElementById("menu")
  if (window.pageYOffset > 0) {
    menu.classList.remove("hide")
  } else {
    menu.classList.add("hide")
  }
})

// $(document).ready(function(){
//   $("#banners ul").bxSlider({
//     mode: 'fade',
//     captions: true,
//     slideWidth: 600
//   });
// });

$(function(){
  $('#feedback-slide .container-slide').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});