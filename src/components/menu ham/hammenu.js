import './hammenu.css'
const menuham = document.querySelector('.menuham')
export const createMenuHam = () => {
  const menuham = document.querySelector('.menuham')
  const hams = ['User', 'Notifications', 'Settings', 'Log out', 'FAQ']
  const navHam = document.createElement('nav')
  navHam.classList.add('navHam')
  const ulHam = document.createElement('ul')
  ulHam.classList.add('ulHam')
  for (const item of hams) {
    const li = document.createElement('li')
    li.textContent = item
    ulHam.appendChild(li)
    navHam.appendChild(ulHam)
  }
  menuham.appendChild(navHam)
}
const botonHam = document.createElement('img')
botonHam.classList.add('botonHam')
botonHam.classList.add('botonOpacity')
botonHam.src =
  'https://res.cloudinary.com/dj1axfhui/image/upload/v1710446966/barra-de-menus_wk9oco.png'
document.body.appendChild(botonHam)
botonHam.addEventListener('click', () => {
  menuham.classList.toggle('menuham')
})
