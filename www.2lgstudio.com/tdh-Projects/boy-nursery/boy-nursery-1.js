var head =document.querySelector("#header");

var scrollPos = 0;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		head.style.display = "block";
	else
		head.style.display = "none";
	scrollPos = (document.body.getBoundingClientRect()).top;
});

//var ar =
//document.getElementsByClassName("portrait-left");
//console.log(ar);
//for (var i=0; i < ar.length; i++){
////    ar[i].style.opacity = "20%";
//    ar[i].style.border = "2px solid red";
//}