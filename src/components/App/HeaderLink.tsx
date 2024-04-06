import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  route: string;
  title: string;
  styles?: object;
}

const HeaderLink = ({ title, route, styles }: Props) => {
  return (
    <NavLink to={route}>
      <Typography
        sx={{
          m: 2,
          color: "black",
          textAlign: "center",
          ...styles,
        }}
      >
        {title}
      </Typography>
    </NavLink>
  );
};

export default HeaderLink;
