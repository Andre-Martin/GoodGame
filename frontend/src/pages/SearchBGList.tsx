import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { useSearchParams } from "react-router-dom";

import { Box } from "@mui/material";

import SearchListItem from "../components/SearchListItem";
import Pagination from "../components/Pagination";
import Spinner from "../reusableComponents/Spinner";
import Page404 from "./Page404";

import {
  fetchSearchIDs,
  fetchSearchContent,
  clearResult,
} from "../features/slices/searchSlice";

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
      return <Page404 message="Page not found " />;
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
    <Box sx={{ boxShadow: 3, p: 4, mt: 3 }} component="main">
      {content()}
      {resultLoadingStatus === "succeeded" && (
        <>
          <Box>
            {result?.map((item: ThingInfo, index: number) => (
              <SearchListItem key={item.id} {...item} number={index + 1} />
            ))}
          </Box>
          <Pagination
            amountOfItems={ids.length}
            route={`${ROUTES.search}?name=${name}`}
          />
        </>
      )}
    </Box>
  );
};

export default SearchBGList;
