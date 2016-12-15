function seeRed(e) {
	var cellElements = document.getElementsByClassName("cell");
	console.log(cellElements)
	var randomNumber = Math.floor(Math.random() * 9) 
	var selectedElement = cellElements[randomNumber]
    selectedElement.style.background="#ff0000";
}