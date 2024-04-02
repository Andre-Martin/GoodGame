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
    <ListItem sx={{ display: "flex", alignItems: "start" }}>
      <Typography color="green">{`${title}: `}</Typography>
      <Typography sx={{ fontWeight: "light" }}>
        {arr.length !== 0 ? arr.slice(0, currentItems).join(", ") : " None"}
        <span onClick={showAllItems}>
          {arr.length > currentItems ? ` +${arr.length - 3} more` : null}
        </span>
      </Typography>
    </ListItem>
  );
};

export default CredPanelItem;
