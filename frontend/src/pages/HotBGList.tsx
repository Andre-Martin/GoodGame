import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import Top50ListItem from "../components/Top50ListItem";
import Spinner from "../components/Spinner";

import { fetchBoardgames } from "../features/slices/boardgameListSlice";
import { Top50Info } from "../utils/types";

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
        <table className="table table-hover container">
          <tbody>
            {boardgamesList.map((item: Top50Info) => (
              <Top50ListItem key={item.id} {...item} />
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default HotBGList;
