import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { fetchSearchIDs } from "../features/slices/searchSlice";

import ROUTES from "../utils/ROUTES";

function Home() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (!name.trim()) return;

    dispatch(fetchSearchIDs(name));
    navigate(`${ROUTES.search}:${name}`, { replace: true });
  };

  return (
    <>
      <main>
        <div className="main-img">
          <p>Good Game</p>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-5 mx-auto shadow-lg p-4 rounded">
          <div className="input-group mb-3">
            <input
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              placeholder="Quick Search"
              value={name}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleSubmit}
            >
              Enter
            </button>
          </div>

          <button className="btn btn-outline-secondary w-100">
            Advanced Search
          </button>
          <button className="btn btn-outline-secondary w-100">
            <Link className="text-decoration-none" to={ROUTES.chat}>
              ASK GG
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
