var log;
function main( ) {
    log = document.getElementById("output");
    var a = 10;
    var h =  8;
    var s = a * h / 2;
    var str;
    str  = "底辺の長さは" + a + "です。<br>";
    str += "高さは" + h +"です。<br>";
    str += "この三角形の面積は"+ s +"です。<br>";
    log.innerHTML = str;
}

function reset( ) {
    log = document.getElementById("output");
    log.innerHTML = "";
}
