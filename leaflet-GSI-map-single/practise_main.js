window.onload = function( ) {
    var map = L.map("h_map");

    // 国土地理院レイヤー
    var tileLayer_gsi = L.tileLayer(
        "http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
        {attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"}
    );
    tileLayer_gsi.addTo(map);

    //           緯度　　　経度　　　　　表示倍率
    map.setView([34.203426, 134.604921], 14);

    // マーカー追加　　　　緯度　　　経度
    var marker = L.marker([34.203426, 134.604921]);
    marker.bindPopup("<a href='http://www.naruto-u.ac.jp'>鳴門教育大学</a>");
    marker.addTo(map);
}
