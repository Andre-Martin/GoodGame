import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { useSearchParams } from "react-router-dom";

import {
  fetchSearchIDs,
  fetchSearchContent,
  clearResult,
} from "../features/slices/searchSlice";

import SearchListItem from "../../frontend/components/SearchListItem";
import Pagination from "../../frontend/components/Pagination";
import Spinner from "../../frontend/components/Spinner";
import Page404 from "./Page404";

import { concatIDs, getSearchItemsByPage } from "../utils/common";
import { ITEMS_PER_PAGE } from "../utils/constants";
import ROUTES from "../utils/ROUTES";
import type { ThingInfo } from "../utils/types";

const SearchBGList: React.FC = () => {
  const { result, resultLoadingStatus, idsLoadingStatus, ids } = useAppSelector(
    (state) => state.search
  );
  const dispatch = useAppDispatch();
  //state to implement pagination
  const [currentBGs, setCurrentBGs] = useState<number[]>([]);

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const name = searchParams.get("name");

  useEffect(() => {
    dispatch(clearResult());
    if (typeof name === "string") dispatch(fetchSearchIDs(name));
  }, [name]);

  useEffect(() => {
    if (currentBGs.length !== 0) {
      dispatch(fetchSearchContent(concatIDs(currentBGs)));
    }
  }, [currentBGs]);

  useEffect(() => {
    if (idsLoadingStatus === "succeeded") {
      setCurrentBGs(getSearchItemsByPage(page, ids));
    }
  }, [idsLoadingStatus, name, page]);

  const content = () => {
    if (page > Math.ceil(ids.length / ITEMS_PER_PAGE) && ids.length !== 0) {
      return <div className="text-center">Page not found</div>;
    } else if (
      ids.length === 0 &&
      idsLoadingStatus == "succeeded" &&
      resultLoadingStatus !== "pending"
    ) {
      return <Page404 message="No results " />;
    } else if (resultLoadingStatus !== "succeeded") {
      return <Spinner />;
    }
  };

  return (
    <main className="shadow-lg p-4 mt-3 rounded">
      {content()}
      {resultLoadingStatus === "succeeded" && (
        <>
          <table className="table table-hover container">
            <tbody>
              {result?.map((item: ThingInfo, index: number) => (
                <SearchListItem key={item.id} {...item} number={index + 1} />
              ))}
            </tbody>
          </table>
          <Pagination
            amountOfItems={ids.length}
            route={`${ROUTES.search}?name=${name}`}
          />
        </>
      )}
    </main>
  );
};

export default SearchBGList;
