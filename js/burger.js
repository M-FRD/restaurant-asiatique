const BURGER_MENU = document.querySelector('.burger-menu')
const MAIN_NAV = document.querySelector('.main-ul')

const cursor = document.querySelector('.cursor')

const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')

BURGER_MENU.addEventListener('mouseover',()=>{
  b1.classList.add('active')
  b2.classList.add('active')
})
BURGER_MENU.addEventListener('mouseleave',()=>{
  b1.classList.remove('active')
  b2.classList.remove('active')
})
BURGER_MENU.addEventListener('click',()=>{
  BURGER_MENU.classList.toggle('active')
  MAIN_NAV.classList.toggle('active')

})

document.addEventListener('mousemove',(e)=> {
  cursor.setAttribute('style', `top : ${e.clientY}px; left : ${e.clientX}px;`)
})
document.addEventListener('click',()=> {
  cursor.classList.add('active')
  setTimeout(() => {
    cursor.classList.remove('active')
  }, 300);
})