import { useState } from "react";
import { uid } from "uid";
import { useAppSelector } from "../features/hooks/redux.hooks";
import { List, ListItem } from "@mui/material";

const MarketplaceTab = () => {
  const { marketplace, title } = useAppSelector(
    (state) => state.boardgame.boardgameInfo
  );

  const [currentItems, setCurrentItems] = useState<number>(10);

  const loadItems = () => {
    setCurrentItems((currentItems) => (currentItems += 10));
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
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
      {marketplace.length > currentItems ? (
        <button
          onClick={loadItems}
          className="btn btn-outline-primary d-block mx-auto my-3"
        >
          Load More
        </button>
      ) : null}
    </List>
  );
};

export default MarketplaceTab;
