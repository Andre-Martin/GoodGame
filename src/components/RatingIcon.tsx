import { Typography } from "@mui/material";

interface Props {
  rating: string;
  styles?: object;
}

const RatingIcon = ({ rating, styles }: Props) => {
  let ratingColor: string;
  if (rating == "N/A") {
    ratingColor = "primary.main";
  } else if (+rating > 7) {
    ratingColor = "success.main";
  } else if (+rating > 5) {
    ratingColor = "warning.main";
  } else {
    ratingColor = "error.main";
  }
  return (
    <Typography
      variant="caption"
      sx={{
        p: 2,
        mr: 3,
        bgcolor: ratingColor,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        cursor: "pointer",
        ...styles,
      }}
    >
      {rating === "N/A" ? "N/A" : Math.round(+rating * 10) / 10}
    </Typography>
  );
};

export default RatingIcon;
