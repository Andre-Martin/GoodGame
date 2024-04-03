import { useSearchParams, Link } from "react-router-dom";

import {
  Pagination as PaginationMUI,
  PaginationItem,
  Box,
} from "@mui/material";

import { ITEMS_PER_PAGE } from "../utils/constants";

type Props = {
  amountOfItems: number;
  route: string;
};

const Pagination = ({ amountOfItems, route }: Props) => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <PaginationMUI
        page={page}
        count={Math.ceil(amountOfItems / ITEMS_PER_PAGE)}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${route}&page=${item.page}`}
            {...item}
          />
        )}
      />
    </Box>
  );
};

export default Pagination;
