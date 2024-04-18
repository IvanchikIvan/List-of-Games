import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import GameList from "../GameList/GameList";

export default function FilterableGameList({ games = [] }) {
  const [filterText, setFilterText] = useState("");
  const [inWhishListOnly, setInWhishListOnly] = useState(false);

  return (
    <div className="filterable-game-list">
      <SearchBar
        filterText={filterText}
        inWhishListOnly={inWhishListOnly}
        onFilterTextChange={setFilterText}
        oninWhishListOnlyChange={setInWhishListOnly}
      />
      <GameList
        games={games}
        filterText={filterText}
        inWhishListOnly={inWhishListOnly}
      />
    </div>
  );
}