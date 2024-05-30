'use strict';

// Carica i moduli statici all'avvio
document.addEventListener("DOMContentLoaded", function() {
  loadModule('sidebar', 'modules/sidebar.html');
  loadModule('navbar', 'modules/navbar.html');

  // Carica il contenuto predefinito
  loadModule('content', 'modules/about.html');
});
// Aggiorna lo stato attivo del link nella navbar
function updateActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll("[data-nav-link]");
  navLinks.forEach(link => {
    if (link === activeLink) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
// Funzione per caricare un modulo da un URL e inserirlo in un elemento specifico
function loadModule(elementId, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error('Error loading module:', error));
}

// Gestisce il clic sui link della navbar per caricare il modulo corrispondente e aggiornare lo stato attivo del link
document.addEventListener('click', function(event) {
  if (event.target.dataset.navLink) {
    const page = event.target.dataset.navLink;
    loadModule('content', `modules/${page}.html`);
    updateActiveNavLink(event.target);
    event.preventDefault();
  }
});



// Funzione toggle degli elementi
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Variabili della sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Funzionalità toggle della sidebar per mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Variabili dei testimonials
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variabili del modal
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Funzione toggle del modal
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Aggiungi evento click a tutti gli elementi del modal
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// Aggiungi evento click al bottone di chiusura del modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Variabili del select personalizzato
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Aggiungi evento a tutti gli elementi del select
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Variabili del filtro
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all") {
      item.classList.add("active");
    } else if (selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Aggiungi evento a tutti i bottoni del filtro per schermi grandi
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Variabili del form di contatto
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Aggiungi evento a tutti i campi di input del form
formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Variabili di navigazione della pagina
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Aggiungi evento a tutti i link di navigazione
navigationLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    const targetPage = this.dataset.navLink;
    pages.forEach(page => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
      }
    });
    updateActiveNavLink(this);
    event.preventDefault();
  });
});
