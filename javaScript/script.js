var menuIcon = document.querySelector('.menu-icon');
var menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('show');
});

menu.addEventListener('click', function() {
  menu.classList.remove('show');
});
