var log;

window.onload = function( ) {
    log = document.getElementById("output");

    var map = L.map("h_map");

    // OSM(Open Street Map)レイヤー追加
    var tileLayer_osm = L.tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a>"}
    );
    tileLayer_osm.addTo(map);

    //           緯度　　　経度　　　　　表示倍率
    map.setView([34.2, 134.6], 14);

    // クリックした位置の緯度と経度
    map.addEventListener("mousemove",
        function(pos) {
            log.innerHTML = "指定した位置：緯度" + pos.latlng.lat.toFixed(6) + "°，経度" + pos.latlng.lng.toFixed(6) + "°";
        }
    );
}
