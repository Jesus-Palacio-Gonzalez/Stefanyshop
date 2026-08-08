// ============================================
// STEFY SHOP — enlaces a cada marca
// Reemplaza estos placeholders por las URLs reales
// de ArdyssLife, Artesanias CJ y Diosa Interior.
// ============================================
const BRAND_LINKS = {
  ardysslife: "/ArdyssLife/index.html",
  artesanias: "/ArtesaniasCJ/index.html",
  diosa: "/DiosaInterior/index.html",
};

document.querySelectorAll(".panel").forEach((panel) => {
  const brand = panel.dataset.brand;
  if (BRAND_LINKS[brand]) {
    panel.setAttribute("href", BRAND_LINKS[brand]);
  }
});
