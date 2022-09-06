/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

function ToggleClass() {
  const MOBILE_MENU = document.querySelector('.mobile-menu');
  MOBILE_MENU.classList.toggle('open');
}

function ScrollTo(tag, property) {
  ToggleClass();
  const element = document.querySelector(tag);
  element.scrollIntoView({ block: property, behavior: 'smooth' });
}

/* ---------------------- PROJECTS ------------------------------- */
function CreateProject() {
  const PROJECT_DIV = document.createElement('div');
  PROJECT_DIV.classList.add('project-mobile-template');

  const PROJECT_BACKGROUND = document.createElement('img');
  PROJECT_BACKGROUND.src = './rsc/images/Img-Placeholder_01.png';
  PROJECT_BACKGROUND.classList.add('project-background');
  PROJECT_DIV.appendChild(PROJECT_BACKGROUND);

  const PROJECT_TITLE = document.createElement('h3');
  PROJECT_TITLE.textContent = 'PROJECTS';
  PROJECT_DIV.appendChild(PROJECT_TITLE);

  const PROJECT_PARAGRAPH = document.createElement('p');
  PROJECT_PARAGRAPH.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard";
  PROJECT_DIV.appendChild(PROJECT_PARAGRAPH);

  const PROJECT_TECHNOLOGIES = document.createElement('ul');
  PROJECT_DIV.appendChild(PROJECT_TECHNOLOGIES);
  const PROJECT_TECHNOLOGIES_TECH = document.createElement('li');
  PROJECT_TECHNOLOGIES_TECH.textContent = 'HTML';
  PROJECT_TECHNOLOGIES.appendChild(PROJECT_TECHNOLOGIES_TECH);

  const PROJECT_LINK = document.createElement('a');
  PROJECT_LINK.textContent = 'See Project';
  PROJECT_DIV.appendChild(PROJECT_LINK);

  const PROJECTS = document.querySelector('#projects-mobile');
  PROJECTS.appendChild(PROJECT_DIV);
}

CreateProject();