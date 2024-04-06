import { useState } from "react";
import { useAppSelector } from "../../../../features/hooks/redux.hooks";
import { uid } from "uid";

import { Box } from "@mui/material";

import CommentBox from "./CommentTabItem";
import ButtonLoad from "../../../ButtonLoad";
import TextNotFound from "../../../TextNotFound";

import type { SingleGameComment } from "../../../../utils/types";

const CommentTab = () => {
  const { comments } = useAppSelector((state) => state.boardgame.boardgameInfo);
  const [currentComments, setCurrentComments] = useState<number>(10);
  const loadComments = () => {
    setCurrentComments((currentComments) => (currentComments += 10));
  };

  return (
    <>
      <TextNotFound content="There is no comments yet" array={comments} />
      <Box>
        {comments.slice(0, currentComments).map((item: SingleGameComment) => (
          <CommentBox {...item} key={uid()} />
        ))}
      </Box>

      <ButtonLoad
        total={comments.length}
        current={currentComments}
        onClick={loadComments}
      />
    </>
  );
};

export default CommentTab;
