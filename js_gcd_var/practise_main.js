var log;
function main( ) {
    log = document.getElementById("output");
    var v_ok = true;
    log.innerHTML = "";
    if (document.fm.var_a.value == "") {
        log.innerHTML += "aの値が設定されていません。<br>";
        v_ok = false;
    }
    if (document.fm.var_b.value == "") {
        log.innerHTML += "bの値が設定されていません。<br>";
        v_ok = false;
    }
    if (v_ok == false) return;
    var a = eval(document.fm.var_a.value);
    var b = eval(document.fm.var_b.value);
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
    document.fm.var_a.value = "1";
    document.fm.var_b.value = "1";
}
