import { Link } from "react-router-dom";

import ROUTES from "../utils/ROUTES";
import type { Top50Info } from "../utils/types";

const Top50ListItem = ({ rank, title, year, id, thumbnail }: Top50Info) => {
  return (
    <tr className="row">
      <td className="col-md-1">{rank}</td>
      <td className="col-xs-12 col-md-4 col-lg-2">
        <Link to={`${ROUTES.boardGameItem}${id}`}>
          <img src={thumbnail} alt="" className="table-img_block" />
        </Link>
      </td>
      <td className="col-xs-12 col-md-7 col-lg-9">
        <div className="table-description">
          <div className="description-header">
            <p className="description-header__title">
              <Link to={ROUTES.boardGameItem + id}>{title}</Link>
            </p>
            <p className="description-header__year">({year})</p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Top50ListItem;
