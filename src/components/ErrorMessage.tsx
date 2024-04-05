import { Box } from "@mui/material";
import error from "../img/error.gif";

const ErrorMessage: React.FC = () => {
  return (
    <Box
      component="img"
      src={error}
      alt="error gif"
      sx={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contain",
        margin: "0 auto",
      }}
    />
  );
};

export default ErrorMessage;
