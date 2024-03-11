import { Link } from "react-router-dom";
import ROUTES from "../utils/ROUTES";
import type { chatItem } from "../utils/types";

const ChatBox = ({ sender, message }: chatItem) => {
  return (
    <div className={sender ? "ai-textbox" : "user-textbox"}>
      <div className="textbox-icon"></div>
      <h4 className="textbox-title fs-5">{sender ? "GoodGameBot" : "You"}</h4>
      {message.map((message, index) => (
        <>
          <p key={index} className="textbox-content">
            {message.content}
          </p>
          {message?.recommendations &&
            message.recommendations.map((recommendation) => (
              <>
                <Link
                  key={index}
                  to={`${ROUTES.boardGameItem}${recommendation.id}`}
                >
                  {recommendation.content}
                </Link>
                <br />
              </>
            ))}
        </>
      ))}
    </div>
  );
};

export default ChatBox;
