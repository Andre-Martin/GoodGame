import { useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";

import CommentTab from "./CommentTab/CommentTab";
import VideoTab from "./VideoTab/VideoTab";
import StatTab from "./StatTab/StatTab";
import MarketplaceTab from "./MPTab/MarketplaceTab";

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabContent(props: TabPanelProps) {
  const { children, value, index } = props;
  return <div hidden={value !== index}>{value === index && children}</div>;
}

export default function TabPanel() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Comments" />
          <Tab label="Videos" />
          <Tab label="Stats" />
          <Tab label="Marketplace" />
        </Tabs>
      </Grid>
      <Grid item xs={12} mt={2}>
        <TabContent value={value} index={0}>
          <CommentTab />
        </TabContent>
        <TabContent value={value} index={1}>
          <VideoTab />
        </TabContent>
        <TabContent value={value} index={2}>
          <StatTab />
        </TabContent>
        <TabContent value={value} index={3}>
          <MarketplaceTab />
        </TabContent>
      </Grid>
    </Grid>
  );
}
