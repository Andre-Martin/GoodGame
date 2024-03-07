import { Link } from "react-router-dom";
import { BOARDGAME_ITEM } from "../utils/ROUTES";
import { GameListItemsProps } from "../utils/types";

const GameListItem = ({
  number,
  description,
  title,
  year,
  id,
}: GameListItemsProps) => {
  return (
    <tr className="row">
      <td className="col-md-1">{number}</td>
      <td className="col-xs-12 col-md-4 col-lg-2">
        <Link to={`${BOARDGAME_ITEM}${number}`}>
          <img
            src={`/src/img/gameImg${number}.png`}
            alt=""
            className="table-img_block"
          />
        </Link>
      </td>
      <td className="col-xs-12 col-md-7 col-lg-9">
        <div className="table-description">
          <div className="description-header">
            <p className="description-header__title">
              <Link to={BOARDGAME_ITEM + id}>{title}</Link>
            </p>
            <p className="description-header__year">({year})</p>
          </div>
          <div className="card-body">{description}</div>
        </div>
      </td>
    </tr>
  );
};

export default GameListItem;
