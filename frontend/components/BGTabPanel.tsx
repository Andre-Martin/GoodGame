import { useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";

import CommentTab from "./CommentTab";
import VideoTab from "./VideoTab";
import StatTab from "./StatTab";
import MarketplaceTab from "./MarketplaceTab";

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return <div hidden={value !== index}>{value === index && children}</div>;
}

export default function VerticalTabs() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={4} lg={3}>
        <Tabs orientation="vertical" value={value} onChange={handleChange}>
          <Tab label="Comments" />
          <Tab label="Videos" />
          <Tab label="Stats" />
          <Tab label="Marketplace" />
        </Tabs>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <TabPanel value={value} index={0}>
          <CommentTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VideoTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StatTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MarketplaceTab />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
