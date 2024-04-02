import { Typography } from "@mui/material";

type Props = {
  content: string;
  array: any[];
};
const TextNotFound = ({ content, array }: Props) => {
  return array.length === 0 ? (
    <Typography sx={{ color: "blue", textAlign: "center", p: 5 }}>
      {content}
    </Typography>
  ) : null;
};

export default TextNotFound;
