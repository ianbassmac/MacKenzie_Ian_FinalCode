//source: https://stackoverflow.com/questions/60642215/is-it-possible-to-highlight-an-individual-line-of-text-as-you-scroll-through-a-w/60642670#60642670 
var color = JSON.parse(localStorage.getItem("selectColor"));
console.log("color", color);

var scan = document.getElementById("scan");

var highlight = document.createElement("div");
highlight.setAttribute("class", "highlighter");
console.log(highlighter);
scan.appendChild(highlight);

var highlighter = document.getElementsByClassName("highlighter")[0];

highlighter.style.backgroundColor = `hsl(${Math.floor(color.h)}, 100%, 50%)`;

window.addEventListener('scroll', function(e){
	var y = window.scrollY;
    var lineNumber = Math.floor(y/25);
    highlighter.style.top = `${lineNumber * 25}px`;
});





