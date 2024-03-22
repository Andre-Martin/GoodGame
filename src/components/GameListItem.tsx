import { Link } from "react-router-dom";
import ROUTES from "../utils/ROUTES";
import { BggData } from "../utils/types";
import { clearText } from "../utils/common";

const GameListItem = ({
  number,
  description,
  name,
  year,
  id,
  img,
  thumbnail,
}: BggData) => {
  return (
    <tr className="row">
      <td className="col-md-1">{number}</td>
      <td className="col-xs-12 col-md-4 col-lg-2">
        <Link to={`${ROUTES.boardGameItem}${id}`}>
          <img src={thumbnail} alt="" className="table-img_block" />
        </Link>
      </td>
      <td className="col-xs-12 col-md-7 col-lg-9">
        <div className="table-description">
          <div className="description-header">
            <p className="description-header__title">
              <Link to={ROUTES.boardGameItem + id}>{name}</Link>
            </p>
            <p className="description-header__year">({year})</p>
          </div>
          <div className="card-body">{clearText(description.slice(0, 222))}</div>
        </div>
      </td>
    </tr>
  );
};

export default GameListItem;
