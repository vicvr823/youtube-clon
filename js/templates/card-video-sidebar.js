export const cardVideoSidebar = (data) => `
    <a href="/video.html"
    class="cover">
    <img class="image"
      src=${data.cover}>
      <time class="time">${data.time}</time>
  </a>
  <div class="content">
      <h3 class="title rows-text-2">
        <a href="/video.html">#Vida de un desarrollador front-end 🐞</a>
      </h3>
      <a href="#">Victor Valencia</a>
      <p class="video-information">
        <span class="views">${data.views} visualizaciones</span>
        <span>Hace 2 horas</span>
      </p>
    </div>
  `
