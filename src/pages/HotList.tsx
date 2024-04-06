import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";

import Top50ListItem from "../components/HotList/HotListItem";
import Spinner from "../components/Spinner";

import { fetchHotList } from "../features/slices/hotListSlice";
import { HotItemInfo } from "../utils/types";
import { Box, Grid } from "@mui/material";

const HotBGList: React.FC = () => {
  const { hotList, hotListLoadingStatus } = useAppSelector(
    (state) => state.hotList
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotList());
  }, []);

  return (
    <Box sx={{ boxShadow: 4, borderRadius: 4, p: 4, mt: 3 }}>
      {hotListLoadingStatus === "pending" && <Spinner />}
      {hotListLoadingStatus === "succeeded" && (
        <Grid container spacing={5} justifyContent="center">
          {hotList.map((item: HotItemInfo) => (
            <Top50ListItem key={item.id} {...item} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HotBGList;
