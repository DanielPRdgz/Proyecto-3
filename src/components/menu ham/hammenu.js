import './hammenu.css'
const menuham = document.querySelector('.menuham')
const quit = document.createElement('img')
quit.src =
  'https://res.cloudinary.com/dj1axfhui/image/upload/v1710496353/marca-de-la-cruz_pzohdu.png'
quit.classList.add('quitButton')
export const createMenuHam = () => {
  const menuham = document.querySelector('.menuham')
  const hams = ['User', 'Notifications', 'Settings', 'Log out', 'FAQ']
  const navHam = document.createElement('nav')
  navHam.classList.add('navHam')
  const ulHam = document.createElement('ul')
  ulHam.classList.add('ulHam')
  for (const item of hams) {
    const a = document.createElement('a')
    a.href = '#'
    const li = document.createElement('li')
    li.textContent = item
    a.appendChild(li)
    ulHam.appendChild(a)
    navHam.appendChild(ulHam)
  }
  menuham.appendChild(quit)
  menuham.appendChild(navHam)
}
const botonHam = document.createElement('img')
botonHam.classList.add('botonHam')

botonHam.src =
  'https://res.cloudinary.com/dj1axfhui/image/upload/v1710446966/barra-de-menus_wk9oco.png'
document.body.appendChild(botonHam)
botonHam.addEventListener('click', () => {
  menuham.classList.toggle('visible')
  botonHam.classList.remove('botonHam')
})

quit.addEventListener('click', () => {
  menuham.classList.remove('visible')
  botonHam.classList.toggle('botonHam')
})
