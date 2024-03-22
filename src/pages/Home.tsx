import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ROUTES from "../utils/ROUTES";

interface KeyboardEvent {
  key: string;
}

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (!name.trim()) return;

    navigate(`${ROUTES.search}?name=${name}&page=1`, { replace: true });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
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
              onKeyDown={handleKeyDown}
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
};

export default Home;
