import { Link } from "react-router-dom";
import ROUTES from "../utils/ROUTES";
import { ChatBoxProps } from "../utils/types";

const ChatBox = ({ isAI, messages, link }: ChatBoxProps) => {
  return (
    <div className={isAI ? "ai-textbox" : "user-textbox"}>
      <div className="textbox-icon"></div>
      <h4 className="textbox-title fs-5">{isAI ? "GoodGameBot" : "You"}</h4>
      {messages.map((message, index) => (
        <p key={index} className="textbox-content">
          {message}
        </p>
      ))}
      <p>
        {link?.map((item, index) => {
          return (
            <Link key={index} to={`${ROUTES.boardGameItem}${item.id}`}>
              {item.content}
            </Link>
          );
        })}
      </p>
    </div>
  );
};

export default ChatBox;
