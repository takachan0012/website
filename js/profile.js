window.onscroll = () => {
  let introductionSpan = document.querySelectorAll('span');
  let introductionElement = document.getElementById('introduction');
  let htmlBar = document.getElementById('html-bar');
  let cssBar = document.getElementById('css-bar');
  let bootstrapBar = document.getElementById('bootstrap-bar');
  let javaScriptBar = document.getElementById('javascript-bar');
  if (window.scrollY < 300) {
    for (i = 3; i >= 1; i--) {
      introductionSpan[i].style.marginLeft = '-100vw';
      introductionSpan[i].style.transition = `all ${i}s`;
    }
    animationBar(htmlBar, 0);
    animationBar(cssBar, 0);
    animationBar(bootstrapBar, 0);
    animationBar(javaScriptBar, 0);
  } else {
    introductionElement.style.opacity = 1;
    introductionElement.style.transition = 'opacity .5s';
    for (i = 1; i < 4; i++) {
      introductionSpan[i].style.marginLeft = '1vw';
      introductionSpan[i].style.transition = `all ${i + 1}s`;
    }
    setTimeout(function () {
      animationBar(htmlBar, 50);
      animationBar(cssBar, 50);
      animationBar(bootstrapBar, 50);
      animationBar(javaScriptBar, 50);
    }, 3000);
  }
}

function animationBar(element, value) {
  for (i = 0; i <= value; i++) {
    element.style.transition = 'width 20s';
    element.setAttribute('style', `width: ${i}%`);
  }
  if (i >= 50 && i < 75) {
    element.textContent = 'Intermediate';
  }
}

function mediaScreen(x) {
  let navbar = document.getElementById('navbar');
  let divBlank = document.getElementById('blank');
  let divSkillList = document.getElementById('skill-list');
  let divContact = document.getElementById('contact');
  if (x.matches) {
    navbar.classList.remove('justify-content-center');
    navbar.classList.add('justify-content-end');
    divBlank.classList.add('d-flex');
    divBlank.classList.add('justify-content-evenly');
    divSkillList.style.marginTop = 0;
    divSkillList.classList.add('my-4');
  }
}
var screenWidth = window.matchMedia('(min-width: 1280px)');
mediaScreen(screenWidth);
screenWidth.addListener(mediaScreen)
