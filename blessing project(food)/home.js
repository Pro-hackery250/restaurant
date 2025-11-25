const menu = document.getElementById('menu');

window.addEventListener('scroll', () =>{
    if(scrollY > 400){
        menu.classList.add('scrolled')
    }
    else{
        menu.classList.remove('scrolled');
    }
});
const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

window.addEventListener('load', () =>{
    setTimeout(() => {
        mark.style.width = '100%';
        mark.style.transition = '.5s ease';
        mark.style.backgroundColor = 'rgb(50, 245, 99)';
    }, 2000);
})


