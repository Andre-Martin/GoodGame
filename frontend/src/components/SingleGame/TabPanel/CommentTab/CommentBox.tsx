import { Grid, Paper, Avatar, Typography } from "@mui/material";

import userIcon from "../../../../img/usericon.png";
import type { SingleGameComment } from "../../../../utils/types";

const CommentBox = ({ rating, value, username }: SingleGameComment) => {
  let ratingColor: string;
  if (rating == "N/A") {
    ratingColor = "primary.main";
  } else if (+rating > 7) {
    ratingColor = "success.main";
  } else if (+rating > 5) {
    ratingColor = "warning.main";
  } else {
    ratingColor = "error.main";
  }

  return (
    <Paper style={{ padding: "40px 20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Avatar
            alt={username + " icon"}
            src={userIcon}
            sx={{ display: "block", mx: "auto" }}
          />
        </Grid>
        <Grid item xs={8} justifyContent="left">
          <Typography color="blue">{username}</Typography>
          <Typography>{value}</Typography>
        </Grid>
        <Grid item xs={2} justifyContent="center">
          <Typography
            variant="caption"
            sx={{
              p: 3,
              bgcolor: ratingColor,
              borderRadius: 10,
              fontWeight: "bold",
            }}
          >
            {rating}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentBox;
