window.onload = function( ) {
    var map = L.map("h_map");

    // 国土地理院レイヤー（標準）
    var gsi_std = L.tileLayer(
        "http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
        { minZoom: 5, maxZoom: 18, attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"}
    );
    // 国土地理院レイヤー（淡色）
    var gsi_pal = L.tileLayer(
        "http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",
        { minZoom: 5, maxZoom: 18, attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"}
    );
    // 国土地理院レイヤー（白色）
    var gsi_blk = L.tileLayer(
        "http://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png",
        { minZoom: 5, maxZoom: 14, attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"}
    );
    // 国土地理院レイヤー（写真）
    var gsi_ort = L.tileLayer(
        "http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg",
        { minZoom: 5, maxZoom: 18, attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"}
    );
    map.addLayer(gsi_std);

    // コントロールに切り替えなレイヤを設定
    L.control.layers({
        "標準地図": gsi_std,
        "淡色地図": gsi_pal,
        "白地図"  : gsi_blk,
        "写真"    : gsi_ort
    }).addTo(map);

    // コントロールに縮尺距離表示を追加
    L.control.scale({imperial: false}).addTo(map);

    //           緯度　　　経度　　　　　表示倍率
    map.setView([34.203426, 134.604921], 14);

    // マーカー追加　　　　緯度　　　経度
    var marker = L.marker([34.203426, 134.604921]);
    marker.bindPopup("<a href='http://www.naruto-u.ac.jp'>鳴門教育大学</a>");
    marker.addTo(map);
}
