const texts = {
  en: {
    title: "HI, I AM MF_MF5.",
    desc: "I am a minecraft player. I love codes, mechanic and also minecraft... Just that lol."
  },
  tr: {
    title: "MERHABA, BEN MF_MF5.",
    desc: "Ben bir Minecraft oyuncusuyum. Kodları, mekaniği ve tabi ki Minecraft'ı seviyorum... Hepsi bu kadar lol."
  }
};

function setLang(lang) {
  document.getElementById("title").innerText = texts[lang].title;
  document.getElementById("desc").innerText = texts[lang].desc;
}

// Butonlara tıklama olaylarını bağla
document.getElementById("btn-en").addEventListener("click", () => setLang("en"));
document.getElementById("btn-tr").addEventListener("click", () => setLang("tr"));
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-en").addEventListener("click", () => setLang("en"));
  document.getElementById("btn-tr").addEventListener("click", () => setLang("tr"));
});

