window.onload = function( ) {
    var map = L.map("h_map");

    // OSM(Open Street Map)レイヤー
    var tileLayer_osm = L.tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a>"}
    );
    tileLayer_osm.addTo(map);

    //           緯度　　　経度　　　　　表示倍率
    map.setView([34.203426, 134.604921], 14);

    // マーカー追加　　　　緯度　　　経度
    var marker = L.marker([34.203426, 134.604921]);
    marker.bindPopup("<a href='http://www.naruto-u.ac.jp'>鳴門教育大学</a>");
    marker.addTo(map);
}