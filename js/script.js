addEventListener("scroll", function() {
  var menu = document.getElementById("menu")
  if (window.pageYOffset > 0) {
    menu.classList.remove("hide")
  } else {
    menu.classList.add("hide")
  }
})