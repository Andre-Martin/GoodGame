import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import { sendMessage as sendMessageAction } from "../features/slices/chatSlice";

import ChatCard from "../components/ChatCard";
import ChatBox from "../components/ChatBox";

interface KeyboardEvent {
  key: string;
}

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const { messages, cards } = useAppSelector((state) => state.chatReducer);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  const sendMessage = () => {
    dispatch(
      sendMessageAction({ sender: false, message: [{ content: inputValue }] })
    );
    setInputValue("");
  };

  return (
    <main className="row m-0 mt-1 p-1 shadow-lg main-chat">
      <section className="col-lg-3 overflow-auto">
        {cards.map((item) => (
          <ChatCard {...item} key={item.id} />
        ))}
      </section>

      <section className="col-lg-9 col-sm-12 position-relative shadow-lg p-0 ">
        <div className="chat-section overflow-auto">
          {messages.map((item, index) => (
            <ChatBox {...item} key={index} />
          ))}
        </div>
        <div className="input-group mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Message GoodGameBot... "
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={sendMessage}
          >
            <i className="bi bi-arrow-up-square-fill fs-4"></i>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Chat;
