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
      nDiv.id = "boxOptions" + (i+1);

      //Create Select Element
      var select = document.createElement("select");
      select.id = "boxsize" + (i+1);

      //Add options for Select
      for(j=0; j < options.length; j++){
        var option = document.createElement("option");
        option.textContent = options[j];
        option.value = options[j];
        select.options.add(option);
      }

          //Length input
          let sizingLength = document.createElement("input");
          sizingLength.type = "num";
          sizingLength.name = "boxsize" + (i+1) + "_Length";
          sizingLength.classList.add("sizeInput");
          sizingLength.min = "0";
          sizingLength.value = "2.0"
          sizingLength.disabled = true;
          sizingLength.required = true;

          //Width input
          let sizingWidth = document.createElement("input");
          sizingWidth.type = "num";
          sizingWidth.name = "boxsize" + (i+1) + "_Width";
          sizingWidth.classList.add("sizeInput");
          sizingWidth.min = "0";
          sizingWidth.value = "4.0";
          sizingWidth.disabled = true;
          sizingWidth.required = true;

          //Height input
          let sizingHeight = document.createElement("input");
          sizingHeight.type = "num";
          sizingHeight.name = "boxsize" + (i+1) + "_Height";
          sizingHeight.classList.add("sizeInput");
          sizingHeight.min = "0";
          sizingHeight.value = "6.0";
          sizingHeight.disabled = true;
          sizingHeight.required = true;

          //Length Label
          let lengthLabel = document.createElement("label");
          lengthLabel.textContent = "Length (ft): ";

          //Width Label
          let widthLabel = document.createElement("label");
          widthLabel.textContent = "Width (ft): ";

          //Height Label
          let heightLabel = document.createElement("label");
          heightLabel.textContent = "Height (ft): ";
          
          let irregular = document.createElement("div");


          //Append Label and Input to container
          irregular.appendChild(lengthLabel);
          irregular.appendChild(sizingLength);
          irregular.appendChild(widthLabel);
          irregular.appendChild(sizingWidth);
          irregular.appendChild(heightLabel);
          irregular.appendChild(sizingHeight);



      var num = document.createElement("p");
      num.textContent = "Box " + (i+1);

      //Append Select to Div
      nDiv.appendChild(num);  
      nDiv.appendChild(select);
      nDiv.appendChild(irregular);

      //Append Div to Parent Container
      boxDiv.appendChild(nDiv);

      //Event listener to do add Dimension input when Irregular option is chosen
      document.getElementById('boxsize' + (i+1)).addEventListener('change', function (e) {
        if (e.target.value === "Irregular") {
          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].disabled = false;
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].disabled = false;
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].disabled = false;

          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].value = '';
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].value = '';
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].value = '';
        }
        else if(e.target.value === "Small"){
          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].disabled = true;
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].disabled = true;
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].disabled = true;

          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].value = '2.0';
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].value = '4.0';
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].value = '6.0';

        }
        else if(e.target.value === "Regular"){
          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].disabled = true;
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].disabled = true;
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].disabled = true;

          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].value = '3.0';
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].value = '4.0';
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].value = '6.0';

        }
        else if(e.target.value === "Jumbo"){
          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].disabled = true;
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].disabled = true;
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].disabled = true;

          document.getElementsByName("boxsize"+ (i+1) + "_Length")[0].value = '4.0';
          document.getElementsByName("boxsize"+ (i+1) + "_Width")[0].value = '6.0';
          document.getElementsByName("boxsize"+ (i+1) + "_Height")[0].value = '8.0';

        }
      });
    }
}

/* ---------------------------------------------------------------------------------------*/