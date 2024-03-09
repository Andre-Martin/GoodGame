import { Link } from "react-router-dom";
import ROUTES from "../utils/ROUTES";
import { ChatCardProps } from "../utils/types";

const ChatCard = ({ title, img, description, id, year }: ChatCardProps) => {
  return (
    <div className="card border-light">
      <img src={img + id + ".png"} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {title} ({year})
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
