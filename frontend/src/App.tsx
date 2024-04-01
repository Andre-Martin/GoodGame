import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import Header from "../frontend/components/Header";
import Footer from "../frontend/components/Footer";
import Spinner from "../frontend/components/Spinner";

import ROUTES from "./utils/ROUTES";

const Home = lazy(() => import("./pages/Home"));
const HotBGList = lazy(() => import("./pages/HotBGList"));
const SearchBGList = lazy(() => import("./pages/SearchBGList"));
const Chat = lazy(() => import("./pages/Chat"));
const SingleGame = lazy(() => import("./pages/SingleGame"));
const Page404 = lazy(() => import("./pages/Page404"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="container">
          <Header />
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.chat} element={<Chat />} />
            <Route path={ROUTES.boardGameList} element={<HotBGList />} />
            <Route
              path={`${ROUTES.boardGameItem}:id`}
              element={<SingleGame />}
            />
            <Route path={`${ROUTES.search}`} element={<SearchBGList />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
