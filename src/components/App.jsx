import { Routes, Route } from "react-router";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Chat from "../pages/Chat/Chat.jsx";
import Home from "../pages/Home/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
