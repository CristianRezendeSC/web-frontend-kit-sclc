document.addEventListener("DOMContentLoaded", function () {
  // Atualizar favicon
  const links = document.querySelectorAll('link[rel*="icon"], link[rel*="apple-touch-icon"]');
  links.forEach(link => {
    link.href = window.triangleLogo;
  });

  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = window.triangleLogo;
    document.head.appendChild(favicon);
  }

  // Atualizar cubo animado, se existir e gifLoading estiver definido
  const cuboAnimado = document.querySelector('img[alt="Cubo girando e redimensionando-se repetidamente."]');
  if (cuboAnimado && window.gifLoading) {
    cuboAnimado.src = window.gifLoading;
  }

  // INSERIR LOGO NA ESQUERDA DA .page-title
  const pageTitle = document.querySelector(".page-title");

  if (pageTitle && window.completeLogo) {
    const logoContainer = document.createElement("div");
    logoContainer.style.display = "flex";
    logoContainer.style.alignItems = "center";
    logoContainer.style.marginRight = "16px";

    const logoImagem = document.createElement("img");
    logoImagem.src = window.completeLogo;
    logoImagem.style.maxWidth = "150px";
    logoImagem.style.height = "auto";

    logoContainer.appendChild(logoImagem);

    pageTitle.style.display = "flex";
    pageTitle.style.alignItems = "center";

    pageTitle.insertBefore(logoContainer, pageTitle.firstChild);
  }
});
