window.onscroll = () => {
  let introductionSpan = document.querySelectorAll('span');
  let introductionElement = document.getElementById('introduction');
  let htmlBar = document.getElementById('html-bar');
  let cssBar = document.getElementById('css-bar');
  let bootstrapBar = document.getElementById('bootstrap-bar');
  let javaScriptBar = document.getElementById('javascript-bar');
  if(window.scrollY < 300){
    for(i = 2; i >= 0 ; i--){
      introductionSpan[i].style.marginLeft = '-100vw';
      introductionSpan[i].style.transition = `all ${i}s`;
    }
    animationBar(htmlBar,0);
    animationBar(cssBar,0);
    animationBar(bootstrapBar,0);
    animationBar(javaScriptBar,0);
  }else{
    introductionElement.style.opacity = 1;
    introductionElement.style.transition = 'opacity .5s';
    for(i = 0; i < 3; i++){
      introductionSpan[i].style.marginLeft = '1vw';
      introductionSpan[i].style.transition = `all ${i+1}s`;
    }
    setTimeout(function() {
    animationBar(htmlBar,50);
    animationBar(cssBar,50);
    animationBar(bootstrapBar,50);
    animationBar(javaScriptBar,50);
    }, 3000);
  }
}

function animationBar(element,value){
  for(i=0; i<=value; i++){
    element.style.transition = 'width 20s';
    element.setAttribute('style',`width: ${i}%`);
  }
  if(i>=50 && i<75){
    element.textContent = 'Intermediate';
  }
}


