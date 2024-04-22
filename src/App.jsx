import React from "react";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import "./App.css"

const GAMESLIST= [
  {
    name: "The Witcher 3: Wild Hunt",
    category: "RPG",
    price: 29.99,
    date: "2023-05-15",
    images: [],
  },
  {
    name: "Grand Theft Auto V",
    category: "Action",
    price: 39.99,
    date: "2023-02-20",
    images: [],
  },
  {
    name: "Minecraft",
    category: "Adventure",
    price: 19.99,
    date: "2022-11-10",
    images: [],
  },
  {
    name: "Red Dead Redemption 2",
    category: "Action",
    price: 49.99,
    date: "2023-08-30",
    images: [],
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    category: "Adventure",
    price: 59.99,
    date: "2022-12-15",
    images: [],
  },
];

export default function App() {
  return (
    <main className="main">
      <FilterComponent games={GAMESLIST}/>
    </main>
  );
}
