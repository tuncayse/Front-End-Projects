// Kullanıcıdan isim girişi iste
let myName = prompt("Lütfen isminizi girin:");

// Eğer kullanıcı isim girdiyse, HTML içindeki userNameArea elementine yazdır
if (myName) {
    // userNameArea elementini bul
    let userNameArea = document.getElementById("userNameArea");

    // Eğer element bulunduysa ismi içine yazdır
    if (userNameArea) {
        userNameArea.textContent =  myName;
    } else {
        console.error("userNameArea elementi bulunamadı!");
    }
} else {
    console.log("İsim girmediniz veya iptal ettiniz.");
}


// Saati gösteren fonksiyon
function showTime() {
    // Anlık zamanı al
    let now = new Date();

    // Saat, dakika ve saniyeleri al
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Zamanı birleştir ve saat formatını oluştur
    let time = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    // HTML içindeki clock elementine yazdır
    let clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = time;
    } else {
        console.error("clock elementi bulunamadı!");
    }

    // Her saniyede bir showTime fonksiyonunu çağır
    setTimeout(showTime, 1000);
}

// Sayfa yüklendiğinde showTime fonksiyonunu çağır
document.addEventListener("DOMContentLoaded", showTime);