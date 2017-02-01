"use strict";


var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
	  inventoryLoader.send();
      inventoryLoader.addEventListener("error", ()=>{
      	alert("Error Loading!!! help...")
      });
      inventoryLoader.addEventListener("load", ()=>{
		var carData = JSON.parse(event.target.responseText);
		var productObject = carData.cars;
		callback(productObject);
      })
  	}
    
  };

})();