export default function GameRow({ game = {} }) {
  return (
    <li className="game__row"> 
      <span className="game__name">{game.name}</span>
      { game.inWishList && <span className="game-in-whish-list">В желаемом</span> }
      <span className="game__price">{game.price}</span>
    </li>
  );
}