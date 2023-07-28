// リンクの作成コピー
function copyToClipboard(){
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("copyTarget");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    // コピーした内容をアラート表示する
    alert(copyTarget.value);

    // logにメッセージを表示
    console.log("テキストをコピーしました");
}