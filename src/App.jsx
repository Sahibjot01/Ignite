import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gamesActions";

function App() {
  const dispatch = useDispatch();
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <div>
      <h1>Games</h1>
      <div>
        <h2>Popular Games</h2>
        <ul>
          {popular && popular.map((game) => <li key={game.id}>{game.name}</li>)}
        </ul>
      </div>
      <div>
        <h2>Upcoming Games</h2>
        <ul>
          {upcoming &&
            upcoming.map((game) => <li key={game.id}>{game.name}</li>)}
        </ul>
      </div>
      <div>
        <h2>New Games</h2>
        <ul>
          {newGames &&
            newGames.map((game) => <li key={game.id}>{game.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
