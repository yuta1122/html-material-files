var log;
function main( ) {
    log = document.getElementById("output");
    var a = 312169;
    var b =  57239;
    var r;

    do {
        r = a % b;
        console.log("a= " + a + ", b= " + b + ", r= " + r);
        a = b;
        b = r;
    } while (r != 0);

    console.log("最大公約数は"+ a +"です。");
    log.innerHTML = "最大公約数は"+ a +"です。<br>";
}

function reset( ) {
    log = document.getElementById("output");
    log.innerHTML = "";
}
