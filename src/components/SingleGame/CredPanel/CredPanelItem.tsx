import { ListItem, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  title: string;
  arr: string[];
}

const CredPanelItem = ({ title, arr }: Props) => {
  const [currentItems, setCurrentItems] = useState<number>(3);

  const showAllItems = () => {
    setCurrentItems(arr.length);
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Typography color="info.main">{`${title}: `}</Typography>
      <Typography sx={{ fontWeight: "light" }}>
        {arr.length === 0
          ? " None"
          : arr.slice(0, currentItems).map((item) => (
              <span key={item} className="hoverText">
                {item + ",  "}
              </span>
            ))}
        <Typography
          component="span"
          onClick={showAllItems}
          className="hoverText"
        >
          {arr.length > currentItems ? ` +${arr.length - 3} more` : null}
        </Typography>
      </Typography>
    </ListItem>
  );
};

export default CredPanelItem;
