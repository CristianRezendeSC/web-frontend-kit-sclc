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

  // Inserir logo pequena (triangleLogo) dentro dos títulos no container #containerRequests
  const container = document.getElementById("containerRequests");
  if (container) {
    function inserirLogoNosTitulos() {
      const titles = container.querySelectorAll(".card-title.text-dark");
      titles.forEach((title) => {
        if (title.querySelector("img")) return; // já tem logo, não faz nada

        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.gap = "8px";

        const logo = document.createElement("img");
        logo.src = window.triangleLogo || "";
        logo.alt = "";
        logo.style.height = "20px";

        const texto = document.createElement("span");
        texto.textContent = title.textContent;

        title.textContent = "";
        wrapper.append(logo, texto);
        title.appendChild(wrapper);
      });
    }

    inserirLogoNosTitulos();

    const observer = new MutationObserver(() => {
      inserirLogoNosTitulos();
    });

    observer.observe(container, { childList: true, subtree: true });
  }

  // Inserir logo grande (completeLogo) na .page-title
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
