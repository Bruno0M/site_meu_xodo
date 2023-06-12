// window.addEventListener("scroll", function() {
//   var menu = document.getElementById("menu");
//   var color = menu.querySelectorAll("#nav a");

//   if (window.pageYOffset > 0) {
//     menu.style.backgroundColor = "white";
//     menu.classList.add("fixed");

//     for (var i = 0; i < color.length; i++) {
//       color[i].style.color = "#000";
//     }
//   } else {
//     menu.style.backgroundColor = "transparent";
//     menu.classList.remove("fixed");

//     for (var i = 0; i < color.length; i++) {
//       color[i].style.color = "#fff"; 
//     }
//   }
// });

// $('#fotos .container').magnificPopup({
//   delegate: 'a',
//   type: 'image',
//   closeOnContentClick: false,
//   closeBtnInside: false,
//   mainClass: 'mfp-with-zoom mfp-img-mobile',
//   image: {
//     verticalFit: true,
//   },
//   gallery: {
//     enabled: true
//   },
//   zoom: {
//     enabled: true,
//     duration: 300,
//     opener: function(element) {
//       return element.find('img');
//     }
//   }
  
// });



// $(function(){
//   $('#feedback-slide .container-slide').bxSlider({
//     mode: 'fade',
//     captions: true,
//     slideWidth: 600
//   });
// });

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

$(function() {
  $('#galeria .container').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
});

$(function() {
  $('#feedback-slide .container-slide').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});
