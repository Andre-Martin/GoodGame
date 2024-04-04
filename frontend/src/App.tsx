import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import { Container } from "@mui/material";

import { Header, Footer } from "./components/App";
import Spinner from "./components/Spinner";

import ROUTES from "./utils/ROUTES";

const Home = lazy(() => import("./pages/Home"));
const HotBGList = lazy(() => import("./pages/HotList"));
const SearchBGList = lazy(() => import("./pages/SearchBGList"));
const SingleGame = lazy(() => import("./pages/SingleGame"));
const Page404 = lazy(() => import("./pages/Page404"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Container
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Header />
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.boardGameList} element={<HotBGList />} />
            <Route
              path={`${ROUTES.boardGameItem}:id`}
              element={<SingleGame />}
            />
            <Route path={`${ROUTES.search}`} element={<SearchBGList />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </Container>
      </Suspense>
    </>
  );
}

export default App;
