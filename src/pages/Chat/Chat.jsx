import { useState } from "react";

import { MessageBox } from "react-chat-elements";

import styles from "./Chat.module.css";
import "react-chat-elements/dist/main.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState();

  const onSubmit = (e) => {
    if (e.code !== "Enter") return;
    setMessages(() => [...messages, e.target.value]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.chat__header}>
          <div className={styles.chat__avatar}></div>
          <div className={styles.chat__info}>
            <p className={styles.chat__name}>BoardEdu</p>
            <p className={styles.chat__status}>Online</p>
          </div>
        </div>

        <div className={styles.chat__content}>
          <MessageBox
            position={"left"}
            type={"text"}
            title={"BordEdu"}
            text="Hello, what kind of game are you looking for?"
          />
          {messages.map((item) => {
            return (
              <MessageBox
                position={"right"}
                type={"text"}
                title={"You"}
                text={item}
              />
            );
          })}
        </div>

        <input
          onKeyDown={onSubmit}
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Message BoardEdu..."
        />
      </main>
    </>
  );
}

export default Chat;
