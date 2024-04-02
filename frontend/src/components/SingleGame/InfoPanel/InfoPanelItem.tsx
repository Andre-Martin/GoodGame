import { Grid, Typography } from "@mui/material";

interface Props {
  supInfo: string;
  subInfo: string;
  styles?: object;
}

const InfoPanelItem = (props: Props) => {
  const { subInfo, supInfo, styles } = props;
  return (
    <Grid
      item
      xs={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: 1,
        borderLeft: 1,
        ...styles,
      }}
    >
      <Typography>{subInfo}</Typography>
      <Typography sx={{ fontWeight: "light", borderBottom: "1px dashed gray" }}>
        {supInfo}
      </Typography>
    </Grid>
  );
};

export default InfoPanelItem;
