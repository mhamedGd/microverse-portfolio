/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

function ToggleClass() {
  const MOBILE_MENU = document.querySelector('.mobile-menu');
  MOBILE_MENU.classList.toggle('open');
}

function TogglePopup() {
  const MOBILE_POPUP = document.querySelector('.project-mobile-popup');
  MOBILE_POPUP.classList.toggle('mobile-popup-close');
}

function TogglePopupDesktop() {
  const DESKTOP_POPUP = document.querySelector('.desktop-popup-open');
  DESKTOP_POPUP.classList.toggle('project-desktop-popup');
}

function ScrollTo(tag, property) {
  ToggleClass();
  const element = document.querySelector(tag);
  element.scrollIntoView({ block: property, behavior: 'smooth' });
}

/* ---------------------- PROJECTS ------------------------------- */
const PROJECT_DETAILS_COLLECTION = [
  {
    label: 'Project',
    image_source: './rsc/images/Img-Placeholder_01.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css'],
  },
  {
    label: 'Second',
    image_source: './rsc/images/Img-Placeholder_01.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css'],
  },
  {
    label: 'Project',
    image_source: './rsc/images/Img-Placeholder_01.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css'],
  },
  {
    label: 'Project',
    image_source: './rsc/images/Img-Placeholder_01.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css'],
  },
  {
    label: 'Fifth',
    image_source: './rsc/images/Img-Placeholder_01.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css'],
  },
  {
    label: 'Project',
    image_source: './rsc/images/Img-Placeholder_01.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css'],
  },
];

// MOBILE TEMPLATE
function CreateProjectMobile(DETAILS) {
  const PROJECT_DIV = document.createElement('div');
  PROJECT_DIV.classList.add('project-mobile-template');

  const PROJECT_BACKGROUND = document.createElement('img');
  PROJECT_BACKGROUND.src = DETAILS.image_source;
  PROJECT_BACKGROUND.classList.add('project-background');
  PROJECT_DIV.appendChild(PROJECT_BACKGROUND);

  const PROJECT_TITLE = document.createElement('h3');
  PROJECT_TITLE.textContent = DETAILS.label;
  PROJECT_DIV.appendChild(PROJECT_TITLE);

  const PROJECT_PARAGRAPH = document.createElement('p');
  PROJECT_PARAGRAPH.textContent = DETAILS.description;
  PROJECT_DIV.appendChild(PROJECT_PARAGRAPH);

  const PROJECT_TECHNOLOGIES = document.createElement('ul');
  PROJECT_DIV.appendChild(PROJECT_TECHNOLOGIES);

  const DETAILS_TECHONOLOGIES = DETAILS.technologies;
  for (let i = 0; i < DETAILS_TECHONOLOGIES.length; i += 1) {
    const PROJECT_TECHNOLOGIES_TECH = document.createElement('li');
    PROJECT_TECHNOLOGIES_TECH.textContent = DETAILS_TECHONOLOGIES[i];
    PROJECT_TECHNOLOGIES.appendChild(PROJECT_TECHNOLOGIES_TECH);
  }

  const PROJECT_LINK = document.createElement('button');
  PROJECT_LINK.textContent = 'See Project';
  PROJECT_LINK.addEventListener('click', TogglePopup);
  PROJECT_DIV.appendChild(PROJECT_LINK);

  const PROJECTS = document.querySelector('#projects-mobile');
  PROJECTS.appendChild(PROJECT_DIV);
}

// DESKTOP TEMPLATE
function CreateProjectDesktop(DETAILS) {
  const PROJECT_DIV = document.createElement('div');
  PROJECT_DIV.classList.add('project');

  const PROJECT_HOVER = document.createElement('a');
  PROJECT_HOVER.classList.add('project-template');
  PROJECT_DIV.appendChild(PROJECT_HOVER);

  const PROJECT_BACKGROUND = document.createElement('img');
  PROJECT_BACKGROUND.src = DETAILS.image_source;
  PROJECT_BACKGROUND.classList.add('project-background');
  PROJECT_HOVER.appendChild(PROJECT_BACKGROUND);

  // BUTTON CREATION
  {
    const PROJECT_BUTTON = document.createElement('button');
    PROJECT_BUTTON.style.position = 'absolute';
    PROJECT_BUTTON.style.background = 'none';
    PROJECT_BUTTON.style.border = 'none';
    PROJECT_BUTTON.style.zIndex = '2';
    PROJECT_BUTTON.style.width = '345px';
    PROJECT_BUTTON.style.height = '420px';
    PROJECT_BUTTON.style.cursor = 'pointer';
    PROJECT_BUTTON.addEventListener('click', TogglePopupDesktop);
    PROJECT_HOVER.appendChild(PROJECT_BUTTON);
  }

  const PROJECT_DIV_SHOW = document.createElement('div');
  PROJECT_DIV_SHOW.classList.add('project-template-hide');
  PROJECT_HOVER.appendChild(PROJECT_DIV_SHOW);

  const PROJECT_TITLE = document.createElement('h3');
  PROJECT_TITLE.textContent = DETAILS.label;
  PROJECT_DIV_SHOW.appendChild(PROJECT_TITLE);

  const PROJECT_PARAGRAPH = document.createElement('p');
  PROJECT_PARAGRAPH.textContent = DETAILS.description;
  PROJECT_DIV_SHOW.appendChild(PROJECT_PARAGRAPH);

  const PROJECT_TECHNOLOGIES = document.createElement('ul');
  PROJECT_DIV_SHOW.appendChild(PROJECT_TECHNOLOGIES);

  const DETAILS_TECHONOLOGIES = DETAILS.technologies;
  for (let i = 0; i < DETAILS_TECHONOLOGIES.length; i += 1) {
    const PROJECT_TECHNOLOGIES_TECH = document.createElement('li');
    PROJECT_TECHNOLOGIES_TECH.textContent = DETAILS_TECHONOLOGIES[i];
    PROJECT_TECHNOLOGIES.appendChild(PROJECT_TECHNOLOGIES_TECH);
  }

  const PROJECT_DIV_HIDE = document.createElement('div');
  PROJECT_DIV_HIDE.classList.add('project-template-show');
  PROJECT_HOVER.appendChild(PROJECT_DIV_HIDE);

  const PROJECT_LINK = document.createElement('h4');
  PROJECT_LINK.textContent = 'See Project';
  PROJECT_DIV_HIDE.appendChild(PROJECT_LINK);

  const PROJECTS = document.querySelector('#projects');
  PROJECTS.appendChild(PROJECT_DIV);
}

for (let i = 0; i < 6; i += 1) {
  CreateProjectMobile(PROJECT_DETAILS_COLLECTION[i]);
  CreateProjectDesktop(PROJECT_DETAILS_COLLECTION[i]);
}

function CheckUppercase(value) {
  const tester = /[A-Z]/;
  if (!tester.test(value)) {
    return false;
  }
  return true;
}

const CONTACT_FORM = document.querySelector('form');
const EMAIL_INPUT = CONTACT_FORM.querySelector('#contact-form-email');
const INVALID_MESSAGE = document.querySelector('.contact-form-button small');

function ValidateEmail() {
  const EMAIL_VALUE = EMAIL_INPUT.value;
  const ORIGINAL_BORDER = EMAIL_INPUT.style.border;
  const CHECK_UPPERCASE = CheckUppercase(EMAIL_VALUE);
  if (!CHECK_UPPERCASE) {
    EMAIL_INPUT.classList.remove('invalid');
    INVALID_MESSAGE.classList.add('hide');
    return;
  }

  INVALID_MESSAGE.classList.remove('hide');
  EMAIL_INPUT.classList.add('invalid');
}

EMAIL_INPUT.addEventListener('change', ValidateEmail);
