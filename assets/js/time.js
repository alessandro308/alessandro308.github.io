function setbgcolor(color){
	document.body.backgroundColor = color;
}

function setBright(percent){
	document.getElementById("bg").className="bn".percent;
}
var time = getHours();
function between(start, end){
	return time <= end && time >= start;
}

var colors = ["#348cb2", "#276f8e", "#205d77", "#164559", "#0f313f", "#0a2530"];


if (between(0,4)){
	color = colors[5];
}