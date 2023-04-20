/*Barra de progresso de scroll*/
const progressBar = document.querySelector('#progress-bar')

const main = document.querySelector('main')


const animateProgressBar = () => {
    let scrollMouse = -main.getBoundingClientRect().top;

    let progressWidth = (scrollMouse / (main.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100 ;
    
    let value = Math.floor(progressWidth)
    console.log(value)

    progressBar.style.width = value + "%" // 33%

    if( value < 0 ) {
        progressBar.style.width = '0%'
    }
}

window.addEventListener('scroll', animateProgressBar)
animateProgressBar()

/*Animacao de scroll da pagina*/

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  } 



