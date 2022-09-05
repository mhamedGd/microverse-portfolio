/* eslint-disable linebreak-style */
function ToggleClass() {
  const MOBILE_MENU = document.querySelector('.mobile-menu');
  MOBILE_MENU.classList.toggle('open');
}

// eslint-disable-next-line no-unused-vars
function ScrollTo(tag, property) {
  ToggleClass();
  const element = document.querySelector(tag);
  element.scrollIntoView({ block: property, behavior: 'smooth' });
}