var ctx;
window.onload = function( ) {
    ctx = document.getElementById("cvs_aclock").getContext("2d");
    setInterval("aclock_sc( )", 200);
}

function aclock_sc( ) {
    var datetime = new Date( );
    var tm_h = datetime.getHours( ) % 12;
    var tm_m = datetime.getMinutes( );
    var tm_s = datetime.getSeconds( ) + datetime.getMilliseconds( ) / 1000.0;
    var r = Math.min(cvs_aclock.width, cvs_aclock.height) / 2;
    var cx = cvs_aclock.width  / 2;
    var cy = cvs_aclock.height / 2;
    var hn_scale = 0.9;
    var hh_scale = 0.6;
    var hm_scale = 0.75;
    var hs_scale = 0.85;

    var tx, ty;

    // 表示領域クリア
    ctx.lineCap ='round';
    ctx.beginPath( );
    ctx.fillStyle ="rgb(255, 255, 255)";
    ctx.fillRect(0, 0, cvs_aclock.width, cvs_aclock.height);

    // 表示盤の外枠
    ctx.beginPath();
    ctx.strokeStyle ="rgb(0, 0, 0)";
    ctx.lineWidth   = 6;
    ctx.arc(cx, cy, r * hn_scale, 0, Math.PI * 2, false);
    ctx.stroke();

    // 表示盤の時
    var d_th = Math.PI / 30;
    var th = 0.0;
    var d_scale;
    ctx.strokeStyle = "rgb(0, 0, 0)";
    for(i = 0; i < 60; i ++){
        tx = r * Math.cos(th);
        ty = r * Math.sin(th);
        th += d_th;
        if (i % 5 == 0) {
            ctx.lineWidth   = 4;
            d_scale = 0.1;
        } else {
            ctx.lineWidth   = 2;
            d_scale = 0.05
        }
        ctx.beginPath( );
        ctx.moveTo(cx + tx *  hn_scale,            cy + ty *  hn_scale           );
        ctx.lineTo(cx + tx * (hn_scale - d_scale), cy + ty * (hn_scale - d_scale));
        ctx.stroke( );
    }

    // 時針
    th = (tm_h - 3 + tm_m / 60 + tm_s / 3600) / 6 * Math.PI;
    tx = r * Math.cos(th) * hh_scale;
    ty = r * Math.sin(th) * hh_scale;

    ctx.beginPath();
    ctx.strokeStyle = "rgb(128, 128, 128)";
    ctx.lineWidth   = 8;
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + tx, cy + ty);
    ctx.stroke( );

    // 分針
    th = (tm_m - 15 + tm_s / 60) / 30 * Math.PI;
    tx = r * Math.cos(th) * hm_scale;
    ty = r * Math.sin(th) * hm_scale;

    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth   = 4;
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + tx, cy + ty);
    ctx.stroke( );

    // 秒針
    th = (tm_s - 15) / 30 * Math.PI;
    tx = r * Math.cos(th) * hs_scale;
    ty = r * Math.sin(th) * hs_scale;

    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.lineWidth   = 2;
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + tx, cy + ty);
    ctx.stroke( );
}
