import { Typography, Box } from "@mui/material";
import homeImage from "../../img/home.png";

const HomeImage: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        my: 2,
        width: "100%",
        height: 300,
        backgroundImage: `url(${homeImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: 70,
          fontWeight: "bold",
        }}
      >
        Good Game
      </Typography>
    </Box>
  );
};

export default HomeImage;
