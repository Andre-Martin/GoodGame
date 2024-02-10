import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.flex + " container"}>
          <Link className={styles.logo} to="/">
            BoardEdu
          </Link>

          <Button variant="contained">
            <Link className={styles.login} to="/login">
              Log In
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
