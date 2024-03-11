const link = document.querySelectorAll('a');
const menu = document.querySelector('.menu');
const tab = document.querySelectorAll('.tab')

menu.addEventListener('click', (e)=> {
  e.preventDefault();
  let target = e.target;
 
  for (let i = 0; i < link.length; i++) {
    link[i].classList.remove('active');
    target.classList.add("active");

    tab[i].classList.remove('active');

    if (link[i].classList.contains('active')) {
        tab[i].classList.add('active');
    }
  }
})