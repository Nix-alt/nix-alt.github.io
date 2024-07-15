let x = "test";

window.getElementByID('1').innerHTML = x;
setTimeout(function(){
    x = "\ttes"
}, 2000);
setTimeout(function(){
    x = "\tte"
}, 2000);
setTimeout(function(){
    x = "\tt"
}, 2000);
setTimeout(function(){
    x = "\t"
}, 2000);