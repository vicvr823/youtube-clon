import {getRandom} from "./random.js";

export const cardData = () => {
  return {
    cover: `https://picsum.photos/id/${getRandom(1, 70)}/520/300`,
    avatar: `https://i.pravatar.cc/100?img=${getRandom(1, 70)}`,
    time: `${getRandom(0, 60)}:${getRandom(10, 60)}`,
    views: `${getRandom(1, 100)}.${getRandom(100, 999)}`,
  }
}
