var cvs;
var ctx;

var drawing_flag = false;
var px, py;

window.onload = function( ) {
    log = document.getElementById("output");

    cvs = document.getElementById("h_canvas");
    ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, h_canvas.width, h_canvas.height);

    ctx.lineJoin    = "round";
    ctx.lineCap     = "round";
    ctx.lineWidth   = 8;
    ctx.strokeStyle = "rgb(0, 0, 255)";

    cvs.addEventListener("mousedown", start_draw, false);
    cvs.addEventListener("mousemove", drawing,    false);
    cvs.addEventListener("mouseup",   stop_draw,  false);
}

function start_draw(event) {
    px = event.offsetX;
    py = event.offsetY;
    ctx.beginPath( );
    ctx.moveTo(px, py);
    drawing_flag = true;
    log.innerHTML = "X:" + px + "<br>" + "Y:" + py;
}

function drawing(event) {
    if (drawing_flag == true) {
        px = event.offsetX;
        py = event.offsetY;
        ctx.lineTo(px, py);
        ctx.stroke( );
        log.innerHTML = "X:" + px + "<br>" + "Y:" + py;
    }
}

function stop_draw(event) {
    px = event.offsetX;
    py = event.offsetY;
    ctx.lineTo(px, py);
    ctx.stroke( );
    drawing_flag = false;
    log.innerHTML = "";
}