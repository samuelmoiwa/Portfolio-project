const body = document.querySelector('body');
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navItems = [nav1, nav2, nav3];

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});

const portfolio = [
  {
    cardClass: 'works-card card1',
    cardTitle: 'To Do List',
    cardDesktopImage: 'images/card-images/Portfolio-desktop1.png',
    cardMobileImage: 'images/card-images/Portfolio-Mobile1.png',
    company: 'Microverse',
    job: 'Front-End',
    year: '2022',
    cardInfo: 'This web app is design to keep track of ur dali activities "To-do List", it helps organize your day. It creates a simple list of tasks that you have to complete with an option to edit, check and remove',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSourceButtonText: 'See Source',
  },
  {
    cardClass: 'works-card card2 card-reverse',
    cardTitle: 'Multi-Post Stories',
    cardDesktopImage: 'images/card-images/Portfolio-desktop2.png',
    cardMobileImage: 'images/card-images/Portfolio-Mobile2.png',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
    cardInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSourceButtonText: 'See Source',
  },

  {
    cardClass: 'works-card card3',
    cardTitle: 'Tonic',
    cardDesktopImage: 'images/card-images/Portfolio-desktop3.png',
    cardMobileImage: 'images/card-images/Portfolio-Mobile3.png',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
    cardInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSourceButtonText: 'See Source',
  },
  {
    cardClass: 'works-card card4 card-reverse',
    cardTitle: 'Multi-Post Stories',
    cardDesktopImage: 'images/card-images/Portfolio-desktop4.png',
    cardMobileImage: 'images/card-images/Portfolio-Mobile4.png',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
    cardInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSourceButtonText: 'See Source',
  },
];

const portfolioSection = document.getElementById('portfolio');

Array.from(portfolioSection.children).forEach((child, index) => {
  child.innerHTML = `
  <div class="${portfolio[index].cardClass}">
    <div class="card-img card1">
      <img class="work-img mobile" src="${portfolio[index].cardMobileImage}" alt="">
      <img class="work-img desktop" src="${portfolio[index].cardDesktopImage}" alt="">
    </div>
    <div class="card-text">
      <h2 class="card-title">${portfolio[index].cardTitle}</h2>
      <ul class="card-details">
        <li class="company">${portfolio[index].company}</li>
        <li class="circle"><img src="images/icons/circle.png" alt="circle"></li>
        <li class="job">${portfolio[index].job}</li>
        <li class="circle"><img src="images/icons/circle.png" alt="circle"></li>
        <li class="year">${portfolio[index].year}</li>
      </ul>
      <p class="card-info">${portfolio[index].cardInfo}</p>
      <ul class="tags">
        <li class="tag">${portfolio[index].technologies[0]}</li>
        <li class="tag">${portfolio[index].technologies[1]}</li>
        <li class="tag">${portfolio[index].technologies[2]}</li>
      </ul>
      <button class="btn card-button" id="${[index]}">${portfolio[index].buttonText}</button>
    </div>
  </div>
 `;
});

const openModal = document.querySelectorAll('.card-button');
openModal.forEach((element) => {
  element.addEventListener('click', () => {
    body.classList.toggle('overflow');
    const modalWindow = document.createElement('section');
    modalWindow.classList.add('modal-window');
    modalWindow.innerHTML = `
    <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">${portfolio[element.id].cardTitle}</h2>
          <img class="close" src="images/icons/x-icon.png" alt="close">
        </div>
        <ul class="card-details">
          <li class="company">${portfolio[element.id].company}</li>
          <li class="circle"><img src="images/icons/circle.png" alt="circle"></li>
          <li class="job">${portfolio[element.id].job}</li>
          <li class="circle"><img src="images/icons/circle.png" alt="circle"></li>
          <li class="year">${portfolio[element.id].year}</li>
        </ul>
        <div class="modal-image">
        <img class="modal-img mobile" src="${portfolio[element.id].cardMobileImage}" alt="">
        <img class="modal-img desktop" src="${portfolio[element.id].cardDesktopImage}" alt="">
      </div>
        <div class="modal-texts">
          <p class="modal-info">${portfolio[element.id].modalInfo}</p>
          <div class="tag-btns">
            <ul class="modal-tags">
              <li class="tag">${portfolio[element.id].technologies[0]}</li>
              <li class="tag">${portfolio[element.id].technologies[1]}</li>
              <li class="tag">${portfolio[element.id].technologies[2]}</li>
            </ul>
            <ul class="modal-tags">
              <li class="github-tag tag">${portfolio[element.id].technologies[3]}</li>
              <li class="ruby-tag tag">${portfolio[element.id].technologies[4]}</li>
              <li class="bootstrap-tag tag">${portfolio[element.id].technologies[5]}</li>
            </ul>
            <div class="modal-btns">
              <div class="modal-hr">
                <button class="btn">See Live <img src="images/icons/live-icon.svg" alt="live"></button>
                <button class="btn">See Source <img src="images/icons/github-icon.svg" alt="github"></button>
              </div>
            </div>  
          <div>
        </div>
    </div>
    `;

    document.body.appendChild(modalWindow);
    window.addEventListener('click', (e) => (e.target === modalWindow ? (modalWindow.classList
      .add('hidden'), body.classList.toggle('overflow')) : false)); const closeModal = document
      .querySelectorAll('.close'); closeModal.forEach((el) => { el.addEventListener('click', () => { body.classList.toggle('overflow'); modalWindow.classList.add('hidden'); }); });
  });
});

const email = document.getElementById('contact-email');
const error = document.getElementById('error-message');
const form = document.getElementById('form');
error.style.visibility = 'hidden';
function formValidate(event) {
  if (email.value !== email.value.toLowerCase()) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please enter your email address in lowercase.';
    event.preventDefault();
  } else { error.style.visibility = 'hidden'; }
}
form.addEventListener('submit', formValidate);

const message = document.getElementById('contact-message');
const userName = document.getElementById('contact-name');

function storeData() {
  const user = {
    UserName: userName.value,
    UserEmail: email.value,
    UserText: message.value,
  };
  localStorage.setItem('user', JSON.stringify(user));
}

userName.addEventListener('focusout', storeData);
email.addEventListener('focusout', storeData);
message.addEventListener('focusout', storeData);

const data = JSON.parse(localStorage.getItem('user'));

if (data) {
  userName.value = data.UserName;
  email.value = data.UserEmail;
  message.value = data.UserText;
}