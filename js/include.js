function include(component){
    const idName = `${component}-wrap`;
    const target = document.getElementById(idName);

    const xml = new XMLHttpRequest();
    // リクエスト設定
    xml.open("GET", `../include/${component}.html`, true);
    // リクエスト送信
    xml.send(null);

    // 通信完了時に呼び出し
    xml.onload = () => {
        if (xml.readyState === 4) {
            if (xml.status == 200) {
                target.innerHTML = xml.responseText;
            } else {
                console.error('Communication failure'); //通信失敗時
            }
        }
    }
}
