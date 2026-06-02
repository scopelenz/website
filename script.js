document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('.tab-content');

  function activateTab(tabName) {
    panels.forEach(p => p.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const panel = document.getElementById('tab-' + tabName);
    if (panel) panel.classList.add('active');

    document.querySelectorAll('[data-tab="' + tabName + '"]').forEach(l => l.classList.add('active'));

    history.replaceState(null, '', '#' + tabName);
    window.scrollTo(0, 0);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      activateTab(link.dataset.tab);
    });
  });

  // Restore tab from URL hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('tab-' + hash)) {
    activateTab(hash);
  }
});
