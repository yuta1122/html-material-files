function click_menu(n) {
    switch(n) {
    case 1:
        contents_msg="<h1>知育<br>徳育<br>体育<br>";
        break;
    case 2:
        contents_msg="<h1>台風のため休校します。<br>明日は遠足です。<br>";
        break;
    case 3:
        contents_msg="<h1>徳島県<br>鳴門市<br>";
        break;
    case 4:
        contents_msg="<h1>３０年前に創設<br>新コース開設<br>";
        break;
    default:
        contents_msg="";
    }
    document.getElementById("contents").innerHTML = contents_msg;
}
