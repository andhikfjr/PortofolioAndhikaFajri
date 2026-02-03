// Fade in page saat load
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("fade-in");

  // Hamburger menu toggle (mobile)
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const sidebar = document.getElementById("sidebar");

  if (hamburgerMenu && sidebar) {
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");
      sidebar.classList.toggle("active");
    });

    // Close sidebar when clicking a link
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
        sidebar.classList.remove("active");
      });
    });
  }

  // Fade out transition saat pindah halaman
  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    const url = link.getAttribute("href");

    // Abaikan anchor links dan special links
    if (
      !url ||
      url.startsWith("#") ||
      url.startsWith("mailto:") ||
      url.startsWith("tel:") ||
      url.startsWith("javascript:")
    ) {
      return;
    }

    link.addEventListener("click", (e) => {
      e.preventDefault();
      body.classList.remove("fade-in");
      body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 500);
    });
  });
});
