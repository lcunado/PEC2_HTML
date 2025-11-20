/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

const toggle = document.querySelector('.header__toggle');
const menu = document.querySelector('#mobileMenu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('header__menu--open');
});
