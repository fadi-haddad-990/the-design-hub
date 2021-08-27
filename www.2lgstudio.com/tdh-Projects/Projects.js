var filter = document.querySelector("#filter");
var dropDown = document.querySelector("#drop-down");

function hideDrop() {
 dropDown.classList.toggle("hidden");
}
//function conso(){
//    console.log("clicked");
//}


filter.addEventListener("click",hideDrop,false);

//window.addEventListener("click",hideDrop,false);
//document.addeventListener("click",hideDrop,false);
//window.onClick = console.log("window clickes:");


var head =document.querySelector("#header");

var scrollPos = 0;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		head.style.display = "block";
	else
		head.style.display = "none";
	scrollPos = (document.body.getBoundingClientRect()).top;
});