 // JavaScript goes here
console.log("hello!");

var button = document.querySelector(".new-sticky");
var board = document.querySelector("#board");

// ==============================================
// When a user clicks on the "Add A Note" button
// - a new editable note appended to the page
// - the total note counter needs to be updated
// ==============================================

var handleAddSticky = function(event) {
  var sticky = document.createElement("div");
  var span = document.createElement("span");
  var text = document.createElement("p");

  if (event.target.classList.contains("new-sticky")) {
    // console.log("clicked!", event.target);
    board.appendChild(sticky);
    sticky.setAttribute("class", "sticky");

    sticky.appendChild(span);
    span.setAttribute("class", "remove");
    span.textContent = "x";

    sticky.appendChild(text);
    text.setAttribute("class", "sticky-text");
    text.setAttribute("contenteditable", "true");

    button.addEventListener("click", addToTotal);
  }

};

button.addEventListener("click", handleAddSticky);

var addToTotal = function(event) {
    var spanTotal = document.querySelector("#total");
    var totalStickies = document.querySelectorAll("#board .sticky").length;
    console.log(totalStickies);
    spanTotal.textContent = totalStickies;

};


// ==============================================
// ### Feature Requests
// - User needs to delete some notes, when they become outdated. Add a "X" on the notes so they can be disposed when the "X" is clicked
// ==============================================

var removeSticky = function() {
  // console.log(event, event.target);
  var ex = event.target;
  if (ex.classList.contains("sticky")) {
    ex.classList.toggle("delete");
  }
  if (ex.classList.contains("remove")) {
    ex.parentNode.remove();
  }
}

board.addEventListener("click", removeSticky);


