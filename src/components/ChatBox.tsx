import React from "react";
import { Link } from "react-router-dom";
import { uid } from "uid";

import ROUTES from "../utils/ROUTES";
import type { chatItem } from "../utils/types";

const ChatBox = ({ sender, message }: chatItem) => {
  return (
    <div key={uid()} className={sender ? "ai-textbox" : "user-textbox"}>
      <div className="textbox-icon"></div>
      <h4 className="textbox-title fs-5">{sender ? "GoodGameBot" : "You"}</h4>
      {message.map((message) => (
        <React.Fragment key={uid()}>
          <p className="textbox-content">{message.content}</p>
          {message?.recommendations &&
            message.recommendations.map((recommendation) => (
              <React.Fragment key={uid()}>
                <Link to={`${ROUTES.boardGameItem}${recommendation.id}`}>
                  {recommendation.content}
                </Link>
                <br />
              </React.Fragment>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ChatBox;
