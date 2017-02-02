"use strict";

var CarLot = (function(originalCarLot){


	originalCarLot.handleClasses = function(event){
			removeClasses();
			addClassSelected("green");
			inputSelect();
			textMirror(event.currentTarget);
	};
	function removeClasses(){
		//Loop and remove classes
		for (var i = 0; i < articles.length; i++) {
			articles.item(i).classList.remove("green");
		}
	}
	function addClassSelected(green){
		//added class to event.target
		event.currentTarget.classList.add(green);
	}
	function inputSelect(){
		input.value = event.currentTarget.childNodes[1].innerHTML;
		input.focus();
	}
	function textMirror (articles) {
		input.addEventListener("keyup", function (event) {
			var inputText = input.value;
			if (articles.classList.contains("green")) {
				articles.childNodes[1].innerHTML = inputText;
			}
		});
}
	

	return originalCarLot;


})(CarLot || {});