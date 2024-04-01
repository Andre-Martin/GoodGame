import type { SingleGameComment } from "../utils/types";

const CommentBox = ({ rating, value, username }: SingleGameComment) => {
  let ratingColor: string;
  if (rating == "N/A") {
    ratingColor = "bg-secondary";
  } else if (+rating > 7) {
    ratingColor = "bg-success";
  } else if (+rating > 5) {
    ratingColor = "bg-warning";
  } else {
    ratingColor = "bg-danger";
  }

  return (
    <div className="row mx-0 my-2 border-top">
      <div className="col-2 d-flex justify-content-center align-items-center">
        <span className={`${ratingColor} p-3 rounded`}>{rating}</span>
      </div>
      <div className="col-10">
        <p className="text-info">{username}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default CommentBox;
