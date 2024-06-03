'use strict';


import { loadPagesContent } from './loadPagesContent.js';
import { initializeNavigation } from './initializeNavigation.js';
import { initializeSidebar } from './sidebar.js';
import { initializeTestimonials } from './testimonials.js';
import { initializeCustomSelect } from './customSelect.js';
import { initializeContactForm } from './contactForm.js';

document.addEventListener("DOMContentLoaded", async function () {
  await loadPagesContent();
  initializeNavigation();
  initializeSidebar();
  initializeTestimonials();
  initializeCustomSelect();
  initializeContactForm();

  // Ensure sidebar and navbar are always active
  document.querySelector("[data-sidebar]").classList.add("active");
  document.querySelector("[data-navbar]").classList.add("active");
});


