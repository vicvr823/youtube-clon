import {commentTemplate} from "/js/templates/comment.js";
import {commentData} from "/js/helpers/get-comment-data.js";

const handleRenderComments = () => {
  const commentsGrid = document.getElementById('comments-grid')

  if (!commentsGrid) return

  for (let i = 1; i <= 30; i++) {
    const element = document.createElement('article')
    const data = commentData()
    element.classList.add('comment', 'flex')
    element.innerHTML = commentTemplate(data)
    commentsGrid.appendChild(element)
  }
}

handleRenderComments()
