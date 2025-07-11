document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("containerRequests");
  const pageTitle = document.querySelector(".page-title");
  const mrAuto = document.querySelector(".mr-auto");
  const cuboAnimado = document.querySelector('img[alt="Cubo girando e redimensionando-se repetidamente."]');

  if (container) {
    function inserirLogoNosTitulos() {
      const titles = container.querySelectorAll(".card-title.text-dark");
      titles.forEach((title) => {
        if (title.querySelector("img")) return;

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

    const cardsTitulos = container.querySelectorAll(".col-lg-6.col-xxl-4.col-card-service .card-title");
    cardsTitulos.forEach((title) => {
      if (!title.querySelector("img")) {
        const logo = document.createElement("img");
        logo.src = window.triangleLogo || "";
        logo.style.height = "20px";
        logo.style.marginRight = "8px";
        logo.style.verticalAlign = "middle";
        title.prepend(logo);
      }
    });
  }

  if (cuboAnimado && window.gifLoading) {
    cuboAnimado.src = window.gifLoading;
  }

  if (pageTitle && mrAuto) {
    pageTitle.style.display = "flex";
    pageTitle.style.alignItems = "center";
    pageTitle.style.gap = "16px";

    const logoContainer = document.createElement("div");
    const logoImagem = document.createElement("img");
    const textosContainer = document.createElement("div");

    logoImagem.src = window.completeLogo || "";
    logoImagem.style.maxWidth = "150px";
    logoImagem.style.height = "auto";

    const h5 = mrAuto.querySelector("h5");
    const h1 = mrAuto.querySelector("h1");
    if (h5) textosContainer.appendChild(h5);
    if (h1) textosContainer.appendChild(h1);

    pageTitle.innerHTML = "";
    logoContainer.appendChild(logoImagem);
    pageTitle.append(logoContainer, textosContainer);
  }
});
