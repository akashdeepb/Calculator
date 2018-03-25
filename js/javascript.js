var inbox;
var a=[];
var i=0;
var result;
inbox="";
result=0;
var x="0";
document.getElementById("res").value="";
document.getElementById("1").onclick = function(){changefun("1")};
document.getElementById("2").onclick = function(){changefun("2")};
document.getElementById("3").onclick = function(){changefun("3")};
document.getElementById("4").onclick = function(){changefun("4")};
document.getElementById("5").onclick = function(){changefun("5")};
document.getElementById("6").onclick = function(){changefun("6")};
document.getElementById("7").onclick = function(){changefun("7")};
document.getElementById("8").onclick = function(){changefun("8")};
document.getElementById("9").onclick = function(){changefun("9")};
document.getElementById("0").onclick = function(){changefun("0")};
document.getElementById("sum").onclick = function(){changefun("+")};
document.getElementById("sub").onclick = function(){changefun("-")};
document.getElementById("mul").onclick = function(){changefun("*")};
document.getElementById("div").onclick = function(){changefun("/")};
document.getElementById("equal").onclick = function(){final()};

function changefun(x){
inbox=inbox+x;
document.getElementById("res").value=inbox}

function final(){
result=eval(inbox);
document.getElementById("res").value=result;}