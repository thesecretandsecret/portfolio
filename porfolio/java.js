 
const navLinks = document.querySelectorAll('.topnav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


const dynamicContent = document.getElementById('dynamicContent');
const updateButton = document.getElementById('updateButton');

 
updateButton.addEventListener('click', () => { 
  dynamicContent.textContent = 'I am Passionate about helping others. I am great communicator.I can asks great questions.';
});

 
const dreamSection = document.getElementById('dream');
window.addEventListener('scroll', () => {
  const position = dreamSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight) {
    dreamSection.style.opacity = 1;
    dreamSection.style.transform = 'translateY(0)';
  }
});
 


const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const imageWidth = sliderContainer.clientWidth;
let slideIndex = 1;
 
sliderContainer.style.transform = `translateX(${-imageWidth * slideIndex}px)`;
 
function slideNext() {
  slideIndex++;
  if (slideIndex >= sliderContainer.childElementCount) {
    slideIndex = 0;
  }
  sliderContainer.style.transform = `translateX(${-imageWidth * slideIndex}px)`;
}
 
function slidePrev() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderContainer.childElementCount - 1;
  }
  sliderContainer.style.transform = `translateX(${-imageWidth * slideIndex}px)`;
}
 
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

 
const button = document.querySelector('#myButton');

 
button.addEventListener('click', () => {
 
  alert('Button clicked!');
});
button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
 
button.addEventListener('mouseover', () => { 
  console.log('Mouse over button');
});

button.addEventListener('mouseout', () => { 
  console.log('Mouse out of button');
});

const portfolioItem = document.getElementById('portfolioItem');
const animateButton = document.getElementById('animateButton');

animateButton.addEventListener('click', () => {
  portfolioItem.classList.add('animate');

  setTimeout(() => {
    portfolioItem.classList.remove('animate');
  }, 500);
});

 


 
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);


const contactForm = document.getElementById('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email'); 
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError'); 

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();  
 
  nameError.textContent = '';
  emailError.textContent = ''; 
 
  let isValid = true;

  if (nameField.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  if (emailField.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(emailField.value)) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  }

  if (isValid) {
    contactForm.submit();
  }
});

function isValidEmail(email) { 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
 
 