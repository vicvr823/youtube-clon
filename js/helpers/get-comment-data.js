import {getRandom} from "./random.js";

const comments = [
  'totalmente de acuerdo, cuando tengo reuniones en la tarde ya no puedo agarrar el Flow otra vez por lo que pierdo medio día de trabajo.',
  'Qué hace que un trabajador de cualquier rubro rinda mejor en su trabajo?',
  'muy buenos consejos para tenerlos en cuenta al momento de ser jefe de una empresa de desarrollo',
  'Confirmoooooooooo, me molesta muchisimo cuando en mi familia lo unico que saben hacer es interrumpirme y a veces ando bien elevado escribiendo logica compleja y ya no es lo mismo continuar luego 😔😔😔😔',
  'Victor muy interesante y muchas gracias por compartir la experiencia en tu proyecto',
  'Creo que es muy difícil determinar el rendimiento de los programadores. Pero se me ocurre que una buena medida sería la cantidad de soluciones creadas y la complejidad de los problemas resueltos. Por ejemplo, un buen programador podría aportar muchas soluciones a pequeños problemas o podría aportar pocas soluciones, pero a problemas muy grandes. Me encantan estos videos, creo que soy adicto jaja. Saludos desde Argentina.',
  'Saludos desde Puno, muy interesante el video',
  'y también como hacés cuando tus familiares te interrumpen con pedidos de ayuda en tareas de la casa?',
  'En mi trabajo solo debo cumplir con tooooodo lo que piden al mes ya veo yo como administro el tiempo y me encanta trabajar así. Siempre tengo tiempo para aprender nuevas cosas',
]

export const commentData= () => {
  return {
    avatar: `https://i.pravatar.cc/100?img=${getRandom(1, 70)}`,
    content: comments[getRandom(0, comments.length - 1)],
    likes: getRandom(0, 50),
  }
}
