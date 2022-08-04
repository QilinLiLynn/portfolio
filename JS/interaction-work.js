
// When the user scrolls down from the top of the document, resize the header's font size

//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {if (document.body.scrollTop > 0|| document.documentElement.scrollTop >0) {document.getElementById("header-work").style.display = "block";} else {document.getElementById("header-work").style.display = "none";}}


////navigation bar active

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 132;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".sticky-sidebar a[href*=" + sectionId + "]").parentElement.classList.add("active");
    } else {
      document.querySelector(".sticky-sidebar a[href*=" + sectionId + "]").parentElement.classList.remove("active");
    }
  });
}


$(document).ready(function () {



//lightbox
lightbox.option({
    'resizeDuration': 400,
    'fadeDuration':0,
    'imageFadeDuration':0,
    'disableScrolling':true
    
  })


});



