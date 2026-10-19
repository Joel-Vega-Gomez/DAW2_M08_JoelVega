'use strict';

(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');
  const copyButton = document.querySelector('[data-copy-email]');
  const copyStatus = document.querySelector('.copy-status');
  const currentYear = document.querySelector('[data-current-year]');

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  if (menuToggle && siteNav) {
    const setMenuOpen = (isOpen) => {
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      siteNav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isOpen);
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    });
  }

  if (copyButton && copyStatus) {
    copyButton.addEventListener('click', async () => {
      const email = copyButton.dataset.copyEmail;
      if (!email) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const temporaryInput = document.createElement('textarea');
          temporaryInput.value = email;
          temporaryInput.setAttribute('readonly', '');
          temporaryInput.style.position = 'absolute';
          temporaryInput.style.left = '-9999px';
          document.body.appendChild(temporaryInput);
          temporaryInput.select();
          const copied = document.execCommand('copy');
          temporaryInput.remove();
          if (!copied) throw new Error('No se pudo copiar el correo.');
        }
        copyStatus.textContent = 'Correo copiado al portapapeles.';
        copyButton.classList.add('is-copied');
      } catch (error) {
        copyStatus.textContent = 'No se pudo copiar automáticamente. Usa el enlace de correo.';
        copyButton.classList.remove('is-copied');
      }
    });
  }
})();
