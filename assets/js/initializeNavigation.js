
  
  export const initializeNavigation = () => {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
  
    for (const navLink of navigationLinks) {
      navLink.addEventListener("click", function () {
        const page = this.getAttribute('data-nav-link');
        for (const p of pages) {
          if (page === p.getAttribute('data-page')) {
            p.classList.add("active");
          } else {
            p.classList.remove("active");
          }
        }
        for (const link of navigationLinks) {
          if (link === this) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
        window.scrollTo(0, 0);
      });
    }
  };


  /*
  export const initializeNavigation = () => {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
  
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", function () {
        const page = this.getAttribute('data-nav-link');
        for (let j = 0; j < pages.length; j++) {
          if (page === pages[j].getAttribute('data-page')) {
            pages[j].classList.add("active");
          } else {
            pages[j].classList.remove("active");
          }
        }
        for (let k = 0; k < navigationLinks.length; k++) {
          if (navigationLinks[k] === this) {
            navigationLinks[k].classList.add("active");
          } else {
            navigationLinks[k].classList.remove("active");
          }
        }
        window.scrollTo(0, 0);
      });
    }
  };*/
  