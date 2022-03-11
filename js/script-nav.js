// ul navbar
const navProfil = document.querySelector('.nav-profil');
const list1 = document.querySelector('nav ul .nav-bottom-right-list1');

navProfil.addEventListener('click', function () {
  list1.classList.toggle('slide-bottom');
});

// menu Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});