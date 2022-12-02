/* Functions for carousel functionality */
var slideIndex = 1;
showSlides(slideIndex);

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
/* -------------------------------------*/

/* Functions for disabling and enabling agent select dropdown*/
function disableAgents(){
    agentsDropdown.disabled = true;
}

function enableAgents(){
    agentsDropdown.disabled = false;
}
/* ----------------------------------------------------------*/

/* Functions for dynamically adding options for boxes to be sent */

var agentsDropdown = document.getElementById("agent");
var options = ["Small", "Regular", "Jumbo", "Irregular"];

function multiplyBoxes(){
  //Get Number of Boxes Requested
  var numBoxes = parseInt(document.getElementsByName("newBoxes")[0].value);

  //Create Div for options per Box
  var boxList = document.getElementsByClassName("boxList") ? document.getElementsByClassName("boxList").length : 0;

  //IF number of options is greater than boxes requested (ie. they reduced their previous option)
    //THEN remove last options
  if(boxList > numBoxes){
    removeBoxes((boxList-numBoxes));
  }
  else if(boxList == numBoxes){}
    //ELSE add more options 
  else{
    createBoxes(boxList, numBoxes);
  } 
}

function removeBoxes(n){
  //Reference Parent Div
  var boxDiv = document.getElementById("boxes");

  //Remove last option set until number is reached
  for(let i = 0; i < n; i++){
    boxDiv.removeChild(boxDiv.lastChild);
  }
}

function createBoxes(boxList, numBoxes){
  //Reference Container Div
  var boxDiv = document.getElementById("boxes");

  for(let i = boxList; i < numBoxes; i++)
    if(boxList < numBoxes){
      //Create the containing Div for options
      var nDiv = document.createElement("div");
      nDiv.classList.add("boxList");
      nDiv.id = "boxOptions" + (boxList + 1);

      //Create Select Element
      var select = document.createElement("select");
      select.id = "boxsize" + (boxList + 1);

      //Add options for Select
      for(j=0; j < options.length; j++){
        var option = document.createElement("option");
        option.innerHTML = options[j];
        option.value = options[j];
        select.options.add(option);
      }

      //Append Select to Div
      nDiv.appendChild(select);

      //Append Div to Parent Container
      boxDiv.appendChild(nDiv);
    }
}

/* ---------------------------------------------------------------------------------------*/