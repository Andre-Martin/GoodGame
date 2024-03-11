import { Link } from "react-router-dom";

import ROUTES from "../utils/ROUTES";

function Home() {
  return (
    <>
      <main>
        <div className="main-img">
          <p>Good Game</p>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-5 mx-auto shadow-lg p-4 rounded">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Quick Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
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