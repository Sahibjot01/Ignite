import { popularGamesURL } from "./api";
function App() {
  console.log(popularGamesURL());
  return (
    <>
      <h1>{popularGamesURL()}</h1>
    </>
  );
}

export default App;
