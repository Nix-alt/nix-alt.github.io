let x = "test";

window.getElementById('1').innerHTML = x;
setTimeout(function(){
    x = "\ttes"
    window.getElementById('1').innerHTML = x;
}, 2000);
setTimeout(function(){
    x = "\tte"
    window.getElementById('1').innerHTML = x;
}, 2100);
setTimeout(function(){
    x = "\tt"
    window.getElementById('1').innerHTML = x;
}, 2200);
setTimeout(function(){
    x = "\t"
    window.getElementById('1').innerHTML = x;
}, 2300);