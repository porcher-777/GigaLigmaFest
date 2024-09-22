var x=0;
var i=0;
function myFunction() {
	if (x==0){
		document.getElementById('horaires').style.display='block';
		x=1;
		}
	else{
		document.getElementById("horaires").style.display="none";

		x=0;
		}
		
}

function menuApparition(){
  if(i == 0){
    document.getElementById('menu').style.display = "block";
    i = 1;
  }
  else if (i == 1){
    document.getElementById('menu').style.display = "none";
    i = 0;
  }
}

window.onresize = function menuDisparition(){
  if(i == 1 && window.matchMedia("(min-width: 984px)").matches)
    document.getElementById('menu').style.display = "none";
}