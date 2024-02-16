/* Here we learn how to toggle the popOver and blur the background.
    This causes a problem though... How do you close the pop up? */


// Anonamous Function
// () => do something

/*
Resources:
  classList property (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
*/

// Creating the PopOver the Map, we don't want the map to open on a New Page.
//Create variable using 'let' or 'var'
//Variables
var mapClicker = document.querySelector(".map");  //reference to class="map"
var popOver = document.querySelector(".popover"); //reference to class="popover"
/*If we want to manipulate the display of other items based on the presence of the popover 
we need to add the showme class higher up in the DOM.*/
var body = document.querySelector("body");  


console.log(mapClicker);


//Functions
function show (event) {       //'e' is used as shorthand for 'event' at times
  console.log(event);         // The event details
  console.log(event.target);  // The clicked element
  
  /*Without preventDefault() a click would launch the link in a new tab. Since we want to show 
  a map on our page we need to prevent navigating away from the page.*/
  // event.preventDefault();
  // console.log("You clicked on the map link.");

  //popOver.classList.toggle("showme"); // Use classList Property to the 'showme' class
  body.classList.toggle("showme")
  event.preventDefault();
}

//Events
mapClicker.addEventListener("click", show);
