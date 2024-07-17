import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gamesActions";

function App() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.games);
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <>
      <h1>Popular Games</h1>
      <ul>
        {popular.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
