import { useState } from "react";
import type { IMovieContext } from "./movie.context.props";
import type{ IItem } from "../../types/item";

const INIT_DATA: IItem[] = [
  { id: 1, name: "Black Widow", rating: 324, favorite: false, image: "../public/cardlist/card-imgs/Black Widow.png" },
  { id: 2, name: "Shang Chi", rating: 124, favorite: false, image: "../public/cardlist/card-imgs/Shang Chi.png" },
  { id: 3, name: "Loki", rating: 234, favorite: false, image: "../public/cardlist/card-imgs/Loki.png" },
  { id: 4, name: "How I Met Your Mother", rating: 123, favorite: false, image: "../public/cardlist/card-imgs/How I Met Your Mother.png" },
  { id: 5, name: "Money Heist", rating: 8125, favorite: true, image: "../public/cardlist/card-imgs/Money Heist.png" },
  { id: 6, name: "Friends", rating: 123, favorite: false, image: "../public/cardlist/card-imgs/Friends.png" },
  { id: 7, name: "The Big Bang Theory", rating: 12, favorite: false, image: "../public/cardlist/card-imgs/The Big Bang Theory.png" },
  { id: 8, name: "Two And a Half Men", rating: 12, favorite: false, image: "../public/cardlist/card-imgs/Two And a Half Men.png" }
];

export function useMovieProvider(): IMovieContext {
  const [cardItems, setCardItems] = useState<IItem[]>(INIT_DATA);

  const filterItems = (itemName: string) => {
    setCardItems((oldItems) =>
      oldItems.filter((i) => i.name.toLowerCase() === itemName.toLowerCase())
    );
  };

  const findByIndex = (id: number): IItem | undefined =>
    cardItems.find((item) => item.id === id);

  const getFavorites = (): IItem[] =>
    cardItems.filter((item) => item.favorite);

  const reset = () => {
    setCardItems([...INIT_DATA]);
  };

  return { items: cardItems, filterItems, findByIndex, getFavorites, reset };
}
