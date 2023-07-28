window.onload = function( ) {
    var map = L.map("h_map");

    // 国土地理院レイヤー
    var tileLayer_gsi = L.tileLayer(
        "http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
        {attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"}
    );
    tileLayer_gsi.addTo(map);

    // 表示する地点
    var points = [
        [34.203426, 134.604921], // 鳴門教育大学
        [34.084370, 134.557714], // 附属中学校
        [34.077634, 134.555311]  // 附属小学校
    ];

    //           緯度　　　経度　　　　　表示倍率
    map.setView(points[0], 14);

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

    // 表示する地点を線で結ぶ
    var polyline = L.polyline(points, {color: "red"});
    polyline.addTo(map);
}
