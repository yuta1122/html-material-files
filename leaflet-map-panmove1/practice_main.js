var map;

// 表示する地点
var np = 0;
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

    setInterval("pan_move1( )", 1000);
}

function pan_move1( ) {
    np = (np + 1) % points.length;
    map.panTo(points[np]);
}
