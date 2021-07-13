var h1 = document.getElementsByTagName('h1');
h1.onmouseover = function(){ mouseOver()};
h1.onmouseout = function(){mouseOut()};

function mouseOver(){
    h1.style.color = "red";
}
function mouseOut(){
    h1.style.color = "blue";
}






