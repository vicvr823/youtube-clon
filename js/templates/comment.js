export const commentTemplate = (data) => `
<div class="user-avatar">
    <img
        class="image"
        src=${data.avatar}
        alt="Avatar de usuario"
    >
  </div>
  <div class="content">
    <header class="header">
      <a href="#"
          class="name"><b>Ismael Cruz</b></a>
      <time class="time">Hace una semana</time>
    </header>
    <p class="text rows-text-4">${data.content}</p>
    <footer class="buttons-container">
      <button class="action-button has-text"
          data-tooltip="Me gusta">
        <span class="icon icon-like-video"></span>
        <span class="text">${data.likes}</span>
      </button>
      <button class="action-button has-text"
          data-tooltip="No me gusta">
        <span class="icon icon-dislike-video"></span>
      </button>
      <button class="button link">Responder</button>
    </footer>
  </div>
`
