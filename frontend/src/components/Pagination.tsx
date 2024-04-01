import { useSearchParams, Link } from "react-router-dom";

import { ITEMS_PER_PAGE } from "../utils/constants";

import { Pagination as PaginationMUI, PaginationItem } from "@mui/material";

type Props = {
  amountOfItems: number;
  route: string;
};

const Pagination = ({ amountOfItems, route }: Props) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const page = parseInt(searchParams.get("page") || "1");

  return (
    <div className="pagination">
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
    </div>
  );
};

export default Pagination;
