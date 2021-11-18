function loading() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} Horas e ${min} Minutos.`;
    if (hora >= 5 && hora < 12) {
        img.src = "images/manha.png";
        window.document.body.style.background = "#f1cc88";
    } else if (hora >= 12 && hora < 18) {
        img.src = "images/tarde.png";
        window.document.body.style.background = "#dfa57f";
    } else {
        img.src = "images/noite.png";
        window.document.body.style.background = "#2d4c50";
    }
}