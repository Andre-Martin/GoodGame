import { useAppSelector } from "../features/hooks/redux.hooks";
import { uid } from "uid";

import CommentBox from "./CommentBox";
import { useState } from "react";
import { SingleGameComment } from "../utils/types";

const CommentTab = () => {
  const { boardgameInfo } = useAppSelector((state) => state.boardgame);
  const [currentComments, setCurrentComments] = useState<number>(10);
  const loadComments = () => {
    setCurrentComments((currentComments) => (currentComments += 10));
  };

  return (
    <>
      <h2 className="text-center">Comments</h2>
      {boardgameInfo.comments
        .slice(0, currentComments)
        .map((item: SingleGameComment) => (
          <CommentBox {...item} key={uid()} />
        ))}

      {boardgameInfo.comments.length > currentComments ? (
        <button
          onClick={loadComments}
          className="btn btn-outline-primary d-block mx-auto my-3"
        >
          Load More
        </button>
      ) : null}
    </>
  );
};

export default CommentTab;
