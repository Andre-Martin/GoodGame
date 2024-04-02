import { ListItem } from "@mui/material";
type Props = {
  children?: React.ReactNode;
};
const ListItemFlex = ({ children }: Props) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </ListItem>
  );
};

export default ListItemFlex;
