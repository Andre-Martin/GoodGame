import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import { fetchSearchContent } from "../features/slices/searchSlice";

import GameListItem from "../components/GameListItem";
import { BggData } from "../utils/types";

const SearchBGList: React.FC = () => {
  const { result, resultLoadingStatus, idsLoadingStatus, ids } = useAppSelector(
    (state) => state.searchReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (idsLoadingStatus == "succeeded") {
      dispatch(fetchSearchContent(ids));
    }
  }, [idsLoadingStatus]);

  return (
    <main className="shadow-lg p-4 mt-3 rounded">
      {resultLoadingStatus !== "succeeded" && <div>Loading...</div>}
      {resultLoadingStatus === "succeeded" && (
        <table className="table table-hover container">
          <tbody>
            {result.map((item: BggData, index: number) => (
              <GameListItem key={item.id} {...item} number={index + 1} />
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default SearchBGList;
