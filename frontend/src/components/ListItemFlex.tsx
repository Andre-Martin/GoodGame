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
        borderBottom: "1px solid black",
      }}
    >
      {children}
    </ListItem>
  );
};

export default ListItemFlex;
