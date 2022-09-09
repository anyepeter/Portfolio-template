const workCards = document.querySelector('.work-container');
// const cards = document.querySelectorAll(".work-container > div")
const body = document.querySelector('body');
const hamburger = document.getElementById('handberga-menu');
const menu = document.getElementById('menu');
const existBtn = document.getElementById('exit');
const projectCards = [
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'Images/abvout.png',
    Tech: ['Html', 'CSS', 'Bootstrap', 'Ruby'],
    button: 'See project',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'Images/abvout.png',
    Tech: ['Html', 'CSS', 'Bootstrap', 'Ruby'],
    button: 'See project',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'Images/abvout.png',
    Tech: ['Html', 'CSS', 'Bootstrap', 'Ruby'],
    button: 'See project',
  },
  {
    Name: 'Profesional Art Printing Data ',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'Images/abvout.png',
    Tech: ['Html', 'CSS', 'Bootstrap', 'Ruby'],
    button: 'See project',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'Images/abvout.png',
    Tech: ['Html', 'CSS', 'Bootstrap', 'Ruby'],
    button: 'See project',
  },
  {
    Name: 'Profesional Art Printing Data',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'Images/abvout.png',
    Tech: ['Html', 'CSS', 'Bootstrap', 'Ruby'],
    button: 'See project',
  },
];

projectCards.forEach((card) => {
  const content = `
  <div>
  <h3>${card.Name}</h3>

  <p>${card.Description}</p>

  <ul>
      <li>${card.Tech[0]}</li>
      <li>${card.Tech[1]}</li>
      <li>${card.Tech[2]}</li>
  </ul>
  <button id="sampleproject" type="button">${card.button}</button>
</div>
  `;
  workCards.innerHTML += content;
});

const sampleStep = [
  {
    title: 'Multi Post Stories',
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    Image: 'Images/Portfolio.png',
  },
];
const btnProject = document.querySelectorAll('#sampleproject, .recentBtn');

btnProject.forEach((item) => {
  item.addEventListener('click', () => {
    const main = document.createElement('div');

    const popup = document.createElement('div');
    popup.className = 'popup-container';

    popup.innerHTML = `
  <div  class="element-class">
  <div class="titles">
      <h1> ${sampleStep[0].title}</h1>
      <i  class="bi bi-x closeBtn"></i>
</div>

<ul>
     <li>html</li> 
     
     <li>Bootstrap</li>
     <li>Ruby on rails</li>  
</ul>
<div class="parapragh-section">
<div class="image-class">
     <img class="img-class" src="${sampleStep[0].Image}">
</div>
 <div class="class-container">
<p>
${sampleStep[0].Description}
</p> 

<div class="button-container">
<a href="#">See live<img src="Images/Icn.png" alt=""></a>
     
<a href="#">See source<img src="Images/water.png" alt=""></a>
</div>
 </div>
  </div>
  </div>
  `;
    main.appendChild(popup);
    body.appendChild(main);

    const close = document.querySelector('.closeBtn');

    close.addEventListener('click', () => {
      body.removeChild(main);
    });
  });
});

const form = document.getElementById('formMain')
const mail = document.getElementById('email')
const message = document.querySelector('span')

form.addEventListener('submit', (even) =>{
  mail.value;
   let chackEmail = mail.value.toLowerCase()
  if(mail.value !== chackEmail || mail.value === "") {
    even.preventDefault();
    message.innerHTML = 'Ivnvalid form. Your email have to be in lowercase'
  }
  else {
    form.submit();
  }

})

mail.addEventListener('click', () => {
  message.textContent = ''
})



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