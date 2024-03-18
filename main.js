import './style.css'

import { createHeader } from './src/components/header/header'
import { createMenuHam } from './src/components/menu ham/hammenu'
const { inputSearch, formSearch, title } = createHeader() //
const galleryContainer = document.querySelector('#app')
let keyword = '' //?Declaro keyword con un valor vacío con el objetivo de ser utilizado en la funcion searchImages al igual que page y accesKey
let page = 1
const accessKey = 'ak1oRVZGKimT051SmIqRWi7V1O5bAhblvLxAqUgQqJA'
async function searchImages() {
  keyword = inputSearch.value
  const url = keyword
    ? `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=20`
    : `https://api.unsplash.com/photos?page=${page}&client_id=${accessKey}&per_page=20`
  //!Keyword se apropia de la información introducida en el input por el usuario, y construyo una url en base a ello.
  //!Si tiene keyword es decir, el usuario ha introducido algo para buscar, entonces utilizaremos esta url si no, una por defecto.
  const response = await fetch(url)
  const data = await response.json()
  // Fetcheo la url declarada, que me la devuelve como data al json.
  console.log(data)
  if (page === 1) {
    galleryContainer.innerHTML = ''
  }

  //que no se acumulen los resultados

  const results = data.results || data //Asignamos a result los datos extraidos de la API, si es data.results son los filtrados/buscados si no por defecto.
  if (results.length === 0) {
    galleryContainer.innerHTML = `<p class="messageError">No matches found.</p>`
  }
  results.forEach((result) => {
    const img = document.createElement('img')
    img.src = result.urls.small
    const imgLink = document.createElement('a')
    imgLink.href = result.links.html
    imgLink.target = '_blank'
    imgLink.appendChild(img)
    galleryContainer.appendChild(imgLink)
  })
}
formSearch.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  searchImages()
})
window.addEventListener('load', () => {
  page = 1
  searchImages()
})

title.addEventListener('click', () => {
  const baseURL = import.meta.env.BASE_URL //!Esto sirve cuando no tienes una url fija.
  window.location.href = baseURL
})
function detectEndOfPage() {
  //Esto sirve para dar funcionalidad al scroll.
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  return scrollTop + clientHeight >= scrollHeight - 5 // Consideramos que el usuario ha llegado al final si está a 5px de distancia del final
}

async function loadMoreImages() {
  //Usamos esta función asyncrona ya que si estamos a 5 px del final recargamos una pagina y llamos al searchimages. al ser fetch await.
  if (detectEndOfPage()) {
    page++
    await searchImages()
  }
}
window.addEventListener('scroll', () => {
  loadMoreImages()
})
createMenuHam()
