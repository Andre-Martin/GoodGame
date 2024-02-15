import { Button, Typography, Card, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <Card
          variant="outlined"
          sx={{ bgcolor: "info.main", p: 3, mt: "150px", color: "white" }}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Did you know playing board games is effective for learning purpose?
          </Typography>
          <Box sx={{ my: 3 }}>
            <Button variant="contained">
              <Link to="/chat">
                <Typography color="white">YES! </Typography>
              </Link>
            </Button>
            <Button variant="contained" sx={{ ml: 3 }}>
              <Typography color="white">NOT SURE</Typography>
            </Button>
          </Box>
        </Card>
      </main>
    </>
  );
}

export default Home;
