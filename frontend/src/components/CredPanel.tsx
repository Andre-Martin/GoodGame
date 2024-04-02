import { List } from "@mui/material";
import CredPanelItem from "./CredPanelItem";

interface Props {
  alternativeNames: string[];
  links: {
    designers: string[];
    publishers: string[];
    artists: string[];
  };
}

const BGCredPanel = ({
  alternativeNames,
  links: { publishers, artists, designers },
}: Props) => {
  return (
    <List className="m-0 p-0">
      <CredPanelItem title="Alternative Names" arr={alternativeNames} />
      <CredPanelItem title="Designers" arr={designers} />
      <CredPanelItem title="Artists" arr={artists} />
      <CredPanelItem title="Publisher" arr={publishers} />
    </List>
  );
};

export default BGCredPanel;
