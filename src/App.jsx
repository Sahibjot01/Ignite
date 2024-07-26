//component and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
