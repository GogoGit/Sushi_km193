// Anonamous Function
// () => do something

// we don't want the map to open in a new window.  We want it to open on our page :)

//Variable Declaration
let mapClicker = document.querySelector(".map"); //reference to class="map"
let popOver = docuement.querySelector(".popover");  //reference to class="popover"

let body = document.querySelector("body");

//Functions
function handleClicks(event) {
  event.preventDefault();
  console.log(event.target);
  
  //popOver.classList.toggle("showme");
 

  if (event.target.matches(".map")){
    body.classList.toggle("showme");
  }

  
}

// create a specific event to listen to 
//mapClicker.addEventListener("click", show);

document.addEventListener("click", handleclicks);




