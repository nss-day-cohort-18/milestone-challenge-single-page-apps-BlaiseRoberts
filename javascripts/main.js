"use strict";

var cardDisplay = document.getElementById("card-display");


function populatePage (inventory) {
  // Loop over the inventory and populate the page
	for(var k in inventory) {
		var carCard = ``;
		var carObject = inventory[k];
		carCard += `<article class="col-sm-4"><div class="thumbnail"><h4>${carObject.make} - ${carObject.model}</h4><p>${carObject.description}</p><footer>${carObject.year}     for $${carObject.price}</footer></div></article>`;
		cardDisplay.innerHTML += carCard;
	}

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);