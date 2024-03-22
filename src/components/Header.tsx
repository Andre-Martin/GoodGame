import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import ROUTES from "../utils/ROUTES";

interface KeyboardEvent {
  key: string;
  preventDefault: () => void;
}

interface SubmitEvent {
  preventDefault: () => void;
}

const Header = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    console.log(name);
    navigate(`${ROUTES.search}?name=${name}&page=1`, { replace: true });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={ROUTES.home}>
            Good Game
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={ROUTES.home}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={ROUTES.boardGameList}>
                  BoardGame List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={ROUTES.chat}>
                  CHAT GG
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
                value={name}
              />
              <button
                className="btn btn-secondary my-2 my-sm-0"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
