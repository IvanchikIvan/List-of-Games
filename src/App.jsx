import React from "react";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import "./App.css"

const GAMESLIST= [
  {
    name: "The Witcher 3: Wild Hunt",
    category: "RPG",
    price: 29.99,
    date: "2023-05-15",
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nintendo.com%2Fen-gb%2FGames%2FNintendo-Switch-download-software%2FThe-Witcher-3-Wild-Hunt-1909183.html&psig=AOvVaw0tNHLK8ZiKxIcARI9yBLEj&ust=1713861418741000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCoxLq11YUDFQAAAAAdAAAAABAT'],
  },
  {
    name: "Grand Theft Auto V",
    category: "Action",
    price: 39.99,
    date: "2023-02-20",
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xbox.com%2Fru-RU%2Fgames%2Fgta-v&psig=AOvVaw1R5MgDPvOOGu3jxPLMZgha&ust=1713861400553000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIC9h7K11YUDFQAAAAAdAAAAABAE'],
  },
  {
    name: "Minecraft",
    category: "Adventure",
    price: 19.99,
    date: "2022-11-10",
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nintendo.com%2Fus%2Fstore%2Fproducts%2Fminecraft-deluxe-collection-switch%2F&psig=AOvVaw3pbTJoyD9ipCIBGsEBM5zu&ust=1713861306712000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjkiIi11YUDFQAAAAAdAAAAABAE'],
  },
  {
    name: "Red Dead Redemption 2",
    category: "Action",
    price: 49.99,
    date: "2023-08-30",
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.epicgames.com%2Fru%2Fp%2Fred-dead-redemption-2--ultimate-edition&psig=AOvVaw25h3vayStJPdz737bwnkrB&ust=1713861355414000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMD1y5y11YUDFQAAAAAdAAAAABAc'],
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    category: "Adventure",
    price: 59.99,
    date: "2022-12-15",
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nintendo.com%2Fus%2Fstore%2Fproducts%2Fthe-legend-of-zelda-breath-of-the-wild-switch%2F&psig=AOvVaw2kBD53mm6rXPpZ3rw_ZQks&ust=1713861450901000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMj4zcm11YUDFQAAAAAdAAAAABAE'],
  },
];

export default function App() {
  return (
    <main className="main">
      <FilterComponent games={GAMESLIST}/>
    </main>
  );
}
