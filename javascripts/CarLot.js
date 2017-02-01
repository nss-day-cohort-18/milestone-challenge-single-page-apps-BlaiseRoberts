var CarLot = (function () {
  var inventory = [];
  var cardDisplay = document.getElementById("card-display");

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
	  inventoryLoader.send();
      inventoryLoader.addEventListener("error", function(){
      	alert("Error Loading!!! help...")
      });
      inventoryLoader.addEventListener("load", function () {
		var carData = JSON.parse(event.target.responseText);
		var productObject = carData.cars;
		
		CarLot.showCarData(productObject);
      })
  	},
    showCarData: function(x){
    	for(var k in x) {
    		var carCard = ``;
			var carObject = x[k];
			carCard += `<article class="col-sm-4"><div class="thumbnail"><h4>${carObject.make} - ${carObject.model}</h4><p>${carObject.description}</p><footer>${carObject.year}     for $${carObject.price}</footer></div></article>`;
			cardDisplay.innerHTML += carCard;

    	}
    }
  };

})();