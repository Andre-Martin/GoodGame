import { Routes, Route } from "react-router";

import { Container } from "@mui/material";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Chat from "../pages/Chat/Chat.jsx";
import Home from "../pages/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
