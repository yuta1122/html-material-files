var deg = Math.PI / 180;
var ctx;
window.onload = function( ) {
    ctx = document.getElementById("cvs_aclock").getContext("2d");
    setInterval("aclock_ax( )", 200);
}

var hn_scale = 0.9;
var hh_scale = 0.6;
var hm_scale = 0.75;
var hs_scale = 0.85;
var r, cx, cy;

function aclock_ax( ) {
    var datetime = new Date( );
    var tm_h = datetime.getHours( ) % 12;
    var tm_m = datetime.getMinutes( );
    var tm_s = datetime.getSeconds( ) + datetime.getMilliseconds( ) / 1000.0;;
    r = Math.min(cvs_aclock.width, cvs_aclock.height) / 2;
    cx = cvs_aclock.width  / 2;
    cy = cvs_aclock.height / 2;

    clock_gage( );
    clock_hour_arrow((tm_h + tm_m / 60 + tm_s / 3600) * 30);
    clock_min_arrow ((       tm_m      + tm_s /   60) *  6);
    clock_sec_arrow (                    tm_s         *  6);
}

// 表示盤
function clock_gage( ) {
    // 表示領域クリア
    ctx.lineCap ='round';
    ctx.beginPath( );
    ctx.fillStyle ="rgb(255, 255, 255)";
    ctx.fillRect(0, 0, cvs_aclock.width, cvs_aclock.height);

    ctx.save( );
    ctx.translate(cx, cy);

    ctx.strokeStyle ="rgb(0, 0, 0)";
    ctx.lineWidth   = 6;
    ctx.arc(0, 0, r * hn_scale, 0, 360 * deg, false);
    ctx.stroke( );

    for (i = 0; i < 60; i ++) {
        if (i % 5 == 0) {
            ctx.lineWidth   = 4;
            d_scale = 0.1;
        } else {
            ctx.lineWidth   = 2;
            d_scale = 0.05
        }
        ctx.beginPath( );
        ctx.moveTo(0, r *  hn_scale);
        ctx.lineTo(0, r * (hn_scale - d_scale));
        ctx.stroke( );
        ctx.rotate(6 * deg);
    }
    ctx.restore( );
}

// 時針
function clock_hour_arrow(th) {
    ctx.save( );
    ctx.translate(cx, cy);
    ctx.rotate(th * deg);

    ctx.strokeStyle = "rgb(128, 128, 128)";
    ctx.lineWidth   = 8;

    var py = - r * hh_scale;
    var as = 10;
    ctx.beginPath( );
    ctx.moveTo(0, 0);
    ctx.lineTo(0, py);
    ctx.moveTo(  as, py + 2*as);
    ctx.lineTo(   0, py);
    ctx.lineTo(- as, py + 2*as);
    ctx.stroke( );

    ctx.restore( );
}

// 分針
function clock_min_arrow(th) {
    ctx.save( );
    ctx.translate(cx, cy);
    ctx.rotate(th * deg);

    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth   = 4;

    var py = - r * hm_scale;
    var as = 10;
    ctx.beginPath( );
    ctx.moveTo(0, 0);
    ctx.lineTo(0, py);
    ctx.moveTo(  as, py + 2*as);
    ctx.lineTo(   0, py);
    ctx.lineTo(- as, py + 2*as);
    ctx.stroke( );

    ctx.restore( );
}

// 秒針
function clock_sec_arrow(th) {
    ctx.save( );
    ctx.translate(cx, cy);
    ctx.rotate(th * deg);

    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.lineWidth   = 2;

    var py = - r * hs_scale;
    ctx.beginPath( );
    ctx.moveTo(0, 0);
    ctx.lineTo(0, py);
    ctx.stroke( );

    ctx.restore( );
}