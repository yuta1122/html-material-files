var log;
var cvs;  // キャンバス
var ctx;  // コンテキスト
function main( ) {
    log = document.getElementById("output");

    cvs = document.getElementById("h_canvas");
    ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, h_canvas.width, h_canvas.height);

    var n = eval(document.fm.var_n.value);
    var r = eval(document.fm.var_r.value);

    ctx.lineWidth   = eval(document.fm.var_t.value);
    ctx.strokeStyle = "rgb(0, 0, 255)";
    var cx = h_canvas.width  / 2;
    var cy = h_canvas.height / 2;
    var d_th = 2.0 * Math.PI / n;
    var th = -Math.PI / 2.0;
    ctx.beginPath( );
    ctx.moveTo(cx + r * Math.cos(th), cy + r * Math.sin(th));
    for (i = 1; i < n; i ++) {
        th += d_th;
        ctx.lineTo(cx + r * Math.cos(th), cy + r * Math.sin(th));
    }
    ctx.closePath( );
    ctx.stroke( );

    var plen = 2 * n * r * Math.sin(Math.PI / n);
    log.innerHTML = "多角形の周の長さ＝" + plen + "<br>";
    log.innerHTML += "円周率の近似値＝" + (plen / (2 * r)) + "<br>";
}

function reset( ) {
    log = document.getElementById("output");
    log.innerHTML = "";

    cvs = document.getElementById("h_canvas");
    ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, h_canvas.width, h_canvas.height);
    document.fm.var_n.value = "6";
    document.fm.var_r.value = "100";
    document.fm.var_t.value = "2";
}
