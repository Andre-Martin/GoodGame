import { Link } from "react-router-dom";
import ROUTES from "../utils/ROUTES";
import { card as chatCardProps } from "../utils/types";

const ChatCard = ({
  name,
  description,
  id,
  year,
  thumbnail,
}: chatCardProps) => {
  return (
    <div className="card border-light">
      <img src={thumbnail} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {name} ({year})
        </h5>
        <p className="card-text">{description}</p>
        <Link
          to={`${ROUTES.boardGameItem}${id}`}
          className="btn btn-outline-primary"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default ChatCard;
