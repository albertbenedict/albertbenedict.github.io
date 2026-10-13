if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// See More toggle for My Work grid (1x3 -> 2x3)
const seeMoreBtn = document.getElementById('see-more-projects');
if (seeMoreBtn) {
  const container = seeMoreBtn.closest('#my-work-section')?.querySelector('.projects-container');
  const label = seeMoreBtn.querySelector('.button-text');
  const toggle = () => {
    if (!container) return;
    const expanded = container.classList.toggle('show-all');
    seeMoreBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (label) label.textContent = expanded ? 'See Less' : 'See More';
  };
  seeMoreBtn.addEventListener('click', toggle);
  seeMoreBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
}

// Dark Mode Toggle
const themeSwitch = document.getElementById('theme-switch');

if (themeSwitch) {
  themeSwitch.checked = document.documentElement.getAttribute('data-theme') === 'dark';
  themeSwitch.addEventListener('change', () => {
    const newTheme = themeSwitch.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}