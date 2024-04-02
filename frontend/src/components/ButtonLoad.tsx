import { Button } from "@mui/material";

type Props = {
  total: number;
  current: number;
  onClick: () => void;
};

const ButtonLoad = ({ total, current, onClick }: Props) => {
  return total > current ? (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{ display: "block", mx: "auto", my: 3 }}
    >
      Load More
    </Button>
  ) : null;
};

export default ButtonLoad;
