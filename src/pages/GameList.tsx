import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import GameListItem from "../components/GameListItem";

import { fetchBoardgames } from "../features/boardgamelist/slice";
import { BggData, BggResponse } from "../utils/types";

const GameList = () => {
  const { boardgamesLoadingStatus, boardgamesList } = useAppSelector(
    (state) => state.boardgamesReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBoardgames({ start: 132, amount: 123 }));
  }, []);

  return (
    <main className="shadow-lg p-4 mt-3 rounded">
      {boardgamesLoadingStatus === "pending" && <div>Loading...</div>}
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

export default GameList;
