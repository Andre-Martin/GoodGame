import { Link } from "react-router-dom";

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import ROUTES from "../../utils/ROUTES";
import type { HotItemInfo } from "../../utils/types";

const HotListItem = ({ rank, title, year, id, thumbnail }: HotItemInfo) => {
  return (
    <Grid item xs={6} md={4} lg={3}>
      <Link to={`${ROUTES.boardGameItem}${id}`}>
        <Card>
          <CardMedia
            component="img"
            image={thumbnail}
            alt={title}
            sx={{ height: 250 }}
          />
          <CardContent>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {rank + " - "}
            </Typography>
            <Typography
              component="span"
              color="info.main"
              className="hoverText"
            >
              {title + " "}
            </Typography>
            <Typography component="sup" color="secondary.main">
              ({year ? year : "N/A"})
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default HotListItem;
