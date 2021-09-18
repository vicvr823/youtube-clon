import {cardVideo} from "/js/templates/card-video.js";
import {cardVideoSidebar} from "/js/templates/card-video-sidebar.js";
import {cardData} from "/js/helpers/get-card-data.js";

const handleRenderCards = () => {
  // Grid de cards
  const cardsGrid = document.getElementById('card-grid')

  // Si no detecta el grid, detiene la el script
  if (!cardsGrid) return

  // Valida si el grid se encuentra en el sidebar
  // Shavos, no validen así las cosas, no es la mejor manera
  // Pero es un curso de HTML y CSS, no le den mucha importancia
  const inSidebar = cardsGrid.classList.contains('cards-sidebar')

  // Agregamos 30 cards
  // ¿Por qué 30? Nada más
  for (let i = 1; i <= 30; i++) {
    const element = document.createElement('article')
    const data = cardData()
    element.classList.add('card-video')

    // Clase que se agrega si se renderiza en el sidebar
    if (inSidebar) element.classList.add('in-sidebar')

    // Validamos qué tipo de card vamos a agregar
    element.innerHTML = inSidebar ? cardVideoSidebar(data) : cardVideo(data)

    cardsGrid.appendChild(element)
  }
}

handleRenderCards()
