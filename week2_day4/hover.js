
document.getElementById("demo").addEventListener("mouseover", promptMe);

document.getElementById("demo").addEventListener("mouseout", mouseOut);




function mouseOver() {
    document.getElementById("demo").style.color = "black";

}

function mouseOut() {
    document.getElementById("demo").style.color = "red";
}

function promptMe(e){
	alert('Hey, I told you not to hover over me')
}
