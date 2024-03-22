import { Pagination as PaginationMUI, PaginationItem } from "@mui/material";

import { useSearchParams, Link } from "react-router-dom";

import ROUTES from "../utils/ROUTES";
import { ITEMS_PER_PAGE } from "../utils/constants";

type Props = {
  amountOfItems: number;
};

const Pagination = (props: Props) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const page = parseInt(searchParams.get("page") || "1");

  return (
    <div className="pagination">
      <PaginationMUI
        page={page}
        count={Math.ceil(props.amountOfItems / ITEMS_PER_PAGE)}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${ROUTES.search}?name=${name}&page=${item.page}`}
            {...item}
          />
        )}
      />
    </div>
  );
};

// Math.ceil(props.amountOfItems / ITEMS_PER_PAGE)

export default Pagination;
