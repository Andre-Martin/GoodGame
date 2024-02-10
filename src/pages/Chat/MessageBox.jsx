import styles from "./Chat.module.css";

const MessageBox = ({ title, text }) => {
  return (
    <>
      <div className={styles.chatbox}>
        <div className={styles.chatbox__icon}></div>
        <p className={styles.chatbox__title}>BoardEdu</p>
        <p className={styles.chatbox__text}>
          Hello, what kind of game are you looking for?
        </p>
      </div>
    </>
  );
};

export default MessageBox;
