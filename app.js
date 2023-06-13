let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top = '-100vh'
      },2300);
    })
  })

  /* dark mode */   
  var content = document.getElementsByTagName('body')[0];
  var darkMode = document.getElementById('dark-change');
  darkMode.addEventListener('click', function(){
  darkMode.classList.toggle('active');
  content.classList.toggle('night');
})

/** scrolldown */

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

/** reveal element effects */
  function revealElementsOnScroll() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach((element) => {
      if (
        isElementInViewport(element) &&
        !element.classList.contains('show')
      ) {
        element.classList.add('show');
      } else if (
        !isElementInViewport(element) &&
        element.classList.contains('show')
      ) {
        element.classList.remove('show');
      }
    });
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', revealElementsOnScroll);
  window.addEventListener('DOMContentLoaded', revealElementsOnScroll);

