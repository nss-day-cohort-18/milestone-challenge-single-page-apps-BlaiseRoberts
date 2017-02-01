"use strict";

var CarLot = (function(originalCarLot){


	originalCarLot.handleClasses = function(event){
			removeClasses();
			addClassSelected();
			inputSelect();
			textMirror(event.currentTarget);
	};
	function removeClasses(){
		//Loop and remove classes
		for (var i = 0; i < articles.length; i++) {
			articles.item(i).classList.remove("selected");
		}
	}
	function addClassSelected(){
		//added class to event.target
		event.currentTarget.classList.add("selected");
	}
	function inputSelect(){
		input.value = "";
		input.focus();
	}
	function textMirror (articles) {
		input.addEventListener("keyup", function (event) {
			var inputText = input.value;
			if (articles.classList.contains("selected")) {
				articles.childNodes[1].innerHTML = inputText;
			}
		});
}
	

	return originalCarLot;


})(CarLot || {});