const workCards = document.querySelector('.work-container');
// const cards = document.querySelectorAll(".work-container > div")
const body = document.querySelector('body');
const hamburger = document.getElementById('handberga-menu');
const menu = document.getElementById('menu');
const existBtn = document.getElementById('exit');


function removeClass() {
  menu.style.display = 'none';
  existBtn.style.display = 'none';
  hamburger.style.display = 'block';
}

function showClass() {
  hamburger.style.display = 'none';
  menu.style.display = 'block';
  existBtn.style.display = 'block';
}

existBtn.addEventListener('click', removeClass);
menu.addEventListener('click', showClass);
hamburger.addEventListener('click', showClass);
menu.addEventListener('click', removeClass);