import { button } from '../buttons/buttons'
import './header.css'

export const createHeader = () => {
  const headerSearch = document.querySelector('header')
  const title = document.createElement('h1')
  title.textContent = 'iPixel'
  const divButtons = document.createElement('div')
  divButtons.classList.add('divButtons')
  divButtons.innerHTML = `${button('Create')}${button('Explore')}`
  const formSearch = document.createElement('form')
  formSearch.action = ''
  formSearch.classList.add('form-search')
  const inputSearch = document.createElement('input')
  inputSearch.type = 'text'
  inputSearch.placeholder = 'Searching..'
  inputSearch.classList.add('search-bar')
  const buttonSearch = document.createElement('button')
  buttonSearch.textContent = 'PIXEL IT!'

  const nav = document.createElement('nav')
  const navList = [
    'https://res.cloudinary.com/dj1axfhui/image/upload/v1710325811/usuario-de-perfil_pnzpml.png',
    'https://res.cloudinary.com/dj1axfhui/image/upload/v1710325811/notificacion_sdjgwu.png',
    'https://res.cloudinary.com/dj1axfhui/image/upload/v1710325810/bocadillo-de-dialogo-con-texto_ddkute.png'
  ]

  for (const itemList of navList) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const img = document.createElement('img')

    a.href = '#'
    img.src = itemList
    img.alt = 'Navigation Image'

    a.appendChild(img)

    li.appendChild(a)

    nav.appendChild(li)
  }

  formSearch.appendChild(inputSearch)
  formSearch.appendChild(buttonSearch)
  headerSearch.appendChild(title)
  headerSearch.appendChild(divButtons)
  headerSearch.appendChild(formSearch)
  headerSearch.appendChild(nav)

  return { inputSearch, formSearch, title }
}
