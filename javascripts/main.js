"use strict";

//Global Variables
var cardDisplay = document.getElementById("card-display");
var articles = document.getElementsByClassName("thumbnail");
var input = document.getElementById("car-input");

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  for(var k in inventory) {
		var carCard = ``;
		var carObject = inventory[k];
		carCard += `<article class="col-sm-4"><div class="thumbnail"><h4 class="text-primary">${carObject.make} - ${carObject.model}</h4><p class="text-justify">${carObject.description}</p><footer class="text-right text-danger">${carObject.year} for $${carObject.price}</footer></div></article>`;
		cardDisplay.innerHTML += carCard;
  }

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();


}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);



//enter key does the same as the click event
input.onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        //removes classes to save edits to card
        for (var i = 0; i < articles.length; i++) {
		articles[i].classList.remove("green");
	}
        input.value = "";
    }
};