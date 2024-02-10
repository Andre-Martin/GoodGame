import { Button } from "@mui/material";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Did you know playing board games is effective for learning purpose?
        </h2>
        <div className={styles.btn_group}>
          <Button variant="contained">
            <Link to="/chat">YES!</Link>
          </Button>
          <Button variant="contained">NOT SURE</Button>
        </div>
      </main>
    </>
  );
}

export default Home;
