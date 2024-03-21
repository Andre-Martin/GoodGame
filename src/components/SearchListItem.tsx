import { Link } from "react-router-dom";
import ROUTES from "../utils/ROUTES";

export type Props = {
  id: number;
  year: number;
  name: string;
  number?: number;
};

export const SearchListItem = ({ id, year, name, number }: Props) => {
  return (
    <Link to={ROUTES.boardGameItem + id}>
      <p>{number}</p>
      <p>{year}</p>
      <p>{name}</p>
    </Link>
  );
};
