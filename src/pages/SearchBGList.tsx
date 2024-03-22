import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { useSearchParams } from "react-router-dom";

import {
  fetchSearchIDs,
  fetchSearchContent,
} from "../features/slices/searchSlice";

import GameListItem from "../components/GameListItem";
import Pagination from "../components/Pagination";

import { concatIDs, getSearchItemsByPage } from "../utils/common";
import { BggData } from "../utils/types";

const SearchBGList: React.FC = () => {
  const { result, resultLoadingStatus, idsLoadingStatus, ids } = useAppSelector(
    (state) => state.searchReducer
  );
  const dispatch = useAppDispatch();
  //state to implement pagination
  const [currentBGs, setCurrentBGs] = useState<number[]>([]);

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const name = searchParams.get("name");

  console.log();
  useEffect(() => {
    if (typeof name === "string") dispatch(fetchSearchIDs(name));
  }, []);

  useEffect(() => {
    if (currentBGs.length !== 0) {
      dispatch(fetchSearchContent(concatIDs(currentBGs)));
    }
  }, [currentBGs]);

  useEffect(() => {
    if (idsLoadingStatus === "succeeded") {
      setCurrentBGs(getSearchItemsByPage(page, ids));
    }
  }, [idsLoadingStatus, page]);

  return (
    <main className="shadow-lg p-4 mt-3 rounded">
      {resultLoadingStatus !== "succeeded" && <div>Loading...</div>}
      {resultLoadingStatus === "succeeded" && (
        <>
          <table className="table table-hover container">
            <tbody>
              {result?.map((item: BggData, index: number) => (
                <GameListItem key={item.id} {...item} number={index + 1} />
              ))}
            </tbody>
          </table>
          <Pagination amountOfItems={ids.length} />
        </>
      )}
    </main>
  );
};

export default SearchBGList;
