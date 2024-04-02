import { Link } from "react-router-dom";

import { Card, CardContent, CardMedia, Grid } from "@mui/material";

import ROUTES from "../../utils/ROUTES";
import type { Top50Info } from "../../utils/types";

const HotListItem = ({ rank, title, year, id, thumbnail }: Top50Info) => {
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
            {rank} - {title} ({year})
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default HotListItem;
