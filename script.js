window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.opacity = "0";
    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }, 4000); // 4 saniye sonra kaybolur
});

// kullanıcı ekrana dokunursa müzik başlar (mobil için şart)
document.addEventListener("touchstart", () => {
  const audio = document.querySelector("audio");
  if (audio) {
    audio.play().catch(() => {});
  }
}, { once: true });

// masaüstü için tıklama
document.addEventListener("click", () => {
  const audio = document.querySelector("audio");
  if (audio) {
    audio.play().catch(() => {});
  }
}, { once: true });

// === Yazıyı dış dosyadan çekme sistemi ===
async function yaziGuncelle() {
  try {
    const response = await fetch('text.json?_=' + new Date().getTime()); // cache sorunu olmasın
    const data = await response.json();

    const lis = document.querySelectorAll('.members ul li');
    lis[0].innerText = data.kullanici1;
    lis[1].innerText = data.kullanici2;
    lis[2].innerText = data.kullanici3;
  } catch (e) {
    console.error("text.json okunamadı:", e);
  }
}

// Her 3 saniyede bir güncelle
setInterval(yaziGuncelle, 3000);
yaziGuncelle();
