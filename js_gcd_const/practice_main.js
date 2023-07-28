var log;
function main( ) {
    log = document.getElementById("output");
    var a = 312169;
    var b =  57239;
    var r;
    var str = new String( );

    do {
        r = a % b;
        str += "a=" + a + ",&nbsp;";
        str += "b=" + b + ",&nbsp;";
        str += "r=" + r + "<br>";
        a = b;
        b = r;
    } while (r != 0);
    str += "最大公約数は"+ a +"です。<br>"
    log.innerHTML = str;
}

function reset( ) {
    log = document.getElementById("output");
    log.innerHTML = "";
}
