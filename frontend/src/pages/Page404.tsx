import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import ErrorMessage from "../reusableComponents/ErrorMessage";
import ROUTES from "../utils/ROUTES";

type Props = {
  message?: string;
};

const Page404 = ({ message }: Props) => {
  return (
    <Box sx={{ m: 4 }}>
      <ErrorMessage />
      <Typography textAlign="center">
        {message ? message : "The page doesn't exist."}
        <Link className="text-info" to={ROUTES.home}>
          Back to Main Page
        </Link>
      </Typography>
    </Box>
  );
};

export default Page404;
