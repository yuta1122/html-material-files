var map;

// 表示する地点
var np = 0;
var np_n = 0;
var np_m = 10;
var points = [
    [34.203426, 134.604921], // 鳴門教育大学
    [34.084370, 134.557714], // 附属中学校
    [34.077634, 134.555311]  // 附属小学校
];

window.onload = function( ) {
    map = L.map("h_map");

    // 国土地理院レイヤー
    var tileLayer_gsi = L.tileLayer(
        "http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
        {attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"}
    );
    tileLayer_gsi.addTo(map);

    //           緯度　　　経度　　　　　表示倍率
    map.setView(points[np], 14);

    // マーカー追加　　　　緯度　　　経度
    var marker = L.marker(points[0]);
    marker.bindPopup("鳴門教育大学");
    marker.addTo(map);
    marker = L.marker(points[1]);
    marker.bindPopup("附属中学校");
    marker.addTo(map);
    marker = L.marker(points[2]);
    marker.bindPopup("附属小学校");
    marker.addTo(map);

    setInterval("pan_move2( )", 200);
}

function pan_move2( ) {
    var np1 = (np + 1) % points.length;
    var lat = (np_n * points[np1][0] + (np_m - np_n) * points[np][0]) / np_m;
    var lon = (np_n * points[np1][1] + (np_m - np_n) * points[np][1]) / np_m;
    var ptn = [lat, lon];
    map.panTo(ptn);
    np_n ++;
    if (np_n === np_m) {
        np_n = 0;
        np = np1;
    }
}
