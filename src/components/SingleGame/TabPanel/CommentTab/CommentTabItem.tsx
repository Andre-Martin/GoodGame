import { Grid, Paper, Avatar, Typography } from "@mui/material";

import userIcon from "../../../../img/usericon.png";
import type { SingleGameComment } from "../../../../utils/types";
import RatingIcon from "../../../RatingIcon";

const CommentTabItem = ({ rating, value, username }: SingleGameComment) => {
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
          <Typography variant="h5" color="info.main" className="hoverText">
            {username}
          </Typography>
          <Typography>{value}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RatingIcon rating={rating} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentTabItem;
