document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('#mainNavList .nav-link, #mainNavList .dropdown-item');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkFileName = linkHref.split('/').pop();

    if (linkFileName === currentPath && linkHref !== '#') {
      link.classList.add('active'); // 給當前頁面的連結加上 active 樣式

      const parentLi = link.closest('.dropdown');
      if (parentLi) {
        const dropdownToggle = parentLi.querySelector('.dropdown-toggle');
        if (dropdownToggle) {
          dropdownToggle.classList.add('active'); // 給父層的 "等待新家" 加上 active 類別
        }
      }
    }
  });
});