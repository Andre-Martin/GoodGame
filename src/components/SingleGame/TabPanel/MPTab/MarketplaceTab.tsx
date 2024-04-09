import { useState } from "react";
import { useAppSelector } from "../../../../features/hooks/redux.hooks";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from "@mui/material";
import MarketPlaceTabItem from "./MarketPlaceTabItem";

import ButtonLoad from "../../../ButtonLoad";
import TextNotFound from "../../../TextNotFound";

import type { SingleGameMPItem } from "../../../../utils/types";

const MarketplaceTab = () => {
  const { marketplace, title } = useAppSelector(
    (state) => state.boardgame.boardgameInfo
  );

  const [currentItems, setCurrentItems] = useState<number>(5);

  const loadItems = () => {
    setCurrentItems((currentItems) => (currentItems += 5));
  };

  return (
    <>
      <TextNotFound
        content="There is no one selling this boardgame at this time"
        array={marketplace}
      />
      {marketplace.length > 0 && (
        <Table sx={{ p: 4 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Title</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontWeight="bold">Condition</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontWeight="bold"> Price</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontWeight="bold">Published</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {marketplace
              .slice(0, currentItems)
              .map((item: SingleGameMPItem) => (
                <MarketPlaceTabItem {...item} title={title} key={item.date} />
              ))}
          </TableBody>
        </Table>
      )}
      <ButtonLoad
        total={marketplace.length}
        current={currentItems}
        onClick={loadItems}
      />
    </>
  );
};

export default MarketplaceTab;
