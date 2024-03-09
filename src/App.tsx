import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import GameList from "./pages/GameList";
import SingleGame from "./pages/SingleGame";
import Footer from "./components/Footer";

import { HOME, BOARDGAME_LIST, CHAT, BOARDGAME_ITEM } from "./utils/ROUTES";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CHAT} element={<Chat />} />
          <Route path={BOARDGAME_LIST} element={<GameList />} />
          <Route path={`${BOARDGAME_ITEM}:id`} element={<SingleGame />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
