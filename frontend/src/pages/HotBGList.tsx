import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import Top50ListItem from "../components/Top50ListItem";
import Spinner from "../reusableComponents/Spinner";

import { fetchBoardgames } from "../features/slices/boardgameListSlice";
import { Top50Info } from "../utils/types";
import { Grid } from "@mui/material";

const HotBGList: React.FC = () => {
  const { boardgamesLoadingStatus, boardgamesList } = useAppSelector(
    (state) => state.boardgameList
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBoardgames());
  }, []);

  return (
    <main className="shadow-lg p-4 mt-3 rounded">
      {boardgamesLoadingStatus === "pending" && <Spinner />}
      {boardgamesLoadingStatus === "succeeded" && (
        <Grid container spacing={5}>
          {boardgamesList.map((item: Top50Info) => (
            <Top50ListItem key={item.id} {...item} />
          ))}
        </Grid>
      )}
    </main>
  );
};

export default HotBGList;
