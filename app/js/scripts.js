/* 
// Here we are listening to all CLICK EVENTs and will learn how to respond only to the ones we want
document.addEventListener("click", show);


//This is great as it shows you the code of what you clicked on in the console!!
function show(e) {
  console.log(e.target);
  // 'event.target' is the clicked element
  e.preventDefault();  //This disables all our links - even those on our navbar.
}

*/

/*
//Look it's an if statement block
function testMe(num) {
  if (num > 8) {
    console.log("num is > 8:", num);
  } else {
    console.log("num is , 8:", num);
  }
}
//run the following in the console windows to test the fucntion: testMe(5);
*/


/*
//Here we only respond to clicks that MATCH a criteria
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  console.log(e.target);
  if (e.target.matches(".map")) {
    body.classList.toggle("showme");
    e.preventDefault();
  }
}
 */


/*
//We target two classes to take action on 
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map")) {
    body.classList.add("showme");
    e.preventDefault();
  }
  if (e.target.matches(".closer")) {
    body.classList.remove("showme");
    e.preventDefault();
  }
}
*/

/*
//Let us see an 'or' operator, '||' in JavaScript
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    body.classList.toggle("showme");
    e.preventDefault();
  }
}
*/

//Now we let the user click anywhere outside the popover to close it.
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    body.classList.toggle("showme");
    e.preventDefault();
  } else {
    body.classList.remove("showme");
  }
}