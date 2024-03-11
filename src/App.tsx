import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import GameList from "./pages/GameList";
import SingleGame from "./pages/SingleGame";
import Footer from "./components/Footer";

import ROUTES from "./utils/ROUTES";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.chat} element={<Chat />} />
          <Route path={ROUTES.boardGameList} element={<GameList />} />
          <Route path={`${ROUTES.boardGameItem}:id`} element={<SingleGame />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
