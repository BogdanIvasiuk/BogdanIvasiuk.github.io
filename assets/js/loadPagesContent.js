export const loadPagesContent = async () => {
  const initialPages = [
    { page: 'sidebar', selector: '[data-sidebar]' },
    { page: 'navbar', selector: '[data-navbar]' },
    { page: 'about', selector: '[data-page="about"]' }
  ];

  for (const { page, selector } of initialPages) {
    const response = await fetch(`./modules/${page}.html`);
    if (response.ok) {
      const content = await response.text();
      document.querySelector(selector).innerHTML = content;
    } else {
      console.error(`Failed to load ${page} content: ${response.statusText}`);
    }
  }

  // Load other pages but do not activate them initially
  const otherPages = ['resume', 'portfolio', 'blog', 'contact'];
  for (const page of otherPages) {
    const response = await fetch(`./modules/${page}.html`);
    if (response.ok) {
      const content = await response.text();
      document.querySelector(`[data-page="${page}"]`).innerHTML = content;
    } else {
      console.error(`Failed to load ${page} content: ${response.statusText}`);
    }
  }
};


/*
export const loadPagesContent = async () => {
  const pages = ['about', 'resume', 'portfolio', 'blog', 'contact'];
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const response = await fetch(`./modules/main-content/${page}.html`);
    if (response.ok) {
      const content = await response.text();
      document.querySelector(`[data-page="${page}"]`).innerHTML = content;
    } else {
      console.error(`Failed to load ${page} content: ${response.statusText}`);
    }
  }
};
*/