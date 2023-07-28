var log;
var start_button;
var stop_button;
window.onload = function( ) {
    log          = document.getElementById("output");
    start_button = document.getElementById("start");
    stop_button  = document.getElementById("stop");
}

var timer;
var sec_value;
function start_timer( ) {
    sec_value = document.fm.var_sec.value;
    if(sec_value == "") {
        log.innerHTML = "秒を設定してください！";
    } else {
        start_button.disabled = true;
        stop_button.disabled = false;
        sec_value = parseInt(sec_value);
        log.innerHTML = sec_value + "秒";
        timer = setInterval("countdown( )", 1000);
    }
}

function countdown( ) {
    sec_value --;
    if (sec_value <= 0) {
        stop_timer("時間です。");
        } else {
        log.innerHTML = sec_value + "秒";
    }
}

function stop_timer(str) {
    start_button.disabled = false;
    stop_button.disabled = true;
    log.innerHTML = str;
    clearInterval(timer);
}
