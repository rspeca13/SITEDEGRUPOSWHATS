(() => {
  const whatsappNumber = "5519996697769";
  const baseMessage = "Olá! Quero divulgar meu produto ou serviço nos grupos de WhatsApp.";
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      menuButton.textContent = "☰";
    }));
  }

  document.querySelectorAll(".whatsapp-plan").forEach(link => {
    const plan = link.dataset.plan || "plano de divulgação";
    const message = `${baseMessage}\nTenho interesse no plano: ${plan}.\nComo faço para contratar?`;
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const contactLink = document.querySelector("#contact-whatsapp");
  if (contactLink) {
    contactLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
})();