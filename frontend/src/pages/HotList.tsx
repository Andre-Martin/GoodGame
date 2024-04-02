import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import Top50ListItem from "../components/HotBGList/HotListItem";
import Spinner from "../components/Spinner";

import { fetchBoardgames } from "../features/slices/boardgameListSlice";
import { Top50Info } from "../utils/types";
import { Box, Grid } from "@mui/material";

const HotBGList: React.FC = () => {
  const { boardgamesLoadingStatus, boardgamesList } = useAppSelector(
    (state) => state.boardgameList
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBoardgames());
  }, []);

  return (
    <Box sx={{ boxShadow: 4, borderRadius: 4, p: 4, mt: 3 }}>
      {boardgamesLoadingStatus === "pending" && <Spinner />}
      {boardgamesLoadingStatus === "succeeded" && (
        <Grid container spacing={5}>
          {boardgamesList.map((item: Top50Info) => (
            <Top50ListItem key={item.id} {...item} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HotBGList;
