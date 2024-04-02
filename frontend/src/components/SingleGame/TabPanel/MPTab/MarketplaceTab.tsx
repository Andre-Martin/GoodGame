import { useState } from "react";
import { useAppSelector } from "../../../../features/hooks/redux.hooks";

import { uid } from "uid";

import { List, ListItem } from "@mui/material";

import ButtonLoad from "../../../ButtonLoad";
import TextNotFound from "../../../TextNotFound";

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
      {
        <List>
          {marketplace.slice(0, currentItems).map((item) => (
            <ListItem
              key={uid()}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <span className="p-4">
                {`${item.price.currency} ${item.price.value}`}
              </span>
              <a href={item.link.href}>{title}</a>
              <span>{item.date}</span>
            </ListItem>
          ))}
          <ButtonLoad
            total={marketplace.length}
            current={currentItems}
            onClick={loadItems}
          />
        </List>
      }
    </>
  );
};

export default MarketplaceTab;
