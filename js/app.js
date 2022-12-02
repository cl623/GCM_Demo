var slideIndex = 1;
showSlides(slideIndex);

var agentsDropdown = document.getElementById("agent");

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-content");
  var dots = document.getElementsByClassName("dot");
  var names = document.getElementsByClassName("title2");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    for(i=0; i < names.length; i++){
        names[i].className = names[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  names[slideIndex-1].className += " active";
}

function disableAgents(){
    agentsDropdown.disabled = true;
}

function enableAgents(){
    agentsDropdown.disabled = false;
}

function multiplyBoxes(){
    var boxes = document.getElementsByName("newBoxes").values;
    var 
    var options = ["Small", "Regular", "Jumbo", "Irregular"]
    for(i=0; i < boxes; i++){
        var select = document.createElement("input");
        select.id = "boxsize" + i;

        
        
    }
}