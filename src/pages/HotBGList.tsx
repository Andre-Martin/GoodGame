import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import GameListItem from "../components/GameListItem";
import Spinner from "../components/Spinner";

import { fetchBoardgames } from "../features/slices/boardgameListSlice";
import { BggData } from "../utils/types";

const HotBGList: React.FC = () => {
  const { boardgamesLoadingStatus, boardgamesList } = useAppSelector(
    (state) => state.boardgamesReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBoardgames({}));
  }, []);

  return (
    <main className="shadow-lg p-4 mt-3 rounded">
      {boardgamesLoadingStatus === "pending" && <Spinner />}
      {boardgamesLoadingStatus === "succeeded" && (
        <table className="table table-hover container">
          <tbody>
            {boardgamesList.map((item: BggData, index: number) => (
              <GameListItem key={item.id} {...item} number={index + 1} />
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default HotBGList;
