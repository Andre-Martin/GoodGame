import { Typography, TableRow, TableCell } from "@mui/material";

import type { SingleGameMPItem } from "../../../../utils/types";

interface Props extends SingleGameMPItem {
  title: string;
}

const MarketPlaceTabItem = ({
  title,
  link: { href },
  date,
  price: { currency, value },
  condition,
  notes,
}: Props) => {
  return (
    <TableRow>
      <TableCell>
        <Typography component="a" href={href} className="hoverText">
          {title}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{condition}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{`${currency} ${value}`}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{date}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default MarketPlaceTabItem;
