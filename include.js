function include(component){
    const idName = `${component}-wrap`;
    const target = document.getElementById(idName);

    const xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status == 200) {
                target.innerHTML = xml.responseText;
            } else {
                console.error('Communication failure'); //通信失敗時
            }
        }
    }
    xml.open("GET", `./${component}.html`, true);

    xml.send(null);
}
