import { useState } from "react";
import ChatCard from "../components/ChatCard";
import ChatBox from "../components/ChatBox";

import {
  cardMockInfo,
  chatBoxMockInfo1,
  chatBoxMockInfo2,
  chatBoxMockInfo3,
} from "../utils/mockInfo";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState();

  return (
    <main className="row m-0 mt-1 p-1 shadow-lg main-chat">
      <section className="col-lg-3 d-sm-none d-md-block col-sm-0 overflow-auto">
        <ChatCard {...cardMockInfo} key={1} />
        <ChatCard {...cardMockInfo} id={2} key={2} />
        <ChatCard {...cardMockInfo} id={3} key={3} />
        <ChatCard {...cardMockInfo} id={4} key={4} />
      </section>
      <section className="col-lg-9 col-sm-12 shadow-lg p-0 overflow-auto">
        <div className="chat-section">
          <ChatBox {...chatBoxMockInfo1} />
          <ChatBox {...chatBoxMockInfo2} />
          <ChatBox {...chatBoxMockInfo3} />
          <div className="input-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Message GoodGameBot... "
            />
            <button className="btn btn-outline-primary" type="button">
              <i className="bi bi-arrow-up-square-fill fs-4"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Chat;
