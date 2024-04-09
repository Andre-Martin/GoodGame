import { Typography } from "@mui/material";

interface Props {
  rating: string;
  styles?: object;
}

const RatingIcon = ({ rating, styles }: Props) => {
  let ratingColor: string;
  if (rating == "N/A") {
    ratingColor = "#555555";
  } else if (+rating > 7) {
    ratingColor = "#28A745";
  } else if (+rating > 5) {
    ratingColor = "#FFC107";
  } else {
    ratingColor = "#E8343A";
  }
  return (
    <Typography
      variant="caption"
      data-testid="background"
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
