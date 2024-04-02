import { Grid, Paper, Avatar, Typography } from "@mui/material";

import userIcon from "../img/usericon.png";

import type { SingleGameComment } from "../utils/types";

const CommentBox = ({ rating, value, username }: SingleGameComment) => {
  let ratingColor: string;
  if (rating == "N/A") {
    ratingColor = "bg-secondary";
  } else if (+rating > 7) {
    ratingColor = "bg-success";
  } else if (+rating > 5) {
    ratingColor = "bg-warning";
  } else {
    ratingColor = "bg-danger";
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
          <span className={`${ratingColor} p-3 rounded`}>{rating}</span>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentBox;
