document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById('tab-' + target).classList.add('active');

      // Update URL hash without scrolling
      history.replaceState(null, '', '#' + target);
    });
  });

  // Restore tab from URL hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const target = document.querySelector('[data-tab="' + hash + '"]');
    if (target) target.click();
  }
});
