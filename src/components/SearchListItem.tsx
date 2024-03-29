import { Link } from "react-router-dom";

import { clearText } from "../utils/common";
import ROUTES from "../utils/ROUTES";
import type { ThingInfo } from "../utils/types";

interface Props extends ThingInfo {
  number: number;
}

const SearchListItem = ({
  number,
  description,
  title,
  year,
  id,
  image,
  thumbnail,
}: Props) => {
  return (
    <tr className="row">
      <td className="col-md-1">{number}</td>
      <td className="col-xs-12 col-md-4 col-lg-2">
        <Link to={`${ROUTES.boardGameItem}${id}`}>
          <img src={thumbnail} alt={title} className="table-img_block" />
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

          <div className="card-body">
            {clearText(description?.slice(0, 222))}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SearchListItem;
